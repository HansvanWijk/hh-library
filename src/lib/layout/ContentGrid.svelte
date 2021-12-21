<script>
	import ContentBlock from '../bricks/ContenBlock.svelte';

	let blocks = [
		{
			title: 'Post One',
			content: 'Ashley'
		},
		{
			title: 'Post One',
			content: 'Ashley'
		},
		{
			title: 'Post One',
			content: 'Ashley'
		},
		{
			title: 'Post One',
			content: 'Ashley'
		}
	];
</script>

<div class="content-grid">
	{#each blocks as block}
		<div class="content-grid__item">
			<ContentBlock {block} />
		</div>
	{/each}
</div>

<style lang="postcss">
	.content-grid {
		display: flex;
		flex-wrap: wrap;
	}

	.content-grid > * {
		flex-basis: 50%;
		margin-bottom: 4em;
	}

	.content-grid > *:last-child {
		margin-bottom: 0;
	}
</style>
