<script lang="ts">
	import { onMount } from 'svelte';
	import { engineerSide, girlSide } from '$lib/content/data';

	let section: HTMLElement;
	let visible = false;
	let hovered: 'engineer' | 'girl' | null = null;

	onMount(() => {
		const obs = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					visible = true;
					obs.disconnect();
				}
			},
			{ threshold: 0.25 }
		);
		obs.observe(section);
		return () => obs.disconnect();
	});
</script>

<section bind:this={section} id="two-sides" aria-labelledby="two-sides-heading">
	<div class="container">
		<div class="header fade-in" class:visible>
			<span class="section-label">// 002 · Two Sides</span>
			<h2 id="two-sides-heading">Two sides of<br /><em>the same girl</em></h2>
			<p class="subtitle">They are not separate identities. They are the same signal, expressed differently.</p>
		</div>

		<div class="split" class:visible>
			<!-- Engineer side -->
			<div
				class="side side--engineer"
				class:dim={hovered === 'girl'}
				role="region"
				aria-label="The Engineer"
				on:mouseenter={() => (hovered = 'engineer')}
				on:mouseleave={() => (hovered = null)}
				on:focusin={() => (hovered = 'engineer')}
				on:focusout={() => (hovered = null)}
			>
				<span class="side-label mono">{engineerSide.title}</span>
				<ul aria-label="Engineer traits">
					{#each engineerSide.items as item}
						<li class="trait">{item}</li>
					{/each}
				</ul>
				<div class="side-glow engineer-glow" aria-hidden="true"></div>
			</div>

			<!-- Divider -->
			<div class="divider" aria-hidden="true">
				<div class="divider-line"></div>
				<div class="divider-node">
					<div class="node-inner"></div>
				</div>
				<div class="divider-line"></div>
			</div>

			<!-- Girl side -->
			<div
				class="side side--girl"
				class:dim={hovered === 'engineer'}
				role="region"
				aria-label="The Girl Behind the Signal"
				on:mouseenter={() => (hovered = 'girl')}
				on:mouseleave={() => (hovered = null)}
				on:focusin={() => (hovered = 'girl')}
				on:focusout={() => (hovered = null)}
			>
				<span class="side-label mono">{girlSide.title}</span>
				<ul aria-label="Personal traits">
					{#each girlSide.items as item}
						<li class="trait">{item}</li>
					{/each}
				</ul>
				<div class="side-glow girl-glow" aria-hidden="true"></div>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		padding: var(--space-2xl) var(--space-lg);
		background: var(--color-charcoal);
		position: relative;
		overflow: hidden;
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 3.5rem;
	}

	.header {
		text-align: center;
	}

	.header h2 {
		font-size: clamp(1.8rem, 3vw, 2.6rem);
		margin: 0.75rem 0;
	}

	.header h2 em {
		color: var(--color-lavender);
		font-style: italic;
	}

	.subtitle {
		color: var(--color-silver);
		opacity: 0.7;
		font-size: 0.95rem;
		max-width: 440px;
		margin: 0 auto;
	}

	.split {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 0;
		opacity: 0;
		transform: translateY(20px);
		transition: opacity 0.9s var(--ease-smooth), transform 0.9s var(--ease-smooth);
	}

	.split.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.side {
		padding: 3rem 2.5rem;
		position: relative;
		transition: opacity 0.4s;
		cursor: default;
	}

	.side.dim {
		opacity: 0.4;
	}

	.side--engineer {
		text-align: right;
		background: linear-gradient(135deg, rgba(9,9,13,0) 0%, rgba(91,206,250,0.04) 100%);
		border-right: none;
	}

	.side--girl {
		text-align: left;
		background: linear-gradient(225deg, rgba(9,9,13,0) 0%, rgba(245,169,184,0.04) 100%);
	}

	.side-label {
		color: var(--color-silver);
		opacity: 0.5;
		display: block;
		margin-bottom: 1.5rem;
		font-size: 0.6rem;
		letter-spacing: 0.2em;
	}

	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
	}

	.side--engineer ul {
		align-items: flex-end;
	}

	.trait {
		font-family: var(--font-serif);
		font-size: clamp(1.2rem, 2.5vw, 1.8rem);
		font-weight: 400;
		color: var(--color-white);
		opacity: 0.85;
		transition: opacity 0.2s, transform 0.2s;
	}

	.side:hover .trait {
		opacity: 1;
	}

	.side--engineer:hover .trait {
		color: var(--color-blue);
	}

	.side--girl:hover .trait {
		color: var(--color-pink);
	}

	.side-glow {
		position: absolute;
		inset: 0;
		pointer-events: none;
		opacity: 0;
		transition: opacity 0.5s;
	}

	.side:hover .side-glow {
		opacity: 1;
	}

	.engineer-glow {
		background: radial-gradient(ellipse at 80% 50%, rgba(91,206,250,0.06) 0%, transparent 70%);
	}

	.girl-glow {
		background: radial-gradient(ellipse at 20% 50%, rgba(245,169,184,0.06) 0%, transparent 70%);
	}

	/* Divider */
	.divider {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 3rem 0;
		width: 2px;
	}

	.divider-line {
		flex: 1;
		width: 1px;
		background: linear-gradient(180deg, transparent, rgba(201,184,216,0.3), transparent);
	}

	.divider-node {
		width: 16px;
		height: 16px;
		border: 1px solid rgba(201,184,216,0.4);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.node-inner {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--color-lavender);
		animation: pulse 3s ease-in-out infinite;
	}

	@keyframes pulse {
		0%, 100% { opacity: 0.5; transform: scale(1); }
		50%       { opacity: 1;   transform: scale(1.3); }
	}

	@media (max-width: 768px) {
		.split {
			grid-template-columns: 1fr;
			grid-template-rows: auto auto auto;
		}

		.side--engineer {
			text-align: left;
		}

		.side--engineer ul {
			align-items: flex-start;
		}

		.divider {
			flex-direction: row;
			width: 100%;
			height: 2px;
			padding: 0 3rem;
		}

		.divider-line {
			flex: 1;
			height: 1px;
			width: auto;
			background: linear-gradient(90deg, transparent, rgba(201,184,216,0.3), transparent);
		}
	}
</style>
