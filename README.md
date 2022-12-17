# SvelteKit company demo

Simple company demo site for showcasing some SSR use cases with [SvelteKit 1.0](https://kit.svelte.dev/). It's work in progress.

![Screenshot demo site with welcome logo and simple navbar header](.gh-screenshots/preview.jpg?raw=true)

https://sveltekit-company-demo.mandrasch.dev/

This is based on the "SvelteKit demo app" which can be generated via

```
npm create svelte@latest my-app
```

I added TailwindCSS ([guide](https://tailwindcss.com/docs/guides/sveltekit)). See section "How was this created?" for more information.

## Deployment

This web app is deployed via ploi.io to an european Hetzner Cloud instance:

https://sveltekit-company-demo.mandrasch.dev/

See [Tutorial: Host SvelteKit apps with SSR-support via ploi.io on Hetzner Cloud](https://dev.to/mandrasch/host-sveltekit-apps-with-ssr-support-via-ploiio-on-hetzner-cloud-1cpa) for infos about this.

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

## How was this created?

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

# Added tailwind typography
# https://tailwindcss.com/docs/typography-plugin
npm install -D @tailwindcss/typography
```

Tested with
Node: v18.7.0
npm: 9.2.0

### Tutorials / resources used

Thanks very much to anyone providing these resources!

- Header & Navbar
  - https://larainfo.com/blogs/sveltekit-responsive-navbar-menu-with-tailwind-css-example

## TODOs / ideas

- [ ] Add a contact form
- [ ] Add WordPress REST API
  - (Already experimented with WPGraphQL https://github.com/mandrasch/sveltekit-wp-bs5)
- [ ] Add typo3 REST API
- [ ] Add google fonts locally (via font source?)
- [ ] Add (accessible) dropdown menu nav
  - https://caffeinecreations.ca/blog/accessible-dropdown-navigation-with-tailwind-css-and-alpine-js/
- [ ] Add images
- [ ] Add icons
- [ ] Add svelte-charts
- [ ] QM: Test with multiple screenreaders

On SvelteKits roadmap itself: Image optimization, Multilanguage

See https://dev.to/mandrasch for some blog posts about SvelteKit, happy to connect and discuss!
