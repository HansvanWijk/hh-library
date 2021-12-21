<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import FeaturesOne from '../../lib/features/FeaturesOne.svelte';
</script>

<Meta title="Features/Features 1" component={FeaturesOne} />

<Template let:args>
	<FeaturesOne {...args} />
</Template>

<Story
	name="Features een"
	args={{
		title: 'Onze diensten'
	}}
/>
