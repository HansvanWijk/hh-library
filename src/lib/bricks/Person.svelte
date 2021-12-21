<script>
	import Avatar from '../elements/Avatar.svelte';

	export let name = 'Naam persoon';
	export let tagline = 'Manager @ CompanyX';
</script>

<div class="person">
	<div class="person__img">
		<Avatar />
	</div>
	<div class="person__content">
		<p class="heading">{name}</p>
		<p class="person__description">{tagline}</p>
	</div>
</div>

<style lang="postcss">
	.person {
		display: flex;
		align-items: center;
	}

	.person__content {
		padding-left: 16px;
	}

	.person__img {
		margin-left: -0.45em;
	}
</style>
