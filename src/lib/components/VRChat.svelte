<script lang="ts">
	import { onMount } from 'svelte';
	import { vrcSection } from '$lib/content/data';

	let section: HTMLElement;
	let visible = false;

	onMount(() => {
		const obs = new IntersectionObserver(
			(entries) => { if (entries[0].isIntersecting) { visible = true; obs.disconnect(); } },
			{ threshold: 0.2 }
		);
		obs.observe(section);
		return () => obs.disconnect();
	});
</script>

<section bind:this={section} id="vr" aria-labelledby="vr-heading">
	<div class="container">
		<div class="vr-inner fade-in" class:visible>
			<span class="section-label">// VRChat</span>
			<h2 id="vr-heading">{vrcSection.heading}</h2>
			<p>{vrcSection.body}</p>
		</div>
	</div>
</section>

<style>
	section {
		padding: var(--space-2xl) var(--space-lg);
		background:
			linear-gradient(180deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.13) 100%),
			linear-gradient(180deg, var(--color-charcoal) 0%, var(--color-plum) 100%);
	}

	.container {
		max-width: 640px;
		margin: 0 auto;
	}

	.vr-inner {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	h2 {
		font-size: clamp(1.8rem, 3vw, 2.6rem);
	}

	p {
		font-size: 1.05rem;
		line-height: 1.85;
		color: var(--color-silver);
	}
</style>

