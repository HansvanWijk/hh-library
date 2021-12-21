<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Toggle from '../../lib/elements/Toggle.svelte';
</script>

<Meta
	title="Elementen/Toggle"
	component={Toggle}
	argTypes={{
		label: { control: 'text' },
		primary: { control: Boolean },
		backGroundColor: { control: 'color' },
		size: {
			control: { type: 'select', options: ['small', 'medium', 'large'] }
		},
		onClick: { action: 'onClick' }
	}}
/>

<Template let:args>
	<Toggle {...args} onClick={args.onClick} />
</Template>

<Story
	name="Labeled"
	args={{
		primary: true,
		label: 'Check me'
	}}
/>

<Story
	name="Blank"
	args={{
		label: ''
	}}
/>
