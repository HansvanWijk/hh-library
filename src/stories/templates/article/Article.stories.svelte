<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Article from './Article.svelte';
</script>

<Meta
	title="Templates/Article"
	component={Article}
	argTypes={{
		onLogin: { action: 'onLogin' },
		onLogout: { action: 'onLogout' },
		onCreateAccount: { action: 'onCreateAccount' }
	}}
/>

<Template let:args>
	<Article
		{...args}
		on:login={args.onLogin}
		on:logout={args.onLogout}
		on:createAccount={args.onCreateAccount}
	/>
</Template>

<Story
	name="Article"
	args={{
		user: {}
	}}
/>
