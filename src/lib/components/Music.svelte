<script lang="ts">
	import { onMount } from 'svelte';
	import { music } from '$lib/content/data';

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

<section bind:this={section} id="music" aria-labelledby="music-heading">
	<div class="container">
		<div class="music-layout">
			<!-- Editorial left column -->
			<div class="editorial fade-in" class:visible>
				<span class="section-label">// 006 · Music & Inner World</span>
				<h2 id="music-heading">{music.heading}</h2>

				<blockquote class="pull-quote">
					<span aria-label="Pull quote">{music.pullQuote}</span>
				</blockquote>

				<p class="subtext">{music.subtext}</p>

				<div class="genre-tags" aria-label="Music genres">
					{#each music.genres as genre}
						<span class="genre-tag">{genre}</span>
					{/each}
				</div>
			</div>

			<!-- Artist grid -->
			<div class="artist-column fade-in" class:visible style="transition-delay: 0.2s">
				<span class="column-label mono">Artists</span>
				<ul class="artist-list" aria-label="Favourite artists">
					{#each music.artists as artist, i}
						<li
							class="artist-item"
							style="animation-delay: {visible ? i * 0.07 : 0}s"
							class:anim={visible}
						>
							<span class="artist-dot" aria-hidden="true"></span>
							<span>{artist}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		padding: var(--space-2xl) var(--space-lg);
		background: linear-gradient(180deg, var(--color-charcoal) 0%, var(--color-plum) 100%);
		position: relative;
		overflow: hidden;
	}

	/* Subtle background rhythm lines */
	section::before {
		content: '';
		position: absolute;
		inset: 0;
		background: repeating-linear-gradient(
			0deg,
			rgba(245, 169, 184, 0.015) 0px,
			rgba(245, 169, 184, 0.015) 1px,
			transparent 1px,
			transparent 48px
		);
		pointer-events: none;
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}

	.music-layout {
		display: grid;
		grid-template-columns: 1fr 320px;
		gap: 5rem;
		align-items: start;
	}

	.editorial {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	h2 {
		font-size: clamp(1.8rem, 3vw, 2.6rem);
	}

	.pull-quote {
		border: none;
		padding: 0;
		margin: 0;
	}

	.pull-quote span {
		font-family: var(--font-serif);
		font-size: clamp(1.6rem, 3.5vw, 2.4rem);
		font-style: italic;
		font-weight: 700;
		background: linear-gradient(135deg, var(--color-pink), var(--color-lavender));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		line-height: 1.3;
	}

	.subtext {
		font-size: 1rem;
		color: var(--color-silver);
		line-height: 1.8;
		max-width: 480px;
		opacity: 0.8;
	}

	.genre-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.genre-tag {
		font-family: var(--font-mono);
		font-size: 0.6rem;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		padding: 0.3rem 0.7rem;
		border: 1px solid rgba(201, 184, 216, 0.2);
		border-radius: 2px;
		color: var(--color-lavender);
		background: rgba(201, 184, 216, 0.04);
	}

	/* Artist column */
	.artist-column {
		padding-top: 3.5rem;
	}

	.column-label {
		display: block;
		color: var(--color-silver);
		opacity: 0.4;
		font-size: 0.6rem;
		letter-spacing: 0.2em;
		margin-bottom: 1.25rem;
	}

	.artist-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.artist-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.7rem 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.04);
		font-size: 1rem;
		color: var(--color-silver);
		opacity: 0;
		transform: translateX(-8px);
		transition: opacity 0.5s, transform 0.5s, color 0.2s;
	}

	.artist-item.anim {
		animation: slideIn 0.5s var(--ease-smooth) both;
	}

	@keyframes slideIn {
		from { opacity: 0; transform: translateX(-8px); }
		to   { opacity: 1; transform: translateX(0); }
	}

	.artist-item:hover {
		color: var(--color-white);
	}

	.artist-dot {
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: var(--color-pink);
		flex-shrink: 0;
		opacity: 0.6;
	}

	.artist-item:hover .artist-dot {
		opacity: 1;
		box-shadow: var(--glow-pink);
	}

	@media (max-width: 768px) {
		.music-layout {
			grid-template-columns: 1fr;
			gap: 3rem;
		}

		.artist-column {
			padding-top: 0;
		}
	}
</style>
