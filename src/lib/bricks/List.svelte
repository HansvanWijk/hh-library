<script>
	export let listItems = ['item 1', 'item 2'];
	export let horizontal = false;
	export let type = 'default';
</script>

<ul class={['list', `list--${horizontal ? 'horizontal' : 'vertical'}`, `list--${type}`].join(' ')}>
	{#each listItems as listItem}
		<li class="list__item">
			{listItem}
		</li>
	{/each}
</ul>

<style lang="postcss">
	.list--horizontal {
		display: flex;
		list-style-position: inside;
	}

	.list--horizontal .list__item {
		padding-left: var(--app-spacing-unit);
		padding-right: var(--app-spacing-unit);
	}

	.list--default {
		list-style: none;
	}
	.list--unordered {
		list-style: bullets;
	}
	.list--ordered {
		list-style-type: ordered;
	}
</style>
