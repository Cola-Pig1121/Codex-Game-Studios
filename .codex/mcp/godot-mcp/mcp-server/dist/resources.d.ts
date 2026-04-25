/**
 * MCP resources for the Godot MCP Server.
 *
 * These are short, opt-in markdown guides that an agent can READ on demand
 * via the standard MCP `resources/list` and `resources/read` requests. They
 * keep the per-tool description schemas lean (one or two sentences) while
 * still letting the agent pull deeper guidance when a workflow gets tricky.
 *
 * Naming: godot-mcp://guide/<topic>
 */
import type { Server } from '@modelcontextprotocol/sdk/server/index.js';
export interface Guide {
    uri: string;
    name: string;
    /** Short stable identifier for use with the `get_guide` tool (no URI prefix). */
    slug: string;
    description: string;
    mimeType: 'text/markdown';
    text: string;
}
export declare const GUIDES: Guide[];
export declare function registerResources(server: Server): void;
//# sourceMappingURL=resources.d.ts.map