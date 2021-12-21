<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Person from '../../lib/bricks/Person.svelte';
</script>

<Meta
	title="Blokken/Person"
	component={Person}
	argTypes={{
		name: { control: 'text' },
		tagline: { control: 'text' }
	}}
/>

<Template let:args>
	<Person {...args} />
</Template>

<Story
	name="Persoon"
	args={{
		name: 'Jan vermeulen',
		tagline: 'Meesterlijke eindbaas'
	}}
/>
