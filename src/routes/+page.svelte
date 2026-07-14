<script lang="ts">
	import '../app.css';
	import CustomCursor from '$lib/components/CustomCursor.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Music from '$lib/components/Music.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<svelte:head>
	<title>Chloe — gothic softness.</title>
</svelte:head>

<CustomCursor />
<Navigation />

<!-- Floating bold gothic neon elements across the entire page -->
<div class="page-gothic-transit" aria-hidden="true">
	<span class="heavy-goth cyan" style="left: 10%; animation-delay: 0s;   animation-duration: 18s;">✟</span>
	<span class="heavy-goth pink lg" style="left: 25%; animation-delay: 3s;   animation-duration: 15s;">✧</span>
	<span class="heavy-goth white" style="left: 45%; animation-delay: 8s;   animation-duration: 22s;">✟</span>
	<span class="heavy-goth pink" style="left: 65%; animation-delay: 1.5s; animation-duration: 19s;">✟</span>
	<span class="heavy-goth cyan lg" style="left: 80%; animation-delay: 5s;   animation-duration: 25s;">☾</span>
	<span class="heavy-goth white" style="left: 35%; animation-delay: 11s;  animation-duration: 17s;">✟</span>
	<span class="heavy-goth cyan" style="left: 55%; animation-delay: 9s;   animation-duration: 21s;">✟</span>
	<span class="heavy-goth pink lg" style="left: 90%; animation-delay: 13s;  animation-duration: 28s;">✧</span>
</div>

<main id="main-content">
	<Hero />
	<Music />
	<Contact />
</main>

<style>
	main {
		position: relative;
		z-index: 1;
	}

	.page-gothic-transit {
		position: fixed;
		inset: 0;
		pointer-events: none;
		z-index: 10;
		overflow: hidden;
	}

	.heavy-goth {
		position: absolute;
		bottom: -100px;
		opacity: 0;
		font-family: serif;
		font-weight: normal;
		font-size: clamp(3rem, 7vw, 6rem);
		animation: driftUpNeon linear infinite;
	}

	.heavy-goth.lg {
		font-size: clamp(4rem, 10vw, 8rem);
	}

	.heavy-goth.cyan {
		color: #5BCEFA;
		filter: drop-shadow(0 0 10px rgba(91, 206, 250, 0.8)) drop-shadow(0 0 25px rgba(91, 206, 250, 0.6));
	}

	.heavy-goth.pink {
		color: #F5A9B8;
		filter: drop-shadow(0 0 10px rgba(245, 169, 184, 0.8)) drop-shadow(0 0 25px rgba(245, 169, 184, 0.6));
	}

	.heavy-goth.white {
		color: #FFFFFF;
		filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 25px rgba(255, 255, 255, 0.6));
	}

	@keyframes driftUpNeon {
		0% {
			transform: translateY(0) translateX(0) rotate(0deg);
			opacity: 0;
		}
		15% {
			opacity: 0.75;
		}
		85% {
			opacity: 0.75;
		}
		100% {
			transform: translateY(-120vh) translateX(100px) rotate(120deg);
			opacity: 0;
		}
	}
</style>
