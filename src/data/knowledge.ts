export type Knowledge = {
  id: string;
  name: string;
  repo: string;
  stars: number;
  category: string;
  useWhen: string; // WHEN AI should use it
  install: string;
  prompt: string; // what AI should tell user / do
  workflow: string;
}

export const KNOWLEDGE: Knowledge[] = [
  { id: 'rea', name: 'REA', repo: 'morluto/rea', stars: 305499, category: 'RE', useWhen: 'User wants to reverse engineer ANY app, binary, APK, Electron, .NET', install: 'npx rea-agents@latest setup', prompt: 'Use REA MCP to analyze app behavior down to native binaries before rebuilding', workflow: '1. Run REA setup 2. Analyze target app 3. Extract behavior 4. Rebuild frontend clone' },
  { id: 'anyps5', name: 'AnyPS5', repo: 'boykopovar/AnyPS5', stars: 41368, category: 'RE', useWhen: 'User wants PS5 game / exe ported to PC Linux/Windows', install: 'git clone https://github.com/boykopovar/AnyPS5.git', prompt: 'Use AnyPS5 Zen2 x86-64 relinker, not emulator', workflow: 'Clone > Relink PS5 exe > Test on Linux/Windows' },
  { id: 'ghidra', name: 'Ghidra', repo: 'NationalSecurityAgency/ghidra', stars: 90160, category: 'RE', useWhen: 'User wants disassembly, decompile, deep binary analysis', install: './ghidraRun', prompt: 'Use Ghidra SRE as REA engine for deep analysis', workflow: 'Open in Ghidra > Decompile > Understand logic > Rebuild' },
  { id: 'skills', name: 'Matt Pocock Skills', repo: 'mattpocock/skills', stars: 294952, category: 'SKILLS', useWhen: 'User wants professional engineering workflow - spec, tickets, TDD, code review', install: 'npx skills add mattpocock/skills', prompt: 'Follow grill-me > to-spec > to-tickets > tdd > code-review > retro', workflow: 'Ask grill-me > Write spec > Create tickets > TDD build > Code review' },
  { id: 'hyperframes', name: 'HyperFrames', repo: 'heygen-com/hyperframes', stars: 65875, category: 'VIDEO', useWhen: 'User wants to turn HTML into MP4 video, deterministic render', install: 'npx skills add heygen-com/hyperframes', prompt: 'Write HTML + data-* clips, render with Chrome + FFmpeg', workflow: 'Write HTML > Add data-* > Render to MP4' },
  { id: 'diagram', name: 'Diagram Design', repo: 'cathrynlavery/diagram-design', stars: 56921, category: 'DESIGN', useWhen: 'User wants diagram, architecture, system design - no Mermaid slop', install: 'npx skills add cathrynlavery/diagram-design', prompt: 'Use 42 types, HTML+SVG, 1 accent, editorial style', workflow: 'Choose type (42) > HTML+SVG > 1 accent color' },
  { id: 'billion', name: 'Billion Context', repo: 'ranxianglei/billion-context', stars: 1691, category: 'CONTEXT', useWhen: 'User project is huge, 100K window, need token saving', install: 'plugin install billion-context', prompt: 'Use Billion to save context, keep 100K window efficient', workflow: 'Install plugin > Compress context > Continue building' },
  { id: 'cad', name: 'Text to CAD', repo: 'earthtojake/text-to-cad', stars: 21228, category: 'CAD', useWhen: 'User wants 3D model, STEP/GLB/STL, drawings from text', install: 'claude plugin install text-to-cad@earthtojake', prompt: 'Give agent CAD superpowers, DFM checks + drawings', workflow: 'Text prompt > Generate STEP/GLB > DFM check > Drawings' },
  { id: 'swiftui', name: 'SwiftUI Agent Skill', repo: 'twostraws/SwiftUI-Agent-Skill', stars: 6194, category: 'APP', useWhen: 'User wants iOS / SwiftUI Pro layout, animation, accessibility', install: 'npx skills add twostraws/swiftui-agent-skill', prompt: 'Use SwiftUI Pro best practices for layout, animation, performance', workflow: 'Design in SwiftUI > Animation > Accessibility check' },
  { id: 'openGym', name: 'openGym', repo: 'DuarteSantos8/openGym', stars: 13123, category: 'APP', useWhen: 'User wants self-hosted gym tracker, PWA, passkey, routines', install: 'docker compose up -d', prompt: 'Self-hosted gym app - plan routines, log supersets, warm-ups, cardio, muscles', workflow: 'docker up > Create routine > Log workout' },
];

export const SYSTEM_PROMPT = `You are DOLOR-STUDIO AI inside WORKSPACE. When user wants to build anything, FIRST check KNOWLEDGE:
- RE / binary -> REA + Ghidra
- PS5 -> AnyPS5
- Engineering workflow -> Matt Pocock Skills
- Video -> HyperFrames
- Diagram -> Diagram Design
- Huge project -> Billion Context
- 3D -> Text to CAD
- iOS -> SwiftUI Skill
- Gym app -> openGym
Then arrange result as FRONTEND for user.`;
