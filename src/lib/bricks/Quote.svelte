<script>
	import Person from './Person.svelte';

	export let text =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget dolor nibh. Proin porttitor tincidunt arcu, et iaculis purus faucibus interdum. Vivamus viverra pharetra lectus id mattis. Proin odio nulla, mollis eu imperdiet vel, mollis vitae dolor. Donec elementum augue commodo risus scelerisque, id gravida purus vulputate. Maecenas turpis leo, congue non fringilla ut, fringilla eget magna. Aenean lacinia, sem at suscipit dignissim, odio lorem bibendum libero, eu blandit neque massa eu quam. Suspendisse potenti. Nunc sagittis lacus sit amet ligula accumsan, non scelerisque neque ultricies. Donec imperdiet, nibh ac molestie sodales, nibh massa rutrum nulla, vel vestibulum est urna at massa. Vestibulum quis auctor tellus. Donec massa libero, elementum nec risus in, vehicula viverra erat. Nulla et bibendum justo, at ultrices quam. Donec et lectus ligula. Nulla leo turpis, faucibus quis blandit vel, pharetra eget ex. Fusce hendrerit eu dolor ut pellentesque. ';
</script>

<div class="quote">
	<div class="quote__content">
		<div class="quote__content__mark">“</div>
		<div class="quote__content__text">{text}</div>
	</div>
	<div class="quote__person">
		<Person />
	</div>
</div>

<style lang="postcss">
	.quote__content {
		position: relative;
		min-height: 4em;
		margin-bottom: 16px;
	}
	.quote__content__mark {
		font-size: 9em;
		transform: translate(-1.5rem, -1.75rem);
		position: absolute;
		line-height: 1;
		z-index: -0;
		opacity: 0.1;
	}

	.quote__content__text {
		position: relative;
		z-index: 1;
	}
</style>
