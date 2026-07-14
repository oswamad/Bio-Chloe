<script lang="ts">
	import { onMount } from 'svelte';
	import { about, vrcSection } from '$lib/content/data';

	let section: HTMLElement;
	let visible = false;

	onMount(() => {
		const obs = new IntersectionObserver(
			(entries) => { if (entries[0].isIntersecting) { visible = true; obs.disconnect(); } },
			{ threshold: 0.15 }
		);
		obs.observe(section);
		return () => obs.disconnect();
	});
</script>

<section bind:this={section} id="about" aria-labelledby="about-heading">
	<div class="container">
		<div class="content fade-in" class:visible>
			<div class="main-col">
				<div class="block">
				<span class="section-label">// About Me</span>
				<h2 id="about-heading">A girl who notices<br /><em>everything.</em></h2>
					<p>{about.paragraph1}</p>
					<p>{about.paragraph2}</p>
				</div>

				<div class="divider" aria-hidden="true"></div>

				<div class="block">
					<span class="section-label">// VRChat</span>
					<h2 id="vr-heading">{vrcSection.heading}</h2>
					<p>{vrcSection.body}</p>
				</div>
			</div>

			<!-- Blåhaj -->
			<div class="shark-wrap" aria-label="Blåhaj plushie">
				<img src="/shark.jpg" alt="Blåhaj — the beloved IKEA shark plushie" class="shark-img" />
				<p class="shark-caption mono">blåhaj 🩵</p>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		padding: var(--space-2xl) var(--space-lg);
		background:
			linear-gradient(180deg, rgba(245,169,184,0.40) 0%, rgba(255,255,255,0.12) 100%),
			linear-gradient(180deg, var(--color-void) 0%, var(--color-plum) 100%);
	}

	.container {
		max-width: 900px;
		margin: 0 auto;
	}

	.content {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 4rem;
		align-items: center;
	}

	.main-col {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.block {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.divider {
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
	}

	h2 {
		font-size: clamp(1.8rem, 3vw, 2.6rem);
	}

	h2 em {
		color: var(--color-lavender);
		font-style: italic;
	}

	p {
		font-size: 1.05rem;
		line-height: 1.85;
		color: var(--color-silver);
	}

	/* Blåhaj */
	.shark-wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		transform: rotate(6deg);
		transition: transform 0.4s var(--ease-bounce);
		flex-shrink: 0;
	}

	.shark-wrap:hover {
		transform: rotate(-4deg) scale(1.05);
	}

	.shark-img {
		width: 180px;
		height: 180px;
		object-fit: cover;
		border-radius: 20px;
		border: 3px solid rgba(91, 206, 250, 0.5);
		box-shadow:
			0 0 20px rgba(91, 206, 250, 0.25),
			0 8px 32px rgba(0,0,0,0.4);
		display: block;
	}

	.shark-placeholder {
		width: 180px;
		height: 180px;
		border-radius: 20px;
		background: rgba(91, 206, 250, 0.1);
		border: 3px solid rgba(91, 206, 250, 0.3);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 5rem;
	}

	.shark-caption {
		font-size: 0.65rem !important;
		letter-spacing: 0.15em;
		color: var(--color-blue) !important;
		opacity: 0.7;
		line-height: 1 !important;
	}

	@media (max-width: 700px) {
		.content {
			grid-template-columns: 1fr;
		}

		.shark-wrap {
			transform: rotate(3deg);
			align-self: center;
		}
	}
</style>


