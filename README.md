# Hao Wu Academic Homepage

Personal academic homepage for Hao Wu, built with Vite, React, TypeScript, and Tailwind CSS v4.

Live site: [river-website-seven.vercel.app](https://river-website-seven.vercel.app)

## Local development

```bash
pnpm install
pnpm dev
```

## Quality checks

```bash
pnpm lint
pnpm build
```

## Content updates

Profile content, publications, experience, projects, and awards are maintained in `src/data/site.ts`. Layout components live in `src/components`.

The survey entry intentionally has no external link until its public metadata is confirmed.

## Deployment

The repository is configured for Vercel. Import the repository in Vercel and use the default settings:

- Install command: `pnpm install --frozen-lockfile`
- Build command: `pnpm run build`
- Output directory: `dist`
- Framework preset: Vite
