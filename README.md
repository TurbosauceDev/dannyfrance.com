# dannyfrance.com

danny's personal blog. please hire him, he needs to pay for this crap.

Danny's blog and portfolio. Astro, deployed on Vercel. **Every post is written by Danny. No LLM-generated posts.**

## Write a post
1. Copy `src/content/blog/_example-post.md` to `src/content/blog/<slug>.md` (or paste from Obsidian).
2. Set `title`, `date`, `tags` (`re-security`, `web-dev`, `hobbies`), `description`. `draft: true` hides it from the live site.
3. Images: put them next to the post (`src/content/blog/<slug>/img.png`) and link with `![](./img.png)`.
4. Commit and push to `main`. Vercel deploys in about a minute.

## Edit the site
| What | Where |
|---|---|
| Intro / About | `src/pages/index.astro` |
| Projects | `src/data/projects.ts` |
| Resume | `src/pages/resume.astro` |
| Tags | `src/data/tags.ts` |
| Theme (ElvUI-style, from maplestory.scumlord.studio) | `src/styles/global.css` |
| The no-LLM pledge | `src/data/pledge.ts`, shown on `/human` and Home |

## Run locally
```
npm install
npm run dev      # http://localhost:4321, shows drafts
npm run build    # output in dist/
```
