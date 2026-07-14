<script lang="ts">
	import { onMount } from 'svelte';
	import { skills } from '$lib/content/data';

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
			{ threshold: 0.15 }
		);
		obs.observe(section);
		return () => obs.disconnect();
	});
</script>

<section bind:this={section} id="engineering" aria-labelledby="engineering-heading">
	<div class="container">
		<div class="header fade-in" class:visible>
			<span class="section-label">// 003 · Engineering</span>
			<h2 id="engineering-heading">Built at the intersection<br />of <em>hardware and software</em></h2>
			<p class="subtitle">
				Power integrity engineer and software-tool builder. The curiosity that drives both is the same.
			</p>
		</div>

		<div class="skill-grid">
			{#each skills as skill, i}
				<div
					class="skill-card fade-in"
					class:visible
					style="transition-delay: {i * 0.08}s"
					role="article"
					aria-label={skill.category}
				>
					<div class="card-header">
						<div class="signal-dot" aria-hidden="true"></div>
						<span class="card-title mono">{skill.category}</span>
					</div>
					<div class="card-path" aria-hidden="true"></div>
					<ul class="tag-list" aria-label="{skill.category} skills">
						{#each skill.tags as tag}
							<li class="skill-tag">{tag}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<p class="footer-note mono" aria-label="Technology stack">
			Python · JavaScript · TypeScript · SvelteKit · FastAPI · Bash · Git · C# · Unity · Blender
		</p>
	</div>
</section>

<style>
	section {
		padding: var(--space-2xl) var(--space-lg);
		background: linear-gradient(180deg, var(--color-charcoal) 0%, var(--color-plum) 100%);
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
		max-width: 560px;
	}

	h2 {
		font-size: clamp(1.8rem, 3vw, 2.6rem);
		margin: 0.75rem 0;
	}

	h2 em {
		color: var(--color-blue);
		font-style: italic;
	}

	.subtitle {
		color: var(--color-silver);
		opacity: 0.7;
		font-size: 0.95rem;
	}

	.skill-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1.5rem;
	}

	.skill-card {
		background: rgba(9, 9, 13, 0.6);
		border: 1px solid rgba(245, 169, 184, 0.08);
		border-radius: 4px;
		padding: 1.5rem;
		position: relative;
		transition: border-color 0.3s, box-shadow 0.3s;
		overflow: hidden;
	}

	.skill-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(91, 206, 250, 0.3), transparent);
		transform: scaleX(0);
		transition: transform 0.4s var(--ease-smooth);
		transform-origin: left;
	}

	.skill-card:hover {
		border-color: rgba(91, 206, 250, 0.2);
		box-shadow: 0 4px 32px rgba(91, 206, 250, 0.06);
	}

	.skill-card:hover::before {
		transform: scaleX(1);
	}

	.card-header {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		margin-bottom: 1rem;
	}

	.signal-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--color-blue);
		box-shadow: 0 0 8px rgba(91, 206, 250, 0.6);
		flex-shrink: 0;
	}

	.card-title {
		color: var(--color-blue);
		font-size: 0.65rem;
		letter-spacing: 0.15em;
		opacity: 0.8;
	}

	.card-path {
		height: 1px;
		background: linear-gradient(90deg, rgba(91, 206, 250, 0.15) 0%, transparent 100%);
		margin-bottom: 1rem;
	}

	.tag-list {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	.skill-tag {
		font-family: var(--font-sans);
		font-size: 0.78rem;
		color: var(--color-silver);
		padding: 0.2rem 0.6rem;
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 2px;
		transition: color 0.2s, border-color 0.2s;
	}

	.skill-card:hover .skill-tag {
		color: var(--color-white);
		border-color: rgba(255, 255, 255, 0.12);
	}

	.footer-note {
		text-align: center;
		color: var(--color-silver);
		opacity: 0.4;
		font-size: 0.65rem;
		letter-spacing: 0.12em;
	}
</style>
