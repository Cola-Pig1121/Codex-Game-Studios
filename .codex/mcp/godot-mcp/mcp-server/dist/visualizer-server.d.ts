/**
 * HTTP + WebSocket server for the project visualization.
 * - Serves HTML template with injected project data
 * - WebSocket for real-time edits (internal, not exposed as MCP tools)
 */
import type { GodotBridge } from './godot-bridge.js';
/**
 * Set the Godot bridge reference for internal commands.
 */
export declare function setGodotBridge(bridge: GodotBridge): void;
/**
 * Serve the visualization and open the browser.
 * Returns the URL where it's hosted.
 */
export declare function serveVisualization(projectData: unknown): Promise<string>;
/**
 * Stop the visualization server if running.
 */
export declare function stopVisualizationServer(): void;
//# sourceMappingURL=visualizer-server.d.ts.map