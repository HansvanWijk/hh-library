<script>
	import { createEventDispatcher } from 'svelte';

	export let placeholder = '';
	export let label = '';
	export let disabled = false;
	export let state = 'default';

	const dispatch = createEventDispatcher();

	// CHANGE HANDLER
	function onChange(event) {
		dispatch('click', event);
	}
</script>

<label>
	{#if label}
		<span class="input-label">{label}</span>
	{/if}

	<input {disabled} type="text" class={['input', `input--${state}`].join(' ')} {placeholder} />
</label>

<style lang="postcss">
	.input {
		font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
		font-weight: 700;
		min-height: 25px;
		margin: 2px;
		border-radius: 3px;
		border: solid 2px #353637;
		background-color: #ffffff;
	}

	.input::focus {
		border: solid 2px #1b116e;
	}

	.input--success {
		border: solid 2px #067d68;
	}

	.input--error {
		border: solid 2px #a9150b;
	}

	.input--disabled {
		color: #e4e3ea;
		border: solid 2px #e4e3ea;
	}

	.input::-webkit-input-placeholder {
		color: red;
	}

	.input-label {
		font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
		font-weight: 700;
	}
</style>
