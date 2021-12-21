<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import FeaturesTwo from '../../lib/features/FeaturesTwo.svelte';
</script>

<Meta title="Features/Features 2" component={FeaturesTwo} />

<Template let:args>
	<FeaturesTwo {...args} />
</Template>

<Story
	name="Features twee"
	args={{
		title: 'Onze diensten'
	}}
/>
