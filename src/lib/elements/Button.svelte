<script>
	import { createEventDispatcher } from 'svelte';

	export let secondary = false;
	export let size = 'regular';
	export let text = '';

	const dispatch = createEventDispatcher();

	// CLICK HANDLER
	function onClick(event) {
		dispatch('click', event);
	}
</script>

<button
	type="button"
	class={['button', `button--${size}`, `button--${secondary ? 'secondary' : 'primary'}`].join(' ')}
	on:click={onClick}
>
	{text}
</button>
