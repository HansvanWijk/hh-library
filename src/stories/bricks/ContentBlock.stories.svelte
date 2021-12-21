<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import ContentBlock from '../../lib/bricks/ContenBlock.svelte';
</script>

<Meta
	title="Blokken/Content block"
	component={ContentBlock}
	argTypes={{
		title: { control: 'text' },
		content: { control: 'text' }
	}}
/>

<Template let:args>
	<ContentBlock {...args} />
</Template>

<Story name="default" />
