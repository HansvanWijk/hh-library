<script>
	import Container from '../layout/Container.svelte';

	export let contained = true;
</script>

<div class={['navigation', `${contained ? 'container' : ''}`].join(' ')}>
	<div class="container">
		<h1 class="scale-2">Logo</h1>
	</div>
</div>

<style lang="postcss">
	.navigation {
		margin-left: auto;
		margin-right: auto;
		padding: var(--ht-space-2) 0;
		box-shadow: 0 1px 0 var(--border-color-default);
	}
</style>
