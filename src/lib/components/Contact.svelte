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
			<span class="section-label">// say hello</span>

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
						{#if link.icon === 'vr'}
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M2 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9z"/>
								<circle cx="9" cy="12" r="2"/><circle cx="15" cy="12" r="2"/>
							</svg>
						{:else if link.icon === 'spotify'}
							<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
								<path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.623.623 0 0 1-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 1 1-.277-1.215c3.809-.87 7.077-.496 9.712 1.115a.623.623 0 0 1 .207.857zm1.223-2.722a.78.78 0 0 1-1.072.257c-2.687-1.652-6.786-2.131-9.965-1.166a.78.78 0 1 1-.453-1.492c3.633-1.103 8.149-.568 11.233 1.329a.78.78 0 0 1 .257 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.937.937 0 1 1-.543-1.794c3.532-1.07 9.404-.862 13.115 1.338a.937.937 0 0 1-.955 1.613z"/>
							</svg>
						{:else if link.icon === 'discord'}
							<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
								<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
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
		background:
			linear-gradient(180deg, rgba(91,206,250,0.42) 0%, rgba(91,206,250,0.22) 80%),
			linear-gradient(180deg, var(--color-charcoal) 0%, var(--color-void) 80%);
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
