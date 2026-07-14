<script lang="ts">
	import { onMount } from 'svelte';

	let mainEl: HTMLDivElement;
	let trailEl: HTMLDivElement;
	let x = -100, y = -100;
	let trailX = -100, trailY = -100;
	let visible = false;
	let clicking = false;

	onMount(() => {
		const move  = (e: MouseEvent) => { x = e.clientX; y = e.clientY; visible = true; };
		const hide  = () => { visible = false; };
		const show  = () => { visible = true; };
		const down  = () => { clicking = true; };
		const up    = () => { clicking = false; };

		window.addEventListener('mousemove',  move);
		window.addEventListener('mouseout',   hide);
		window.addEventListener('mouseover',  show);
		window.addEventListener('mousedown',  down);
		window.addEventListener('mouseup',    up);

		const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
		let raf: number;

		const animate = () => {
			trailX = lerp(trailX, x, 0.1);
			trailY = lerp(trailY, y, 0.1);

			// Bottom-center point of heart aligns with the mouse
			if (mainEl)  mainEl.style.transform  = `translate(${x - 10}px, ${y - 20}px)`;
			if (trailEl) trailEl.style.transform = `translate(${trailX - 14}px, ${trailY - 28}px)`;

			raf = requestAnimationFrame(animate);
		};
		animate();

		return () => {
			window.removeEventListener('mousemove',  move);
			window.removeEventListener('mouseout',   hide);
			window.removeEventListener('mouseover',  show);
			window.removeEventListener('mousedown',  down);
			window.removeEventListener('mouseup',    up);
			cancelAnimationFrame(raf);
		};
	});
</script>

<!-- Solid pink heart — tracks exact mouse position -->
<div bind:this={mainEl} class="cursor-heart main" class:clicking style:opacity={visible ? '1' : '0'} aria-hidden="true">
	<svg width="20" height="20" viewBox="0 0 24 22" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 21C12 21 1.5 13.5 1.5 6.5C1.5 3.42 3.92 1 7 1C9.01 1 10.77 2.02 12 3.57C13.23 2.02 14.99 1 17 1C20.08 1 22.5 3.42 22.5 6.5C22.5 13.5 12 21 12 21Z"
			fill="#F5A9B8" stroke="#fff" stroke-width="0.8" stroke-linejoin="round"/>
	</svg>
</div>

<!-- Outline blue heart — lazily trails behind -->
<div bind:this={trailEl} class="cursor-heart trail" style:opacity={visible ? '0.45' : '0'} aria-hidden="true">
	<svg width="28" height="28" viewBox="0 0 24 22" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 21C12 21 1.5 13.5 1.5 6.5C1.5 3.42 3.92 1 7 1C9.01 1 10.77 2.02 12 3.57C13.23 2.02 14.99 1 17 1C20.08 1 22.5 3.42 22.5 6.5C22.5 13.5 12 21 12 21Z"
			fill="none" stroke="#5BCEFA" stroke-width="1.5" stroke-linejoin="round"/>
	</svg>
</div>

<style>
	.cursor-heart {
		pointer-events: none;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		transition: opacity 0.25s;
		will-change: transform;
	}

	.cursor-heart.main svg {
		filter: drop-shadow(0 0 6px rgba(245, 169, 184, 0.7));
		transition: transform 0.1s var(--ease-bounce), filter 0.15s;
	}

	.cursor-heart.main.clicking svg {
		transform: scale(1.5);
		filter: drop-shadow(0 0 12px rgba(245, 169, 184, 1));
	}

	.cursor-heart.trail svg {
		filter: drop-shadow(0 0 4px rgba(91, 206, 250, 0.5));
	}

	@media (hover: none) {
		.cursor-heart { display: none; }
	}
</style>
