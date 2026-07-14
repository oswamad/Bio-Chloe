<script lang="ts">
	import '../app.css';
	import CustomCursor from '$lib/components/CustomCursor.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Music from '$lib/components/Music.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<svelte:head>
	<title>Chloe — gothic softness.</title>
</svelte:head>

<CustomCursor />
<Navigation />

<main id="main-content">
	<Hero />
	<About />
	<Music />
	<Contact />
</main>

<style>
	main {
		position: relative;
		z-index: 1;
	}
</style>
