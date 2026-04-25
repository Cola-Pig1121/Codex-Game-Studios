/**
 * GodotBridge - WebSocket server for communication with Godot.
 *
 * Two kinds of connections are supported:
 *   - editor   : the addon running inside the Godot editor process
 *   - runtime  : an MCPRuntime autoload running inside the user's launched game
 *
 * The first hello message (godot_ready) carries a `role` field. We accept
 * exactly one of each role at a time. Tool calls are routed by name:
 *   - RUNTIME_ONLY_TOOLS                       → runtime connection
 *   - list_signal_connections w/ source=runtime → runtime connection
 *   - everything else                           → editor connection
 */
export declare const RUNTIME_ONLY_TOOLS: Set<string>;
interface GodotInfo {
    projectPath?: string;
    connectedAt: Date;
    role: 'editor' | 'runtime';
}
type ConnectionCallback = (connected: boolean, info?: GodotInfo) => void;
type RuntimeStatusCallback = (connected: boolean) => void;
export declare class GodotBridge {
    private wss;
    private _listening;
    private editor;
    private runtime;
    private pendingRequests;
    private pingInterval;
    private connectionCallbacks;
    private runtimeStatusCallbacks;
    private port;
    private timeout;
    constructor(port?: number, timeout?: number);
    start(): Promise<void>;
    stop(): void;
    /**
     * Decide whether a tool invocation should be sent to the runtime connection.
     * For list_signal_connections we look at args.source to allow either editor
     * (scene_file) or runtime routing.
     */
    routeIsRuntime(toolName: string, args: Record<string, unknown> | undefined): boolean;
    private handleConnection;
    private startPingLoop;
    private failPending;
    private handleMessage;
    private handleToolResult;
    invokeTool(toolName: string, args: Record<string, unknown>): Promise<unknown>;
    /** Notify the editor of the current AI client count. */
    sendClientStatus(count: number): void;
    /** Push the current runtime helper status to the editor connection. */
    private sendRuntimeStatusToEditor;
    private sendTo;
    isListening(): boolean;
    isConnected(): boolean;
    isRuntimeConnected(): boolean;
    getStatus(): {
        connected: boolean;
        runtimeConnected: boolean;
        projectPath?: string;
        connectedAt?: Date;
        pendingRequests: number;
        port: number;
    };
    onConnectionChange(callback: ConnectionCallback): void;
    offConnectionChange(callback: ConnectionCallback): void;
    onRuntimeStatusChange(callback: RuntimeStatusCallback): void;
    private notifyConnectionChange;
    private notifyRuntimeStatus;
    private log;
}
export declare function getDefaultBridge(): GodotBridge;
export declare function createBridge(port?: number, timeout?: number): GodotBridge;
export {};
//# sourceMappingURL=godot-bridge.d.ts.map