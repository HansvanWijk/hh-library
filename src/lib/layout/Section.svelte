<script>
	export let width;
	export let innerSpace;
	export let innerSpaceSize = 'm';
	export let outerSpace;
	export let outerSpaceSize = 'm';
	export let borderBottom = '';

	let typeClass = width ? `hh-width-${width}` : 'hh-width-site';
	let innerSpaceClass = innerSpace ? `hh-is${innerSpace}-${innerSpaceSize}` : '';
	let outerSpaceClass = outerSpace ? `hh-os${outerSpace}-${outerSpaceSize}` : '';
	let borderBottomClass = borderBottom ? `hh-border-bottom` : '';
	console.log(borderBottom);
</script>

<section
	class={['hh-section', typeClass, innerSpaceClass, outerSpaceClass, borderBottomClass].join(' ')}
>
	<slot />
</section>
