/**
 * HTTP client for proxy mode.
 * Communicates with the primary server to forward tool calls and probe health.
 */
export interface ProbeResult {
    alive: boolean;
    version?: string;
    toolCount?: number;
}
export interface ProxyToolResult {
    content: Array<{
        type: string;
        text: string;
    }>;
    isError?: boolean;
}
/**
 * Probe an existing primary server on the given port.
 * Returns { alive: true } if a healthy godot-mcp-server responds.
 */
export declare function probeExistingServer(port: number): Promise<ProbeResult>;
/**
 * Register this proxy client with the primary (increments AI client count).
 */
export declare function registerProxyClient(port: number): Promise<void>;
/**
 * Unregister this proxy client from the primary (decrements AI client count).
 */
export declare function unregisterProxyClient(port: number): Promise<void>;
/**
 * Forward a tool call to the primary server.
 * Timeout is generous because Godot tool execution can be slow.
 */
export declare function proxyToolCall(port: number, name: string, args: Record<string, unknown>, timeoutMs: number): Promise<ProxyToolResult>;
//# sourceMappingURL=proxy-client.d.ts.map