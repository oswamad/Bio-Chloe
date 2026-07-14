<script lang="ts">
	import { onMount } from 'svelte';
	import Waveform from './Waveform.svelte';
	import { meta, heroTags } from '$lib/content/data';

	let visible = false;
	let particleContainer: HTMLDivElement;

	onMount(() => {
		setTimeout(() => { visible = true; }, 100);

		// Generate floating particles
		const count = 40;
		for (let i = 0; i < count; i++) {
			const el = document.createElement('span');
			el.className = 'particle';
			const size = Math.random() * 2 + 1;
			el.style.cssText = `
				width: ${size}px;
				height: ${size}px;
				left: ${Math.random() * 100}%;
				top: ${Math.random() * 100}%;
				animation-delay: ${Math.random() * 8}s;
				animation-duration: ${6 + Math.random() * 10}s;
				opacity: ${Math.random() * 0.5 + 0.1};
			`;
			particleContainer?.appendChild(el);
		}
	});
</script>

<section class="hero" id="hero">
	<!-- Particle field -->
	<div class="particles" bind:this={particleContainer} aria-hidden="true"></div>

	<!-- Background gradient layers -->
	<div class="bg-glow bg-glow--pink" aria-hidden="true"></div>
	<div class="bg-glow bg-glow--blue" aria-hidden="true"></div>

	<div class="hero-inner" class:visible>
		<!-- Avatar / silhouette -->
		<div class="portrait-wrap" aria-hidden="true">
			<div class="portrait-ring"></div>
			<div class="portrait-placeholder">
				<!-- Replace with actual portrait image -->
				<svg viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<ellipse cx="100" cy="90" rx="48" ry="52" fill="rgba(112,42,73,0.4)" stroke="rgba(245,169,184,0.3)" stroke-width="1"/>
					<path d="M 30 260 Q 50 160 100 155 Q 150 160 170 260" fill="rgba(33,23,36,0.7)" stroke="rgba(245,169,184,0.2)" stroke-width="1"/>
					<!-- Glasses hint -->
					<rect x="68" y="82" width="24" height="12" rx="4" fill="none" stroke="rgba(245,169,184,0.5)" stroke-width="1.2"/>
					<rect x="108" y="82" width="24" height="12" rx="4" fill="none" stroke="rgba(245,169,184,0.5)" stroke-width="1.2"/>
					<line x1="92" y1="88" x2="108" y2="88" stroke="rgba(245,169,184,0.4)" stroke-width="1"/>
					<!-- Circuit vines decorating bottom -->
					<path d="M 20 240 L 40 220 L 40 210 L 60 210 L 70 200" stroke="rgba(91,206,250,0.2)" stroke-width="0.8" fill="none"/>
					<circle cx="70" cy="200" r="2" fill="rgba(91,206,250,0.4)"/>
					<path d="M 180 240 L 160 220 L 160 210 L 140 210 L 130 200" stroke="rgba(245,169,184,0.2)" stroke-width="0.8" fill="none"/>
					<circle cx="130" cy="200" r="2" fill="rgba(245,169,184,0.4)"/>
				</svg>
			</div>
		</div>

		<!-- Text content -->
		<div class="hero-text">
			<span class="section-label">she/her · Mexico · Power Integrity</span>
			<h1>{meta.tagline}</h1>
			<p class="hero-description">{meta.description}</p>

			<div class="hero-tags" aria-label="Identity tags">
				{#each heroTags as tag}
					<span class="tag mono">{tag}</span>
				{/each}
			</div>

			<a href="#about" class="hero-cta" aria-label="Scroll to About section">
				<span>Read on</span>
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
					<path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</a>
		</div>
	</div>

	<!-- Waveform at bottom -->
	<div class="hero-wave" aria-hidden="true">
		<Waveform height={64} />
	</div>
</section>

<style>
	.hero {
		position: relative;
		min-height: 100svh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: radial-gradient(ellipse 80% 60% at 50% 0%, var(--color-plum) 0%, var(--color-void) 70%);
		overflow: hidden;
		padding: 6rem 2rem 4rem;
	}

	.particles {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	:global(.particle) {
		position: absolute;
		border-radius: 50%;
		background: var(--color-pink);
		animation: float linear infinite;
	}

	@keyframes float {
		0%   { transform: translateY(0) scale(1); opacity: 0; }
		10%  { opacity: 1; }
		90%  { opacity: 0.6; }
		100% { transform: translateY(-80px) scale(0.5); opacity: 0; }
	}

	.bg-glow {
		position: absolute;
		border-radius: 50%;
		filter: blur(80px);
		pointer-events: none;
	}

	.bg-glow--pink {
		width: 500px;
		height: 400px;
		top: -100px;
		right: -100px;
		background: rgba(245, 169, 184, 0.07);
	}

	.bg-glow--blue {
		width: 400px;
		height: 300px;
		bottom: 80px;
		left: -80px;
		background: rgba(91, 206, 250, 0.05);
	}

	.hero-inner {
		position: relative;
		display: flex;
		align-items: center;
		gap: 5rem;
		max-width: 1100px;
		width: 100%;
		opacity: 0;
		transform: translateY(24px);
		transition: opacity 1s var(--ease-smooth), transform 1s var(--ease-smooth);
	}

	.hero-inner.visible {
		opacity: 1;
		transform: translateY(0);
	}

	/* Portrait */
	.portrait-wrap {
		flex-shrink: 0;
		position: relative;
		width: 260px;
		height: 340px;
	}

	.portrait-ring {
		position: absolute;
		inset: -8px;
		border-radius: 50% 50% 48% 52% / 55% 55% 45% 45%;
		border: 1px solid transparent;
		background: linear-gradient(135deg, rgba(245,169,184,0.3), rgba(91,206,250,0.15), rgba(245,169,184,0.05)) border-box;
		animation: breathe 5s ease-in-out infinite;
	}

	@keyframes breathe {
		0%, 100% { box-shadow: 0 0 20px rgba(245,169,184,0.2); transform: scale(1); }
		50%       { box-shadow: 0 0 48px rgba(245,169,184,0.4); transform: scale(1.015); }
	}

	.portrait-placeholder {
		width: 100%;
		height: 100%;
		background: linear-gradient(180deg, var(--color-plum) 0%, var(--color-charcoal) 100%);
		border-radius: 50% 50% 48% 52% / 55% 55% 45% 45%;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid rgba(245, 169, 184, 0.12);
	}

	.portrait-placeholder svg {
		width: 80%;
		height: 80%;
	}

	/* Text */
	.hero-text {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	h1 {
		font-size: clamp(2rem, 4vw, 3.2rem);
		font-style: italic;
		background: linear-gradient(135deg, var(--color-white) 40%, var(--color-lavender));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero-description {
		font-size: 1rem;
		line-height: 1.8;
		color: var(--color-silver);
		max-width: 520px;
	}

	.hero-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tag {
		font-size: 0.6rem;
		letter-spacing: 0.15em;
		padding: 0.3rem 0.7rem;
		border: 1px solid rgba(245, 169, 184, 0.2);
		border-radius: 2px;
		color: var(--color-pink);
		background: rgba(245, 169, 184, 0.05);
		transition: border-color 0.2s, background 0.2s;
	}

	.tag:hover {
		border-color: rgba(245, 169, 184, 0.5);
		background: rgba(245, 169, 184, 0.1);
	}

	.hero-cta {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--color-silver);
		font-size: 0.85rem;
		margin-top: 0.5rem;
		transition: color 0.2s, gap 0.2s;
	}

	.hero-cta:hover {
		color: var(--color-pink);
		gap: 0.75rem;
	}

	.hero-wave {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		opacity: 0.6;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.hero-inner {
			flex-direction: column;
			text-align: center;
			gap: 2.5rem;
		}

		.portrait-wrap {
			width: 200px;
			height: 260px;
		}

		.hero-tags {
			justify-content: center;
		}

		.hero-description {
			max-width: 100%;
		}

		.hero-cta {
			align-self: center;
		}
	}
</style>
