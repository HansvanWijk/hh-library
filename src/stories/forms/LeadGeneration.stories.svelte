<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import LeadGeneration from '../../lib/forms/LeadGeneration.svelte';
</script>

<Meta title="Forms/Lead generation" component={LeadGeneration} />

<Template let:args>
	<LeadGeneration {...args} />
</Template>

<Story name="Newsletter opt-in" />
