<script>
	export let reverse;
</script>

<div class={[`content-block media-${reverse ? 'right' : 'left'}`].join(' ')}>
	<div class="content-block__media">
		<div class="media" />
	</div>
	<div class="content-block__content">
		<h3 class="scale-4">Titel van block</h3>
		<p>
			We zijn allemaal mens en omdat we geloven dat kwetsbaarheid een kracht is delen we onze eigen
			authentieke verhalen. Met een rauw randje. Met onze ‘bodem van de put’ momenten en onze
			worstelingen. Je leest onze verhalen op de blog pagina. Je leest hier ook meer over ons.
		</p>
	</div>
</div>

<style lang="postcss">
	.content-block {
		display: flex;
		justify-content: space-between;
		margin-left: calc(0px - var(--app-spacing-unit));
		margin-right: calc(0px - var(--app-spacing-unit));
		flex-wrap: wrap;
	}
	.content-block > div {
		flex: 1;
		padding: var(--app-spacing-unit);
		min-width: 300px;
	}
	.content-block__media {
		width: 50%;
		height: 300px;
		background: #000;
	}

	@media (min-width: 300px) {
		.media-right .content-block__media {
			order: 2;
		}
	}
</style>
