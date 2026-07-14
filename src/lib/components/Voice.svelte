<script lang="ts">
	import { onMount } from 'svelte';
	import Waveform from './Waveform.svelte';
	import { voice } from '$lib/content/data';

	let section: HTMLElement;
	let visible = false;

	onMount(() => {
		const obs = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					visible = true;
					obs.disconnect();
				}
			},
			{ threshold: 0.2 }
		);
		obs.observe(section);
		return () => obs.disconnect();
	});
</script>

<section bind:this={section} id="voice" aria-labelledby="voice-heading">
	<div class="waveform-bg" aria-hidden="true">
		<Waveform height={120} color="var(--color-pink)" secondary="var(--color-blue)" />
	</div>

	<div class="container">
		<div class="voice-inner fade-in" class:visible>
			<span class="section-label">// 004 · Voice & Identity</span>
			<h2 id="voice-heading">{voice.heading}</h2>
			<blockquote>
				<p>{voice.body}</p>
			</blockquote>

			<div class="descriptor-ring" aria-label="Voice descriptors">
				{#each voice.descriptors as descriptor, i}
					<span
						class="descriptor mono"
						style="animation-delay: {i * 0.12}s"
					>
						{descriptor}
					</span>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	section {
		padding: var(--space-2xl) var(--space-lg);
		background: linear-gradient(180deg, var(--color-plum) 0%, var(--color-wine) 50%, var(--color-plum) 100%);
		position: relative;
		overflow: hidden;
	}

	.waveform-bg {
		position: absolute;
		top: 50%;
		left: 0;
		right: 0;
		transform: translateY(-50%);
		opacity: 0.15;
		pointer-events: none;
	}

	.container {
		max-width: 860px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}

	.voice-inner {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		align-items: center;
		text-align: center;
	}

	h2 {
		font-size: clamp(1.8rem, 3vw, 2.6rem);
	}

	blockquote {
		border: none;
		padding: 2rem;
		background: rgba(9, 9, 13, 0.4);
		border-left: 2px solid var(--color-pink);
		border-radius: 0 4px 4px 0;
		text-align: left;
		max-width: 680px;
		backdrop-filter: blur(8px);
	}

	blockquote p {
		font-family: var(--font-serif);
		font-size: 1.1rem;
		font-style: italic;
		color: var(--color-cream);
		line-height: 1.85;
	}

	.descriptor-ring {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.75rem;
		max-width: 560px;
	}

	.descriptor {
		font-size: 0.65rem;
		letter-spacing: 0.18em;
		padding: 0.35rem 0.8rem;
		border: 1px solid rgba(245, 169, 184, 0.25);
		border-radius: 20px;
		color: var(--color-pink);
		background: rgba(245, 169, 184, 0.05);
		animation: fadeSlide 0.6s var(--ease-smooth) both;
	}

	@keyframes fadeSlide {
		from { opacity: 0; transform: translateY(8px); }
		to   { opacity: 1; transform: translateY(0); }
	}

	.descriptor:hover {
		background: rgba(245, 169, 184, 0.12);
		border-color: rgba(245, 169, 184, 0.5);
		box-shadow: var(--glow-pink);
	}
</style>
