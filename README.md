# dannyfrance.com

danny's personal blog. please hire him, he needs to pay for this crap.

Danny's blog and portfolio. Astro, deployed on Vercel. **Every post is written by Danny. No LLM-generated posts.**

## Editing the site: dannyfrance.com/keystatic
The site has a built-in editor ([Keystatic](https://keystatic.com)). Sign in with GitHub, write, hit Save. Each save is a commit to `main`, and Vercel redeploys in about a minute.

| In the editor | Stored in |
|---|---|
| Blog posts | `src/content/blog/<slug>.md` (images in `src/content/blog/_images/`) |
| Home page intro | `src/data/home.json` |
| Projects | `src/data/projects.json` |
| Resume | `src/data/resume.json` |

New posts start as **Draft** (hidden on the live site). Untick Draft to publish.

Locally, `npm run dev` then open http://localhost:4321/keystatic. That edits the files on disk, no sign-in; commit and push yourself.

### Writing in Obsidian instead
Posts are plain Markdown, so you can still write them anywhere. Start from `docs/post-template.md`, save it as `src/content/blog/<slug>.md`, commit and push. Obsidian-only syntax (`[[wikilinks]]`, callouts, `![[embeds]]`) won't render; use normal Markdown links and images.

### One-time setup for the live editor (GitHub App)
The live editor needs a GitHub App so it can sign you in and commit for you.
1. GitHub → Settings → Developer settings → GitHub Apps → **New GitHub App**.
   - Name: e.g. `dannyfrance-keystatic`. Homepage URL: `https://www.dannyfrance.com`
   - Callback URLs: `https://www.dannyfrance.com/api/keystatic/github/oauth/callback` and `http://127.0.0.1:4321/api/keystatic/github/oauth/callback`
   - Tick **Request user authorization (OAuth) during installation**. Untick Webhook → Active.
   - Repository permissions: **Contents** read & write, **Pull requests** read & write, **Metadata** read-only.
   - Where can it be installed: Only on this account.
2. Create it, then **Generate a new client secret**. Note the Client ID, the secret, and the app's slug (the last part of its public URL).
3. **Install App** → only `TurbosauceDev/dannyfrance.com`.
4. Vercel → project `dannyfrance` → Settings → Environment Variables (Production and Preview), then redeploy:
   - `KEYSTATIC_GITHUB_CLIENT_ID` = Client ID
   - `KEYSTATIC_GITHUB_CLIENT_SECRET` = client secret
   - `KEYSTATIC_SECRET` = any long random string (`openssl rand -hex 32`)
   - `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` = the app slug

Only GitHub accounts with write access to this repo can save.

## Edit the code
| What | Where |
|---|---|
| Tags | `src/data/tags.ts` (also updates the editor's tag list) |
| Editor fields | `keystatic.config.ts` |
| Theme (ElvUI-style, from maplestory.scumlord.studio) | `src/styles/global.css` |
| The no-LLM pledge | `src/data/pledge.ts`, shown on `/human` and Home |

## Run locally
```
npm install
npm run dev      # http://localhost:4321 (editor at /keystatic), shows drafts
npm run build    # output in dist/
```
