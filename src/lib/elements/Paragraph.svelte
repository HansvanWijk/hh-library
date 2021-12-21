<script>
	export let scale;
	export let color;
	export let align;
	export let text = '';

	scale = scale ? `scale-${scale}` : '';
	color = color ? `text-color-${color}` : '';
	color = align ? `align-${align}` : '';
</script>

<p class={`paragraph ${scale} ${color} ${align} pbxl`}>
	{text}
</p>

<style lang="postcss">
	p {
		max-width: 40ch;
	}
	.align-center,
	.align-right {
		margin-left: auto;
	}

	.align-center {
		margin-right: auto;
	}
	.paragraph {
		line-height: 1.6;
	}
</style>
