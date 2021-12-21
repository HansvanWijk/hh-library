<script>
	import Button from '../elements/Button.svelte';

	export let title = 'Titel van block';
	export let buttonText = 'Lets go!';
	export let content =
		'We zijn allemaal mens en omdat we geloven dat kwetsbaarheid een kracht is delen we onze eigen authentieke verhalen. Met een rauw randje. Met onze ‘bodem van de put’ momenten en onze worstelingen. Je leest onze verhalen op de blog pagina. Je leest hier ook meer over ons.';
</script>

<div class="content-block">
	<h3 class="scale-2">
		{title}
	</h3>
	<p>
		{content}
	</p>
	<Button text={buttonText} />
</div>
