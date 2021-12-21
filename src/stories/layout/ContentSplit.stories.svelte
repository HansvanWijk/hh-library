<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import ContentSplit from '../../lib/components/ContentSplit.svelte';
</script>

<Meta
	title="Blokken/Content split"
	component={ContentSplit}
	argTypes={{
		title: { control: 'text' },
		content: { control: 'text' }
	}}
/>

<Template let:args>
	<ContentSplit {...args} />
</Template>

<Story name="default" />
