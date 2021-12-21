<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import SectionHeader from '../../lib/layout/SectionHeader.svelte';
</script>

<Meta
	title="Componenten/Section header"
	component={SectionHeader}
	argTypes={{
		title: { control: 'text' },
		text: { control: 'text' }
	}}
/>

<Template let:args>
	<SectionHeader {...args} />
</Template>

<Story name="Section header" />
