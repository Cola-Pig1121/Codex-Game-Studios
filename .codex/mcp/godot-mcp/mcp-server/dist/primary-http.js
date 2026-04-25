/**
 * HTTP server for primary mode.
 * Allows proxy instances to forward tool calls and check health.
 *
 * Endpoints:
 *   GET  /health             → { server, version, godot_connected }
 *   POST /tool               → { name, args } → MCP-formatted result
 *   POST /client/register    → increment proxy client count
 *   POST /client/unregister  → decrement proxy client count
 */
import http from 'node:http';
const MAX_BODY_SIZE = 1024 * 1024; // 1 MB
export class PrimaryHttpServer {
    server = null;
    port;
    serverVersion;
    executeToolCall;
    lastActivityTime = Date.now();
    proxyClientCount = 0;
    onClientCountChange = null;
    toolCount;
    constructor(port, version, executor, toolCount) {
        this.port = port;
        this.serverVersion = version;
        this.executeToolCall = executor;
        this.toolCount = toolCount;
    }
    getLastActivityTime() {
        return this.lastActivityTime;
    }
    getProxyClientCount() {
        return this.proxyClientCount;
    }
    setClientCountChangeCallback(cb) {
        this.onClientCountChange = cb;
    }
    start() {
        return new Promise((resolve, reject) => {
            this.server = http.createServer((req, res) => this.handleRequest(req, res));
            this.server.on('error', (err) => {
                reject(err);
            });
            this.server.listen(this.port, '127.0.0.1', () => {
                resolve();
            });
        });
    }
    isListening() {
        return this.server?.listening ?? false;
    }
    stop() {
        if (this.server) {
            this.server.close();
            this.server = null;
        }
    }
    async handleRequest(req, res) {
        res.setHeader('Content-Type', 'application/json');
        try {
            if (req.method === 'GET' && req.url === '/health') {
                this.lastActivityTime = Date.now();
                res.writeHead(200);
                res.end(JSON.stringify({
                    server: 'godot-mcp-server',
                    version: this.serverVersion,
                    tool_count: this.toolCount,
                }));
                return;
            }
            if (req.method === 'POST' && req.url === '/tool') {
                this.lastActivityTime = Date.now();
                const body = await readBody(req);
                const { name, args } = JSON.parse(body);
                if (typeof name !== 'string') {
                    res.writeHead(400);
                    res.end(JSON.stringify({ error: 'Missing or invalid "name" field' }));
                    return;
                }
                const result = await this.executeToolCall(name, args || {});
                res.writeHead(200);
                res.end(JSON.stringify(result));
                return;
            }
            if (req.method === 'POST' && req.url === '/client/register') {
                this.proxyClientCount++;
                this.onClientCountChange?.(this.proxyClientCount);
                res.writeHead(200);
                res.end(JSON.stringify({ proxy_clients: this.proxyClientCount }));
                return;
            }
            if (req.method === 'POST' && req.url === '/client/unregister') {
                this.proxyClientCount = Math.max(0, this.proxyClientCount - 1);
                this.onClientCountChange?.(this.proxyClientCount);
                res.writeHead(200);
                res.end(JSON.stringify({ proxy_clients: this.proxyClientCount }));
                return;
            }
            res.writeHead(404);
            res.end(JSON.stringify({ error: 'Not found' }));
        }
        catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            console.error(`[primary-http] Request error: ${message}`);
            if (!res.headersSent) {
                res.writeHead(500);
                res.end(JSON.stringify({ error: message }));
            }
        }
    }
}
function readBody(req) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        let size = 0;
        req.on('data', (chunk) => {
            size += chunk.length;
            if (size > MAX_BODY_SIZE) {
                reject(new Error('Request body too large'));
                req.destroy();
                return;
            }
            chunks.push(chunk);
        });
        req.on('end', () => resolve(Buffer.concat(chunks).toString()));
        req.on('error', reject);
    });
}
//# sourceMappingURL=primary-http.js.map