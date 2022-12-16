<script>
	import Header from './Header.svelte';
	import HeaderOriginal from './Header.original.svelte';
	import './styles.css';
	import '../app.css'; // tailwindCSS
</script>

<div class="app">
	<Header />
	<!-- <HeaderOriginal /> -->

	<!-- TODO: Good practice here with py and px? How to optimize for mobile? -->
	<main class="container mx-auto py-20 px-10">
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
