<script lang="ts">
	import { onMount } from 'svelte';
	import { vrcSection } from '$lib/content/data';

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

<section bind:this={section} id="vr" aria-labelledby="vr-heading">
	<!-- VR HUD grid lines in background -->
	<div class="hud-bg" aria-hidden="true">
		<div class="hud-line hud-line--h"></div>
		<div class="hud-line hud-line--v"></div>
		<div class="hud-corner hud-corner--tl"></div>
		<div class="hud-corner hud-corner--tr"></div>
		<div class="hud-corner hud-corner--bl"></div>
		<div class="hud-corner hud-corner--br"></div>
	</div>

	<div class="container">
		<div class="header fade-in" class:visible>
			<span class="section-label">// 005 · VRChat & Digital Presence</span>
			<h2 id="vr-heading">{vrcSection.heading}</h2>
			<p class="body-text">{vrcSection.body}</p>
		</div>

		<div class="feature-grid" class:visible>
			{#each vrcSection.features as feature, i}
				<div
					class="feature-card fade-in"
					class:visible
					style="transition-delay: {0.1 + i * 0.07}s"
					role="article"
				>
					<div class="feature-scan" aria-hidden="true"></div>
					<span class="feature-label mono">{feature.label}</span>
					<span class="feature-detail">{feature.detail}</span>
				</div>
			{/each}
		</div>

		<p class="vr-tagline fade-in" class:visible style="transition-delay: 0.5s">
			<em>Voice. Movement. Identity. Connection.</em>
		</p>
	</div>
</section>

<style>
	section {
		padding: var(--space-2xl) var(--space-lg);
		background: linear-gradient(180deg, var(--color-plum) 0%, var(--color-charcoal) 100%);
		position: relative;
		overflow: hidden;
	}

	/* HUD decorative overlay */
	.hud-bg {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.hud-line {
		position: absolute;
		background: rgba(91, 206, 250, 0.04);
	}

	.hud-line--h {
		left: 0; right: 0;
		top: 50%;
		height: 1px;
	}

	.hud-line--v {
		top: 0; bottom: 0;
		left: 50%;
		width: 1px;
	}

	.hud-corner {
		position: absolute;
		width: 24px;
		height: 24px;
	}

	.hud-corner--tl { top: 2rem; left: 2rem; border-top: 1px solid rgba(91,206,250,0.2); border-left: 1px solid rgba(91,206,250,0.2); }
	.hud-corner--tr { top: 2rem; right: 2rem; border-top: 1px solid rgba(91,206,250,0.2); border-right: 1px solid rgba(91,206,250,0.2); }
	.hud-corner--bl { bottom: 2rem; left: 2rem; border-bottom: 1px solid rgba(91,206,250,0.2); border-left: 1px solid rgba(91,206,250,0.2); }
	.hud-corner--br { bottom: 2rem; right: 2rem; border-bottom: 1px solid rgba(91,206,250,0.2); border-right: 1px solid rgba(91,206,250,0.2); }

	.container {
		max-width: 1100px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 3rem;
		position: relative;
		z-index: 1;
	}

	.header {
		max-width: 620px;
	}

	h2 {
		font-size: clamp(1.8rem, 3vw, 2.6rem);
		margin: 0.75rem 0;
	}

	.body-text {
		font-size: 1rem;
		line-height: 1.8;
		color: var(--color-silver);
	}

	.feature-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		gap: 1rem;
	}

	.feature-card {
		padding: 1.25rem 1.5rem;
		border: 1px solid rgba(91, 206, 250, 0.1);
		border-radius: 4px;
		background: rgba(9, 9, 13, 0.5);
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		transition: border-color 0.3s, box-shadow 0.3s;
	}

	.feature-scan {
		position: absolute;
		top: 0;
		left: -100%;
		width: 60%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(91, 206, 250, 0.06), transparent);
		transition: left 0.6s var(--ease-smooth);
	}

	.feature-card:hover {
		border-color: rgba(91, 206, 250, 0.3);
		box-shadow: 0 0 24px rgba(91, 206, 250, 0.08);
	}

	.feature-card:hover .feature-scan {
		left: 150%;
	}

	.feature-label {
		color: var(--color-blue);
		font-size: 0.6rem;
		letter-spacing: 0.2em;
	}

	.feature-detail {
		color: var(--color-silver);
		font-size: 0.88rem;
	}

	.vr-tagline {
		text-align: center;
	}

	.vr-tagline em {
		font-family: var(--font-serif);
		font-size: 1.3rem;
		color: var(--color-blue);
		opacity: 0.7;
	}
</style>
