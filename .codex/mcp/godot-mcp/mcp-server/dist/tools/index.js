/**
 * Tool registry - exports all tool definitions
 */
import { fileTools } from './file-tools.js';
import { sceneTools } from './scene-tools.js';
import { scriptTools } from './script-tools.js';
import { projectTools } from './project-tools.js';
import { assetTools } from './asset-tools.js';
import { visualizerTools } from './visualizer-tools.js';
export const allTools = [
    ...fileTools,
    ...sceneTools,
    ...scriptTools,
    ...projectTools,
    ...assetTools,
    ...visualizerTools,
];
export function toolExists(toolName) {
    return allTools.some(t => t.name === toolName);
}
//# sourceMappingURL=index.js.map