<script lang="ts">
	const navLinks = [
		{ href: '#about',   label: 'about' },
		{ href: '#music',   label: 'music' },
		{ href: '#contact', label: 'say hi' }
	];

	let scrolled = false;

	import { onMount } from 'svelte';
	onMount(() => {
		const onScroll = () => { scrolled = window.scrollY > 60; };
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<nav class:scrolled aria-label="Main navigation">
	<span class="nav-name mono">Chloe</span>
	<ul>
		{#each navLinks as { href, label }}
			<li><a {href}>{label}</a></li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.25rem 2.5rem;
		transition: background 0.4s var(--ease-smooth), padding 0.3s;
	}

	nav.scrolled {
		background: rgba(9, 9, 13, 0.85);
		backdrop-filter: blur(12px);
		padding: 0.75rem 2.5rem;
		border-bottom: 1px solid rgba(245, 169, 184, 0.08);
	}

	.nav-name {
		color: var(--color-pink);
		font-size: 0.7rem;
		letter-spacing: 0.25em;
		opacity: 0.8;
	}

	ul {
		list-style: none;
		display: flex;
		gap: 2rem;
	}

	a {
		font-family: var(--font-sans);
		font-size: 0.8rem;
		font-weight: 400;
		letter-spacing: 0.04em;
		color: var(--color-silver);
		transition: color 0.2s;
		position: relative;
	}

	a::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 0;
		height: 1px;
		background: linear-gradient(90deg, var(--color-pink), var(--color-blue));
		transition: width 0.3s var(--ease-smooth);
	}

	a:hover {
		color: var(--color-white);
	}

	a:hover::after {
		width: 100%;
	}

	@media (max-width: 640px) {
		ul { display: none; }
	}
</style>
