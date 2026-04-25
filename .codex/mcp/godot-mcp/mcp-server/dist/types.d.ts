/**
 * Type definitions for the Godot MCP Server
 */
export interface ToolDefinition {
    name: string;
    description: string;
    inputSchema: {
        type: 'object';
        properties: Record<string, PropertySchema>;
        required?: string[];
    };
}
export interface PropertySchema {
    type?: 'string' | 'number' | 'boolean' | 'array' | 'object';
    description?: string;
    default?: unknown;
    enum?: string[];
    items?: PropertySchema;
    properties?: Record<string, PropertySchema>;
    required?: string[];
    oneOf?: PropertySchema[];
}
export interface ToolInvokeMessage {
    type: 'tool_invoke';
    id: string;
    tool: string;
    args: Record<string, unknown>;
}
export interface ToolResultMessage {
    type: 'tool_result';
    id: string;
    success: boolean;
    result?: unknown;
    error?: string;
}
export interface PingMessage {
    type: 'ping';
}
export interface PongMessage {
    type: 'pong';
}
export interface GodotReadyMessage {
    type: 'godot_ready';
    project_path: string;
    role?: 'editor' | 'runtime';
    started_at?: number;
}
export interface ClientStatusMessage {
    type: 'client_status';
    count: number;
}
export interface RuntimeStatusMessage {
    type: 'runtime_status';
    connected: boolean;
}
export type WebSocketMessage = ToolInvokeMessage | ToolResultMessage | PingMessage | PongMessage | GodotReadyMessage | ClientStatusMessage | RuntimeStatusMessage;
export interface ListDirResult {
    files: string[];
    folders: string[];
    path: string;
}
export interface ReadFileResult {
    content: string;
    path: string;
    line_count: number;
}
export interface SearchProjectResult {
    matches: Array<{
        file: string;
        line: number;
        content: string;
    }>;
    query: string;
    total_matches: number;
}
export interface CreateScriptResult {
    success: boolean;
    path: string;
    message: string;
}
//# sourceMappingURL=types.d.ts.map