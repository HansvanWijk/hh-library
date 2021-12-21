<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import NavigationBar from '../../lib/components/NavigationBar.svelte';
</script>

<Meta title="Elementen/Navigation" component={NavigationBar} />

<Template let:args>
	<NavigationBar {...args} />
</Template>

<Story name="Navigation" />
