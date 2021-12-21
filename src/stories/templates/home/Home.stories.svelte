<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Homepage from './Homepage.svelte';
</script>

<Meta
	title="Templates/Home"
	component={Homepage}
	argTypes={{
		onLogin: { action: 'onLogin' },
		onLogout: { action: 'onLogout' },
		onCreateAccount: { action: 'onCreateAccount' }
	}}
/>

<Template let:args>
	<Homepage
		{...args}
		on:login={args.onLogin}
		on:logout={args.onLogout}
		on:createAccount={args.onCreateAccount}
	/>
</Template>

<Story
	name="Home"
	args={{
		user: {}
	}}
/>
