<script lang="ts">
	import { onMount } from 'svelte';
	import { about } from '$lib/content/data';

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

<section bind:this={section} id="about" class:visible aria-labelledby="about-heading">
	<div class="container">
		<div class="about-grid">
			<div class="about-text fade-in" class:visible>
				<span class="section-label">// 001 · About</span>
				<h2 id="about-heading">A girl who takes things apart<br /><em>to understand them</em></h2>
				<p>{about.paragraph1}</p>
				<p>{about.paragraph2}</p>

				<div class="dualities" aria-label="Core dualities">
					<div class="duality-pair">
						<span class="mono">Gothic elegance</span>
						<span class="divider" aria-hidden="true">⟷</span>
						<span class="mono">Soft femininity</span>
					</div>
					<div class="duality-pair">
						<span class="mono">Hardware engineering</span>
						<span class="divider" aria-hidden="true">⟷</span>
						<span class="mono">Artistic expression</span>
					</div>
					<div class="duality-pair">
						<span class="mono">Analytical mind</span>
						<span class="divider" aria-hidden="true">⟷</span>
						<span class="mono">Emotional sensitivity</span>
					</div>
				</div>
			</div>

			<!-- Decorative circuit-vine aside -->
			<div class="circuit-aside fade-in" class:visible style="transition-delay: 0.2s" aria-hidden="true">
				<svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
					<!-- Vertical trunk -->
					<line x1="100" y1="20" x2="100" y2="380" stroke="rgba(112,42,73,0.4)" stroke-width="1"/>
					<!-- Branches left -->
					<path d="M 100 80 H 60 V 120 H 30" stroke="rgba(245,169,184,0.3)" stroke-width="0.8" fill="none"/>
					<circle cx="30" cy="120" r="3" fill="rgba(245,169,184,0.5)"/>
					<path d="M 100 160 H 55 V 200" stroke="rgba(91,206,250,0.25)" stroke-width="0.8" fill="none"/>
					<rect x="48" y="193" width="14" height="14" fill="none" stroke="rgba(91,206,250,0.4)" stroke-width="0.8"/>
					<path d="M 100 250 H 65 V 280 H 40" stroke="rgba(245,169,184,0.2)" stroke-width="0.8" fill="none"/>
					<circle cx="40" cy="280" r="2" fill="rgba(245,169,184,0.4)"/>
					<!-- Branches right -->
					<path d="M 100 100 H 140 V 130 H 170" stroke="rgba(91,206,250,0.3)" stroke-width="0.8" fill="none"/>
					<circle cx="170" cy="130" r="3" fill="rgba(91,206,250,0.5)"/>
					<path d="M 100 200 H 145 V 230" stroke="rgba(245,169,184,0.25)" stroke-width="0.8" fill="none"/>
					<rect x="138" y="223" width="14" height="14" fill="none" stroke="rgba(245,169,184,0.4)" stroke-width="0.8"/>
					<path d="M 100 300 H 148 V 320 H 170" stroke="rgba(91,206,250,0.2)" stroke-width="0.8" fill="none"/>
					<circle cx="170" cy="320" r="2" fill="rgba(91,206,250,0.4)"/>
					<!-- Nodes on trunk -->
					<circle cx="100" cy="80" r="4" fill="none" stroke="rgba(245,169,184,0.5)" stroke-width="1"/>
					<circle cx="100" cy="160" r="4" fill="none" stroke="rgba(91,206,250,0.5)" stroke-width="1"/>
					<circle cx="100" cy="250" r="4" fill="none" stroke="rgba(245,169,184,0.4)" stroke-width="1"/>
					<circle cx="100" cy="330" r="4" fill="none" stroke="rgba(201,184,216,0.4)" stroke-width="1"/>
					<!-- Small heart hidden in pattern -->
					<path d="M 97 338 C 97 336 100 334 100 336 C 100 334 103 336 103 338 C 103 340 100 343 100 343 C 100 343 97 340 97 338Z" fill="rgba(245,169,184,0.3)"/>
				</svg>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		padding: var(--space-2xl) var(--space-lg);
		background: linear-gradient(180deg, var(--color-void) 0%, var(--color-charcoal) 100%);
		position: relative;
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
	}

	.about-grid {
		display: grid;
		grid-template-columns: 1fr 180px;
		gap: 4rem;
		align-items: start;
	}

	.about-text {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	h2 {
		font-size: clamp(1.8rem, 3vw, 2.8rem);
		color: var(--color-white);
	}

	h2 em {
		color: var(--color-lavender);
		font-style: italic;
	}

	p {
		font-size: 1.05rem;
		line-height: 1.8;
		color: var(--color-silver);
		max-width: 580px;
	}

	.dualities {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		margin-top: 0.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid rgba(245, 169, 184, 0.1);
	}

	.duality-pair {
		display: flex;
		align-items: center;
		gap: 1rem;
		font-size: 0.65rem;
		letter-spacing: 0.12em;
	}

	.duality-pair .mono {
		color: var(--color-silver);
		opacity: 0.7;
		text-transform: uppercase;
	}

	.divider {
		color: var(--color-pink);
		opacity: 0.5;
		font-size: 0.8rem;
	}

	.circuit-aside {
		position: sticky;
		top: 6rem;
		opacity: 0.7;
	}

	.circuit-aside svg {
		width: 100%;
		height: auto;
	}

	@media (max-width: 768px) {
		.about-grid {
			grid-template-columns: 1fr;
		}

		.circuit-aside {
			display: none;
		}
	}
</style>
