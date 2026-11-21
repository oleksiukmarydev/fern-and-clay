# General guidance

Before changing frontend code in this repo, read and follow both local skills:

- `.agents/skills/design-ui-with-restraint/SKILL.md`
- `.agents/skills/write-practical-copy/SKILL.md`

Ignore the `prompts` folder.

## Work with starter project

Keep the supplied User Insights project intact as the starting example. Make scoped changes, use deterministic public-safe data, and verify the rendered desktop and mobile experience before claiming the work is complete.


<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
