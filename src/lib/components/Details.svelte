<script lang="ts">
	import { onMount } from 'svelte';
	import { details } from '$lib/content/data';

	let section: HTMLElement;
	let visible = false;

	// Pseudo-random positions for constellation dots
	// Using a seeded pattern for consistency
	const positions = details.map((_, i) => ({
		x: 8 + ((i * 137.508) % 84),    // golden angle spread
		y: 10 + ((i * 97.3) % 80)
	}));

	let hoveredIndex: number | null = null;

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

<section bind:this={section} id="details" aria-labelledby="details-heading">
	<div class="container">
		<div class="header fade-in" class:visible>
			<span class="section-label">// 007 · Small Details</span>
			<h2 id="details-heading">The constellation<br />of <em>smaller truths</em></h2>
			<p class="subtitle">Hover the stars.</p>
		</div>

		<div class="constellation-wrap fade-in" class:visible style="transition-delay: 0.2s">
			<!-- SVG connector lines -->
			<svg class="connector-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
				{#each positions as pos, i}
					{#if i < positions.length - 1}
						<line
							x1="{pos.x}%" y1="{pos.y}%"
							x2="{positions[i + 1].x}%" y2="{positions[i + 1].y}%"
							stroke="rgba(245,169,184,0.08)"
							stroke-width="0.3"
						/>
					{/if}
				{/each}
			</svg>

			<!-- Detail nodes -->
			{#each details as detail, i}
				<button
					class="detail-node"
					style="left: {positions[i].x}%; top: {positions[i].y}%;"
					class:active={hoveredIndex === i}
					on:mouseenter={() => (hoveredIndex = i)}
					on:mouseleave={() => (hoveredIndex = null)}
					on:focus={() => (hoveredIndex = i)}
					on:blur={() => (hoveredIndex = null)}
					aria-label="{detail.label}: {detail.value}"
				>
					<span class="node-dot" aria-hidden="true"></span>
					{#if hoveredIndex === i}
						<div class="node-tooltip" role="tooltip">
							<span class="mono tooltip-label">{detail.label}</span>
							<span class="tooltip-value">{detail.value}</span>
						</div>
					{/if}
				</button>
			{/each}
		</div>

		<!-- Fallback list for accessibility / mobile -->
		<details class="detail-list-fallback">
			<summary class="mono">View all details</summary>
			<ul>
				{#each details as detail}
					<li>
						<span class="mono detail-label">{detail.label}</span>
						<span class="detail-value">{detail.value}</span>
					</li>
				{/each}
			</ul>
		</details>
	</div>
</section>

<style>
	section {
		padding: var(--space-2xl) var(--space-lg);
		background: linear-gradient(180deg, var(--color-plum) 0%, var(--color-charcoal) 100%);
		position: relative;
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.header {
		max-width: 480px;
	}

	h2 {
		font-size: clamp(1.8rem, 3vw, 2.6rem);
		margin: 0.75rem 0;
	}

	h2 em {
		color: var(--color-lavender);
		font-style: italic;
	}

	.subtitle {
		color: var(--color-silver);
		opacity: 0.5;
		font-size: 0.85rem;
	}

	.constellation-wrap {
		position: relative;
		width: 100%;
		aspect-ratio: 16 / 7;
		min-height: 280px;
	}

	@media (max-width: 600px) {
		.constellation-wrap {
			display: none;
		}
	}

	.connector-lines {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	.detail-node {
		position: absolute;
		transform: translate(-50%, -50%);
		background: none;
		border: none;
		cursor: pointer;
		padding: 6px;
	}

	.node-dot {
		display: block;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--color-pink);
		box-shadow: 0 0 0 0 rgba(245, 169, 184, 0.4);
		transition: box-shadow 0.3s;
	}

	.detail-node:hover .node-dot,
	.detail-node:focus-visible .node-dot,
	.detail-node.active .node-dot {
		box-shadow: 0 0 0 6px rgba(245, 169, 184, 0.15), 0 0 12px rgba(245, 169, 184, 0.4);
	}

	.node-tooltip {
		position: absolute;
		bottom: calc(100% + 8px);
		left: 50%;
		transform: translateX(-50%);
		background: var(--color-charcoal);
		border: 1px solid rgba(245, 169, 184, 0.2);
		border-radius: 4px;
		padding: 0.5rem 0.75rem;
		white-space: nowrap;
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		z-index: 10;
		box-shadow: 0 4px 16px rgba(0,0,0,0.4);
		animation: tooltipIn 0.15s var(--ease-smooth);
	}

	@keyframes tooltipIn {
		from { opacity: 0; transform: translateX(-50%) translateY(4px); }
		to   { opacity: 1; transform: translateX(-50%) translateY(0); }
	}

	.tooltip-label {
		font-size: 0.55rem;
		letter-spacing: 0.18em;
		color: var(--color-pink);
		opacity: 0.7;
	}

	.tooltip-value {
		font-size: 0.82rem;
		color: var(--color-white);
	}

	/* Fallback list */
	.detail-list-fallback {
		border: 1px solid rgba(245, 169, 184, 0.08);
		border-radius: 4px;
		padding: 1rem 1.5rem;
	}

	.detail-list-fallback summary {
		cursor: pointer;
		color: var(--color-silver);
		font-size: 0.65rem;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		opacity: 0.5;
		margin-bottom: 1rem;
	}

	.detail-list-fallback ul {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 0.75rem;
	}

	.detail-list-fallback li {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.detail-label {
		font-size: 0.6rem;
		letter-spacing: 0.15em;
		color: var(--color-pink);
		opacity: 0.7;
	}

	.detail-value {
		font-size: 0.9rem;
		color: var(--color-silver);
	}

	@media (min-width: 601px) {
		.detail-list-fallback {
			display: none;
		}
	}
</style>
