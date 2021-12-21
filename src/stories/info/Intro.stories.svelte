<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Intro from './Intro.svelte';
</script>

<Meta
	title="Intro"
	component={Intro}
	argTypes={{
		onLogin: { action: 'onLogin' },
		onLogout: { action: 'onLogout' },
		onCreateAccount: { action: 'onCreateAccount' }
	}}
/>

<Template let:args>
	<Intro {...args} />
</Template>

<Story name="Intro" />
