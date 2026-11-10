// The blog's tags. Add one here and it gets its own /tags/<slug> page.
export const TAGS = {
  're-security': { label: 'RE / Security', blurb: 'Reverse engineering and security research.' },
  'web-dev': { label: 'Web dev', blurb: 'Building things for the web.' },
  hobbies: { label: 'Hobbies', blurb: 'Games, the home lab, and everything else.' },
} as const;

export type TagSlug = keyof typeof TAGS;
export const TAG_SLUGS = Object.keys(TAGS) as [TagSlug, ...TagSlug[]];
