<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import ContentOne from '../../lib/contents/ContentOne.svelte';
</script>

<Meta
	title="Componenten/Contents"
	component={ContentOne}
	argTypes={{
		tagline: { control: 'text' },
		title: { control: 'text' },
		text: { control: 'text' },
		align: {
			control: { type: 'select', options: ['left', 'center', 'right'] }
		},
		scale: {
			control: { type: 'range', min: 0, max: 9, step: 1 }
		}
	}}
/>

<Template let:args>
	<ContentOne {...args} />
</Template>

<Story
	name="Content 1"
	args={{
		tagline: 'Design & code',
		title: 'Optimaliseer je website met HartHoofd'
	}}
/>

<Story
	name="Content 2"
	args={{
		title: 'Optimaliseer je website met HartHoofd',
		text: 'Wij hebben een nieuw platform gemaakt waarmee ondernemers en freelancers helemaal los kunnen gaan'
	}}
/>
