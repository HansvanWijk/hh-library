<script>
	import Card from '../bricks/card/Card.svelte';
	import ContentBlock from '../bricks/ContenBlock.svelte';

	let cards = [
		{
			title: 'Betrouwbare service',
			buttonText: 'Lees verder',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id mi ac massa posuere pellentesque. Suspendisse bibendum, augue dignissim feugiat placerat, massa leo efficitur dolor, vel condimentum mi lectus vitae sapien. Maecenas enim tellus, rhoncus nec maximus sed, rutrum in justo. '
		},
		{
			title: 'Persoonlijk advies',
			buttonText: 'Lees verder',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id mi ac massa posuere pellentesque. Suspendisse bibendum, augue dignissim feugiat placerat, massa leo efficitur dolor, vel condimentum mi lectus vitae sapien. Maecenas enim tellus, rhoncus nec maximus sed, rutrum in justo. '
		},
		{
			title: 'De laatste trends',
			buttonText: 'Lees verder',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id mi ac massa posuere pellentesque. Suspendisse bibendum, augue dignissim feugiat placerat, massa leo efficitur dolor, vel condimentum mi lectus vitae sapien. Maecenas enim tellus, rhoncus nec maximus sed, rutrum in justo. '
		},
		{
			title: 'Met oog voor detail',
			buttonText: 'Lees verder',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id mi ac massa posuere pellentesque. Suspendisse bibendum, augue dignissim feugiat placerat, massa leo efficitur dolor, vel condimentum mi lectus vitae sapien. Maecenas enim tellus, rhoncus nec maximus sed, rutrum in justo. '
		}
	];
</script>

<div class="card-grid">
	{#each cards as card}
		<div class="card-grid__item">
			<Card>
				<ContentBlock title={card.title} content={card.content} buttonText={card.buttonText} />
			</Card>
		</div>
	{/each}
</div>

<style lang="postcss">
	.card-grid {
		display: flex;
		flex-wrap: wrap;
		margin-left: calc(0rem - (var(--app-spacing-unit) * 2));
		margin-right: calc(0rem - (var(--app-spacing-unit) * 2));
	}

	.card-grid__item {
		flex: 1;
		flex-basis: 40%;
		padding-left: calc(var(--app-spacing-unit) * 2);
		padding-right: calc(var(--app-spacing-unit) * 2);
		margin-bottom: calc(var(--app-spacing-unit) * 4);
	}
</style>
