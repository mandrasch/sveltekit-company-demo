// TODO: error handling via import { error } from '@sveltejs/kit';

// We could private keys here which will never be shown
// to public (client side) javascript / dev tools
// See: Loading Data in SvelteKit (+page.js & +page.server.js)
// by Huntabyte, https://youtu.be/EQy-AYhZIlE?t=609

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const responseUsers = await fetch('https://jsonplaceholder.typicode.com/users');
	const users = await responseUsers.json();
	console.log("Retrieved users server side, client won't see this", { users });

	const responseWorldTime = await fetch('https://worldtimeapi.org/api/timezone/Europe/Vienna');
	const currentTime = await responseWorldTime.json();

	// TODO: error handling if one of them fails
	return {
		users,
		currentTime
	};
}
