// TODO(Danny): rewrite these one-liners in your own words. Names/dates/status come from your Obsidian vault.
export type Project = { name: string; blurb: string; when: string; status: string; tags: string[]; url?: string };

export const PROJECTS: Project[] = [
  { name: 'MapleStory Classic World planner', blurb: 'Planner, database and market tools for MapleStory Classic World, plus a Windows grind tracker.', when: '2026-10 →', status: 'Active', tags: ['web-dev', 're-security'], url: 'https://maplestory.scumlord.studio' },
  { name: 'Home lab', blurb: 'Raspberry Pi DNS (Pi-hole + Unbound), Tailscale, Grafana, and a local LLM on the tailnet.', when: '2026-11 →', status: 'Running', tags: ['hobbies'] },
  { name: 'TurbozoForever', blurb: 'Modular UI addon for the WoW "Forever" beta: a flat dark reskin of the stock interface.', when: '2026-10', status: 'Working', tags: ['hobbies'] },
  { name: 'TurbozoTCG', blurb: 'Trading-card store on Shopify, plus a local thermal-label app.', when: '2026-05 → 10', status: 'In use', tags: ['web-dev'] },
  { name: 'DonutRoyale', blurb: 'WoW addon: blackjack and 5-card draw with friends.', when: '2026-04 → 05', status: 'v2.2', tags: ['hobbies'] },
];
