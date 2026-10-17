export const REPOS = [
  {id:'rea', name:'REA', repo:'morluto/rea', url:'https://github.com/morluto/rea', cat:'RE', cmd:'npx rea-agents@latest setup'},
  {id:'anyps5', name:'AnyPS5', repo:'boykopovar/AnyPS5', url:'https://github.com/boykopovar/AnyPS5', cat:'RE', cmd:'git clone https://github.com/boykopovar/AnyPS5.git'},
  {id:'ghidra', name:'Ghidra', repo:'NationalSecurityAgency/ghidra', url:'https://github.com/NationalSecurityAgency/ghidra', cat:'RE', cmd:'./ghidraRun'},
  {id:'skills', name:'Matt Pocock Skills', repo:'mattpocock/skills', url:'https://github.com/mattpocock/skills', cat:'SKILLS', cmd:'npx skills add mattpocock/skills'},
  {id:'hyperframes', name:'HyperFrames', repo:'heygen-com/hyperframes', url:'https://github.com/heygen-com/hyperframes', cat:'VIDEO', cmd:'npx skills add heygen-com/hyperframes'},
  {id:'diagram', name:'Diagram Design', repo:'cathrynlavery/diagram-design', url:'https://github.com/cathrynlavery/diagram-design', cat:'DESIGN', cmd:'npx skills add cathrynlavery/diagram-design'},
  {id:'billion', name:'Billion Context', repo:'ranxianglei/billion-context', url:'https://github.com/ranxianglei/billion-context', cat:'CONTEXT', cmd:'plugin install billion-context'},
  {id:'cad', name:'Text to CAD', repo:'earthtojake/text-to-cad', url:'https://github.com/earthtojake/text-to-cad', cat:'CAD', cmd:'claude plugin install text-to-cad@earthtojake'},
  {id:'swiftui', name:'SwiftUI Agent Skill', repo:'twostraws/SwiftUI-Agent-Skill', url:'https://github.com/twostraws/SwiftUI-Agent-Skill', cat:'SKILLS', cmd:'npx skills add twostraws/swiftui-agent-skill'},
  {id:'opengym', name:'openGym', repo:'DuarteSantos8/openGym', url:'https://github.com/DuarteSantos8/openGym', cat:'APP', cmd:'docker compose up -d'},
]
export const REPO_NOTES: Record<string,string> = {
  rea:'Reverse Engineer Anything - MCP for agents, binary/Electron/APK/.NET',
  anyps5:'PS5 -> native PC relinker, not emulator, Zen2 x86-64',
  ghidra:'NSA SRE - disassembly + decompiler, REA engine',
  skills:'grill-me > to-spec > to-tickets > tdd > code-review > retro',
  hyperframes:'HTML + data-* clips -> MP4, Chrome + FFmpeg, deterministic',
  diagram:'42 types, HTML+SVG, 1 accent, no Mermaid slop',
  billion:'100K window, 5x token savings, month-long sessions',
  cad:'STEP/GLB/STL/3MF + DFM checks + drawings',
  swiftui:'SwiftUI Pro - layout, animation, accessibility, performance',
  opengym:'Self-hosted gym tracker, passkey, PWA',
}
