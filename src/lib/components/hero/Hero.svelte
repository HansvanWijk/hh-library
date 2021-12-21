<script>
	import Section from '../../layout/Section.svelte';
	import Paragraph from '../../elements/Paragraph.svelte';
	import Button from '../../elements/Button.svelte';
	export let title = 'Wij zijn vrienden voor het leven';
	export let content =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a velit velit. Nam et porttitor nisl, non ultrices leo. ';
</script>

<div class={[`hero text-center hh-osvb-l`]}>
	<Section innerSpaceSize="l" innerSpace="v">
		<div class="hero__content">
			<h1 class="scale-7">{title}</h1>
			<Paragraph scale="3" align="center" {content} />
			<Button text="Lees meer &hellip;" size="medium" />
		</div>
	</Section>
</div>

<style lang="postcss">
	.hero {
		background: var(--ht-color-grey-200);
		color: var(--theme-color-primary-text);
		min-height: 60vh;
		display: flex;
		align-items: center;
		background-image: url(image);
	}

	.hero__content {
		max-width: 60em;
		margin-left: auto;
		margin-right: auto;
	}
</style>
