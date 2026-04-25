# Agent Roster

The following agents are available. Each has a dedicated definition file in
`.codex/agents/`. Use the agent best suited to the task at hand. When a task
spans multiple domains, the coordinating agent (usually `producer` or the
domain lead) should delegate to specialists.

## Tier 1 -- Leadership Agents (gpt-5.5 xhigh)
| Agent | Domain | When to Use |
|-------|--------|-------------|
| `creative-director` | High-level vision | Major creative decisions, pillar conflicts, tone/direction |
| `technical-director` | Technical vision | Architecture decisions, tech stack choices, performance strategy |
| `producer` | Production management | Sprint planning, milestone tracking, risk management, coordination |

## Tier 2 -- Department Lead Agents (gpt-5.5 medium)
| Agent | Domain | When to Use |
|-------|--------|-------------|
| `game-designer` | Game design | Mechanics, systems, progression, economy, balancing |
| `lead-programmer` | Code architecture | System design, code review, API design, refactoring |
| `art-director` | Visual direction | Style guides, art bible, asset standards, UI/UX direction |
| `audio-director` | Audio direction | Music direction, sound palette, audio implementation strategy |
| `narrative-director` | Story and writing | Story arcs, world-building, character design, dialogue strategy |
| `qa-lead` | Quality assurance | Test strategy, bug triage, release readiness, regression planning |
| `release-manager` | Release pipeline | Build management, versioning, changelogs, deployment, rollbacks |
| `localization-lead` | Internationalization | String externalization, translation pipeline, locale testing |

## Tier 3 -- Specialist Agents (gpt-5.5 medium or gpt-5.5 low)
| Agent | Domain | Model | When to Use |
|-------|--------|-------|-------------|
| `systems-designer` | Systems design | gpt-5.5 medium | Specific mechanic implementation, formula design, loops |
| `level-designer` | Level design | gpt-5.5 medium | Level layouts, pacing, encounter design, flow |
| `economy-designer` | Economy/balance | gpt-5.5 medium | Resource economies, loot tables, progression curves |
| `gameplay-programmer` | Gameplay code | gpt-5.5 medium | Feature implementation, gameplay systems code |
| `engine-programmer` | Engine systems | gpt-5.5 medium | Core engine, rendering, physics, memory management |
| `ai-programmer` | AI systems | gpt-5.5 medium | Behavior trees, pathfinding, NPC logic, state machines |
| `network-programmer` | Networking | gpt-5.5 medium | Netcode, replication, lag compensation, matchmaking |
| `tools-programmer` | Dev tools | gpt-5.5 medium | Editor extensions, pipeline tools, debug utilities |
| `ui-programmer` | UI implementation | gpt-5.5 medium | UI framework, screens, widgets, data binding |
| `technical-artist` | Tech art | gpt-5.5 medium | Shaders, VFX, optimization, art pipeline tools |
| `sound-designer` | Sound design | gpt-5.5 low | SFX design docs, audio event lists, mixing notes |
| `writer` | Dialogue/lore | gpt-5.5 medium | Dialogue writing, lore entries, item descriptions |
| `world-builder` | World/lore design | gpt-5.5 medium | World rules, faction design, history, geography |
| `qa-tester` | Test execution | gpt-5.5 low | Writing test cases, bug reports, test checklists |
| `performance-analyst` | Performance | gpt-5.5 medium | Profiling, optimization recs, memory analysis |
| `devops-engineer` | Build/deploy | gpt-5.5 low | CI/CD, build scripts, version control workflow |
| `analytics-engineer` | Telemetry | gpt-5.5 medium | Event tracking, dashboards, A/B test design |
| `ux-designer` | UX flows | gpt-5.5 medium | User flows, wireframes, accessibility, input handling |
| `prototyper` | Rapid prototyping | gpt-5.5 medium | Throwaway prototypes, mechanic testing, feasibility validation |
| `security-engineer` | Security | gpt-5.5 medium | Anti-cheat, exploit prevention, save encryption, network security |
| `accessibility-specialist` | Accessibility | gpt-5.5 low | WCAG compliance, colorblind modes, remapping, text scaling |
| `live-ops-designer` | Live operations | gpt-5.5 medium | Seasons, events, battle passes, retention, live economy |
| `community-manager` | Community | gpt-5.5 low | Patch notes, player feedback, crisis comms, community health |

## Engine-Specific Agents (use the set matching your engine)

### Engine Leads

| Agent | Engine | Model | When to Use |
| ---- | ---- | ---- | ---- |
| `unreal-specialist` | Unreal Engine 5 | gpt-5.5 medium | Blueprint vs C++, GAS overview, UE subsystems, Unreal optimization |
| `unity-specialist` | Unity | gpt-5.5 medium | MonoBehaviour vs DOTS, Addressables, URP/HDRP, Unity optimization |
| `godot-specialist` | Godot 4 | gpt-5.5 medium | GDScript patterns, node/scene architecture, signals, Godot optimization |

### Unreal Engine Sub-Specialists

| Agent | Subsystem | Model | When to Use |
| ---- | ---- | ---- | ---- |
| `ue-gas-specialist` | Gameplay Ability System | gpt-5.5 medium | Abilities, gameplay effects, attribute sets, tags, prediction |
| `ue-blueprint-specialist` | Blueprint Architecture | gpt-5.5 medium | BP/C++ boundary, graph standards, naming, BP optimization |
| `ue-replication-specialist` | Networking/Replication | gpt-5.5 medium | Property replication, RPCs, prediction, relevancy, bandwidth |
| `ue-umg-specialist` | UMG/CommonUI | gpt-5.5 medium | Widget hierarchy, data binding, CommonUI input, UI performance |

### Unity Sub-Specialists

| Agent | Subsystem | Model | When to Use |
| ---- | ---- | ---- | ---- |
| `unity-dots-specialist` | DOTS/ECS | gpt-5.5 medium | Entity Component System, Jobs, Burst compiler, hybrid renderer |
| `unity-shader-specialist` | Shaders/VFX | gpt-5.5 medium | Shader Graph, VFX Graph, URP/HDRP customization, post-processing |
| `unity-addressables-specialist` | Asset Management | gpt-5.5 medium | Addressable groups, async loading, memory, content delivery |
| `unity-ui-specialist` | UI Toolkit/UGUI | gpt-5.5 medium | UI Toolkit, UXML/USS, UGUI Canvas, data binding, cross-platform input |

### Godot Sub-Specialists

| Agent | Subsystem | Model | When to Use |
| ---- | ---- | ---- | ---- |
| `godot-gdscript-specialist` | GDScript | gpt-5.5 medium | Static typing, design patterns, signals, coroutines, GDScript performance |
| `godot-shader-specialist` | Shaders/Rendering | gpt-5.5 medium | Godot shading language, visual shaders, particles, post-processing |
| `godot-gdextension-specialist` | GDExtension | gpt-5.5 medium | C++/Rust bindings, native performance, custom nodes, build systems |
