<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';

	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}

	// TODO: Add escape key to exit menu
	// TODO: Improve screenreader output with sr-only
</script>

<!-- TODO: Is structure <header> > <nav> good practice for a11y? -->

<header class="bg-gray-800">
	<nav class="container max-w-6xl	px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
		<div class="flex items-center justify-between">
			<a class="text-xl font-bold text-gray-100 md:text-2xl hover:text-blue-400" href="/"
				>Sustainable Company X
			</a>
			<!-- Mobile menu button -->
			<div class="flex md:hidden">
				<button
					on:click={toggleNavbar}
					type="button"
					class="mobile-menu-btn text-gray-100 hover:text-gray-400 focus:outline-none focus:ring focus:ring-slate-50"
				>
					<span class="sr-only">Open menu</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</div>
		</div>

		<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
		<div
			class="{showMenu
				? 'flex'
				: 'hidden'} flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
		>
			<ul
				class="flex flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
			>
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a class="block text-gray-100 hover:text-blue-400" href="/">Home</a>
				</li>
				<li aria-current={$page.url.pathname === '/blog' ? 'page' : undefined}>
					<a class="text-gray-100 hover:text-blue-400" href="/blog">Blog</a>
				</li>
				<li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
					<a class="text-gray-100 hover:text-blue-400" href="/contact">Contact</a>
				</li>
				<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
					<a class="text-gray-100 hover:text-blue-400" href="/about">About Us</a>
				</li>
				<li aria-current={$page.url.pathname === '/sverdle' ? 'page' : undefined}>
					<a class="text-gray-100 hover:text-blue-400" href="/sverdle">Sverdle</a>
				</li>
			</ul>
			<div class="space-y-2">
				<!-- <a
					href="/contact"
					class="py-3 px-4 text-center border text-gray-800 bg-white hover:text-indigo-600 rounded-md block lg:inline lg:border-0"
				>
					Call us
				</a> -->
				<a
					href="/contact"
					class="py-3 px-4 text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow block lg:inline"
				>
					Get a quote
				</a>
			</div>
		</div>
	</nav>
</header>

<!-- TODO find out how to use css? -->
<style lang="scss">
	// Idea used from SvelteKit demo site
	// TODO: transform to tailwind?
	li {
		position: relative;
		height: 100%;
		min-height: 3em;
		display: flex;
		align-items: center;
		a {
			display: flex;
			height: 100%;

			padding: 0 0.5rem;
		}
	}

	// indicator css trick, 0x0 box -> border will generate an arrow
	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid white; // var(--color-theme-1)
	}

	// mobile adjustments for indicator
	@media (max-width: 768px) {
		li {
			flex-grow: 1;
			width: 100%;
			a {
				width: 100%;
			}
		}
		li[aria-current='page']::before {
			--size: 6px;
			position: absolute;
			width: 0;
			height: 0;
			top: calc(50% - var(--size));
			left: auto;
			right: 0;
			border: var(--size) solid transparent;
			border-right: var(--size) solid white; // var(--color-theme-1)
		}
	}

	// TODO: these do not work in SvelteKit?! https://tailwindcss.com/docs/functions-and-directives#screen
	/* @media screen(sm) {
		body {
			color: red;
		}
	}*/
	// TODO: use another arrow / rotate it for mobile (which breakpoints to use?)
</style>
