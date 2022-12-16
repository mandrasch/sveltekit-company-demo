# SvelteKit company demo

Simple company demo site for showcasing a headless CMS use case with SvelteKit 1.0

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Hows was this created?

```bash
npm create svelte@latest .
# Selected
# - SvelteKit demo app
# - Yes, JavaScript with JSDoc comments
# - Add ESlint - yes
# - Add prettier - yes
# - Add playwright - yes
# - Add vitest - yes

npm install
git add -A && git commit -m "Initial commit"

# Added tailwind via tutorial
# https://tailwindcss.com/docs/guides/sveltekit

# Added sass:
npm i sass
```

Tested with
Node: v18.7.0
npm: 9.2.0

### Tutorials / resources used

Thanks very much to anyone providing these resources!

- Header & Navbar
  - https://larainfo.com/blogs/sveltekit-responsive-navbar-menu-with-tailwind-css-example
