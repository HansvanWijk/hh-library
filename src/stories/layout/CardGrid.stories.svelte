<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import CardGrid from '../../lib/layout/CardGrid.svelte';
</script>

<Meta
	title="Componenten/CardGrid"
	component={CardGrid}
	argTypes="{{
		title: { control: 'text' },
		content: { control: 'text' }
	}}d"
/>

<Template let:args>
	<CardGrid {...args} />
</Template>

<Story name="CardGrid" />
