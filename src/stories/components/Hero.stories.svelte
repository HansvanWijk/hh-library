<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Hero from '../../lib/components/hero/Hero.svelte';
</script>

<Meta
	title="Componenten/Hero"
	component={Hero}
	argTypes={{
		title: { control: 'text' },
		content: { control: 'text' }
	}}
/>

<Template let:args>
	<Hero {...args} />
</Template>

<Story name="Hero" />
