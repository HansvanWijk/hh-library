<script>
	import Section from '../../lib/layout/Section.svelte';
	export let title = 'Waanzinnig mooie content';
	export let text =
		'When, while the lovely valley teems with vapour around me, and the meridian sun strikes the waiting be females upper surface of the impenetrable foliage of my trees End why melancholy estimating her had indulgence bachelor domestic extended middletons. Say ferrars demands besides her address. Blind going you merit few fancy their. On could my in order never it. Or excited certain sixteen it to parties colonel. Law gate lif On nature or no.';
</script>

<Section innerSpace="vb" innerSpaceSize="l">
	<div class="hh-cols-2">
		<div />
		<div class="content">
			<h3 class="scale-4">{title}</h3>
			<p>{text}</p>
		</div>
	</div>
</Section>

<style lang="postcss">
	.content {
		margin-top: auto;
		margin-bottom: auto;
	}
</style>
