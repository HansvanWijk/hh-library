<script>
	export let spacing = 'none';
</script>

<div class={['container', `spacing-${spacing}`].join(' ')}>
	<slot />
</div>
