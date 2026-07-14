<script lang="ts">
	import { onMount } from 'svelte';

	export let height = 48;
	export let animated = true;
	export let color = 'var(--color-pink)';
	export let secondary = 'var(--color-blue)';

	let svgEl: SVGSVGElement;
	let pathEl: SVGPathElement;
	let len = 0;
	let visible = false;

	// Generate a waveform path
	function buildPath(w: number, h: number, phase = 0): string {
		const cx = w;
		const cy = h / 2;
		const amp = cy * 0.7;
		const freq = (Math.PI * 2) / (w / 3.5);

		let d = `M 0 ${cy}`;
		for (let i = 0; i <= cx; i += 1) {
			const y = cy + amp * Math.sin(freq * i + phase) * Math.exp(-i / (cx * 1.8));
			d += ` L ${i} ${y}`;
		}
		return d;
	}

	let phase = 0;
	let raf: number;
	let w = 800;

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
		obs.observe(svgEl);

		const matchMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
		if (!matchMedia.matches && animated) {
			const tick = () => {
				phase += 0.018;
				if (pathEl && w) {
					pathEl.setAttribute('d', buildPath(w, height, phase));
				}
				raf = requestAnimationFrame(tick);
			};
			raf = requestAnimationFrame(tick);
		} else if (pathEl) {
			pathEl.setAttribute('d', buildPath(w, height, 0));
		}

		return () => {
			obs.disconnect();
			cancelAnimationFrame(raf);
		};
	});
</script>

<svg
	bind:this={svgEl}
	bind:clientWidth={w}
	{height}
	viewBox="0 0 {w} {height}"
	preserveAspectRatio="none"
	aria-hidden="true"
	class="waveform"
	class:visible
>
	<defs>
		<linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
			<stop offset="0%" stop-color={secondary} stop-opacity="0.6" />
			<stop offset="50%" stop-color={color} stop-opacity="0.9" />
			<stop offset="100%" stop-color={secondary} stop-opacity="0.3" />
		</linearGradient>
	</defs>
	<path
		bind:this={pathEl}
		d="M 0 {height / 2} L {w} {height / 2}"
		fill="none"
		stroke="url(#waveGrad)"
		stroke-width="1.5"
		stroke-linecap="round"
	/>
</svg>

<style>
	.waveform {
		width: 100%;
		display: block;
		opacity: 0;
		transition: opacity 1s var(--ease-smooth);
	}

	.waveform.visible {
		opacity: 1;
	}
</style>
