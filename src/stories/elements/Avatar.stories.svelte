<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Avatar from '../../lib/elements/Avatar.svelte';
</script>

<Meta title="Elementen/Avatar" component={Avatar} />

<Template let:args>
	<Avatar {...args} />
</Template>

<Story name="Avatar" />
