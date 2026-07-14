<script lang="ts">
	import { onMount } from 'svelte';

	let cursorEl: HTMLDivElement;
	let dotEl: HTMLDivElement;
	let x = -100;
	let y = -100;
	let dotX = -100;
	let dotY = -100;
	let visible = false;

	onMount(() => {
		const move = (e: MouseEvent) => {
			x = e.clientX;
			y = e.clientY;
			visible = true;
		};

		const hide = () => { visible = false; };
		const show = () => { visible = true; };

		window.addEventListener('mousemove', move);
		window.addEventListener('mouseout', hide);
		window.addEventListener('mouseover', show);

		let raf: number;
		const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

		const animate = () => {
			dotX = lerp(dotX, x, 0.12);
			dotY = lerp(dotY, y, 0.12);

			if (cursorEl) {
				cursorEl.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
			}
			if (dotEl) {
				dotEl.style.transform = `translate(${dotX - 16}px, ${dotY - 16}px)`;
			}

			raf = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			window.removeEventListener('mousemove', move);
			window.removeEventListener('mouseout', hide);
			window.removeEventListener('mouseover', show);
			cancelAnimationFrame(raf);
		};
	});
</script>

<!-- Only show on pointer devices -->
<div
	class="cursor-dot"
	bind:this={cursorEl}
	style:opacity={visible ? '1' : '0'}
	aria-hidden="true"
></div>
<div
	class="cursor-ring"
	bind:this={dotEl}
	style:opacity={visible ? '1' : '0'}
	aria-hidden="true"
></div>

<style>
	.cursor-dot,
	.cursor-ring {
		pointer-events: none;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		border-radius: 50%;
		transition: opacity 0.3s;
		will-change: transform;
	}

	.cursor-dot {
		width: 8px;
		height: 8px;
		background: var(--color-pink);
		box-shadow: var(--glow-pink);
	}

	.cursor-ring {
		width: 32px;
		height: 32px;
		border: 1px solid rgba(245, 169, 184, 0.45);
		box-shadow: 0 0 12px rgba(91, 206, 250, 0.15);
	}

	@media (hover: none) {
		.cursor-dot, .cursor-ring { display: none; }
	}
</style>
