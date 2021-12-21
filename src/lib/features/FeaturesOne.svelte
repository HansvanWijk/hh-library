<script>
	import ContentOne from '../contents/ContentOne.svelte';
	import CardGrid from '../layout/CardGrid.svelte';

	export let title = '';
	export let text = '';
	export let tagline = '';
	export let scale = 4;
	export let align = 'left';
	export let spacing = 4;
</script>

<div class="features">
	<ContentOne {tagline} {title} {scale} {text} {align} {spacing}>
		<CardGrid />
	</ContentOne>
</div>
