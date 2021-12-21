<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Quote from '../../lib/bricks/Quote.svelte';
</script>

<Meta
	title="Blokken/Quote"
	component={Quote}
	argTypes={{
		text: { control: 'text' }
	}}
/>

<Template let:args>
	<Quote {...args} />
</Template>

<Story
	name="Default"
	argTypes={{
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget dolor nibh. Proin porttitor tincidunt arcu, et iaculis purus faucibus interdum. Vivamus viverra pharetra lectus id mattis. Proin odio nulla, mollis eu imperdiet vel, mollis vitae dolor. Donec elementum augue commodo risus scelerisque, id gravida purus vulputate. Maecenas turpis leo, congue non fringilla ut, fringilla eget magna. Aenean lacinia, sem at suscipit dignissim, odio lorem bibendum libero, eu blandit neque massa eu quam. Suspendisse potenti. Nunc sagittis lacus sit amet ligula accumsan, non scelerisque neque ultricies. Donec imperdiet, nibh ac molestie sodales, nibh massa rutrum nulla, vel vestibulum est urna at massa. Vestibulum quis auctor tellus. Donec massa libero, elementum nec risus in, vehicula viverra erat. Nulla et bibendum justo, at ultrices quam. Donec et lectus ligula. Nulla leo turpis, faucibus quis blandit vel, pharetra eget ex. Fusce hendrerit eu dolor ut pellentesque.'
	}}
/>
