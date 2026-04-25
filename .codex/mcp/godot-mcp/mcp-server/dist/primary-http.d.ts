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
export interface ToolCallResult {
    content: Array<{
        type: string;
        text: string;
    }>;
    isError?: boolean;
}
export type ToolExecutor = (name: string, args: Record<string, unknown>) => Promise<ToolCallResult>;
export declare class PrimaryHttpServer {
    private server;
    private port;
    private serverVersion;
    private executeToolCall;
    private lastActivityTime;
    private proxyClientCount;
    private onClientCountChange;
    private toolCount;
    constructor(port: number, version: string, executor: ToolExecutor, toolCount: number);
    getLastActivityTime(): number;
    getProxyClientCount(): number;
    setClientCountChangeCallback(cb: (count: number) => void): void;
    start(): Promise<void>;
    isListening(): boolean;
    stop(): void;
    private handleRequest;
}
//# sourceMappingURL=primary-http.d.ts.map