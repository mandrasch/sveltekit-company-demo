<script>
	/** @type {import('./$types').PageData} */
	export let data; // retrieved from server
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="prose lg:prose-xl mx-auto">
	<h1>Blog</h1>

	<!-- see console output-->
	{@debug data}

	<p>
		This data is fetched from <a class="underline" href="https://jsonplaceholder.typicode.com/users"
			>jsonplaceholder.typicode.com/users</a
		>, but server side. If I hadn't told you, you would have no access to this information / URL via
		dev tools.
	</p>

	<ul>
		{#each data.users as user}
			<li>{user.name}</li>
		{/each}
	</ul>

	<h2>Current time in Vienna (SSR test)</h2>
	<p>This data is fetched server side from https://worldtimeapi.org/api/timezone/Europe/Vienna</p>

	<pre>{JSON.stringify(data.currentTime.datetime)}</pre>
</div>
