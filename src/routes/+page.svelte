<script lang="ts">
	import '../app.css';
	import CustomCursor from '$lib/components/CustomCursor.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import TwoSides from '$lib/components/TwoSides.svelte';
	import Engineering from '$lib/components/Engineering.svelte';
	import Voice from '$lib/components/Voice.svelte';
	import VRChat from '$lib/components/VRChat.svelte';
	import Music from '$lib/components/Music.svelte';
	import Details from '$lib/components/Details.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<svelte:head>
	<title>Chloe — Engineer. Voice. Gothic Softness.</title>
</svelte:head>

<CustomCursor />
<Navigation />

<main id="main-content">
	<Hero />
	<About />
	<TwoSides />
	<Engineering />
	<Voice />
	<VRChat />
	<Music />
	<Details />
	<Contact />
</main>

<style>
	main {
		position: relative;
	}
</style>
