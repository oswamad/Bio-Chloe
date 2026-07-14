<script lang="ts">
	import { onMount } from 'svelte';
	import { contact, meta } from '$lib/content/data';

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
			{ threshold: 0.3 }
		);
		obs.observe(section);
		return () => obs.disconnect();
	});
</script>

<section bind:this={section} id="contact" aria-labelledby="contact-heading">
	<div class="glow-layer" aria-hidden="true"></div>

	<div class="container">
		<div class="contact-inner fade-in" class:visible>
			<span class="section-label">// 008 · Say Hello</span>

			<h2 id="contact-heading">
				<span class="name-accent">{meta.name}</span>
			</h2>

			<p class="closing">{contact.closing}</p>

			<nav class="social-links" aria-label="Social and contact links">
				{#each contact.links as link}
					<a
						href={link.href}
						class="social-link"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="{link.label} (opens in new tab)"
					>
						{#if link.icon === 'github'}
							<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
								<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
							</svg>
						{:else if link.icon === 'twitter'}
							<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
								<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
							</svg>
						{:else if link.icon === 'vr'}
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M2 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9z"/>
								<circle cx="9" cy="12" r="2"/>
								<circle cx="15" cy="12" r="2"/>
							</svg>
						{/if}
						<span>{link.label}</span>
					</a>
				{/each}
			</nav>

			<p class="coordinates mono">
				{meta.location} · {meta.pronouns} · {new Date().getFullYear()}
			</p>
		</div>
	</div>

	<footer class="site-footer">
		<p class="mono">
			Built with SvelteKit · Hosted on GitHub Pages
		</p>
	</footer>
</section>

<style>
	section {
		padding: var(--space-2xl) var(--space-lg) 0;
		background: linear-gradient(180deg, var(--color-charcoal) 0%, var(--color-void) 80%);
		position: relative;
		overflow: hidden;
		min-height: 60vh;
		display: flex;
		flex-direction: column;
	}

	.glow-layer {
		position: absolute;
		top: -40%;
		left: 50%;
		transform: translateX(-50%);
		width: 600px;
		height: 400px;
		background: radial-gradient(ellipse, rgba(112, 42, 73, 0.3) 0%, transparent 70%);
		pointer-events: none;
	}

	.container {
		max-width: 720px;
		margin: 0 auto;
		flex: 1;
		display: flex;
		align-items: center;
		position: relative;
		z-index: 1;
	}

	.contact-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 2rem;
		width: 100%;
	}

	.name-accent {
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-style: italic;
		background: linear-gradient(135deg, var(--color-white) 20%, var(--color-pink) 60%, var(--color-lavender));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.closing {
		font-family: var(--font-serif);
		font-size: 1.1rem;
		font-style: italic;
		color: var(--color-cream);
		opacity: 0.8;
		max-width: 520px;
		line-height: 1.7;
	}

	.social-links {
		display: flex;
		gap: 1.25rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	.social-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.6rem 1.2rem;
		border: 1px solid rgba(245, 169, 184, 0.2);
		border-radius: 3px;
		color: var(--color-silver);
		font-size: 0.85rem;
		transition: color 0.2s, border-color 0.2s, box-shadow 0.2s;
	}

	.social-link:hover {
		color: var(--color-pink);
		border-color: rgba(245, 169, 184, 0.5);
		box-shadow: var(--glow-pink);
	}

	.coordinates {
		color: var(--color-silver);
		opacity: 0.3;
		font-size: 0.6rem;
		letter-spacing: 0.2em;
	}

	.site-footer {
		text-align: center;
		padding: 2rem;
		border-top: 1px solid rgba(255, 255, 255, 0.04);
		margin-top: var(--space-xl);
	}

	.site-footer p {
		font-family: var(--font-mono);
		font-size: 0.6rem;
		letter-spacing: 0.15em;
		color: var(--color-silver);
		opacity: 0.25;
	}
</style>
