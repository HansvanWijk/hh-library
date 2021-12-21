<script>
	import Icons from '../../static/icons/feather/sprite.svg';
	export let name = '';
</script>

<svg
	width="24"
	height="24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
>
	<use href={`${Icons}#${name}`} />
</svg>
