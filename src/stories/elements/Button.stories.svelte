<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from '../../lib/elements/Button.svelte';
</script>

<Meta
	title="Elementen/Button"
	component={Button}
	argTypes={{
		text: { control: 'text' },
		primary: { control: 'boolean' },
		backgroundColor: { control: 'color' },
		size: {
			control: { type: 'select', options: ['small', 'medium', 'large'] }
		},
		onClick: { action: 'onClick' }
	}}
/>

<Template let:args>
	<Button {...args} on:click={args.onClick} />
</Template>

<Story
	name="Primary"
	args={{
		primary: true,
		text: 'Button'
	}}
/>

<Story
	name="Secondary"
	args={{
		primary: false,
		text: 'Button'
	}}
/>
