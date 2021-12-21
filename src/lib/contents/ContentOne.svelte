<script>
	import Section from '../../lib/layout/Section.svelte';
	export let tagline = '';
	export let title = '';
	export let text = '';
	export let align = 'center';
	export let scale = 5;
	export let spacing = 2;
</script>

<Section innerSpace="vb" innerSpaceSize="l">
	<div class={['contents__content', `text-${align}`, `mb-${spacing}`].join(' ')}>
		{#if tagline}
			<p class="contents__tagline">{tagline}</p>
		{/if}
		{#if title}
			<h1 class={['contents__heading', `scale-${scale}`].join(' ')}>{title}</h1>
		{/if}
		{#if text}
			<p class={[`scale-${scale > 4 ? `${scale - 3}` : ''}`]}>{text}</p>
		{/if}
	</div>

	<slot />
</Section>

<style lang="postcss">
	.text-center.contents__content {
		max-width: 50rem;
		margin-left: auto;
		margin-right: auto;
	}

	.contents__tagline {
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}
	.contents__heading {
		margin-bottom: var(--app-spacing-unit);
	}
</style>
