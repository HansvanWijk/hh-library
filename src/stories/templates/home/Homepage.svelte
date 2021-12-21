<script>
	import Section from '../../../lib/layout/Section.svelte';
	import Hero from '../../../lib/components/hero/Hero.svelte';
	import FeaturesOne from '../../../lib/features/FeaturesOne.svelte';
	import LeadGeneration from '../../../lib/forms/LeadGeneration.svelte';
	import NavigationBar from '../../../lib/components/NavigationBar.svelte';
	import Content01 from '../../../lib/contents/Content01.svelte';
	// import ThemeContext from '../../../lib/theme/ThemeContext.svelte';
	// import ThemeToggle from '../../../lib/theme/ThemeToggle.svelte';
</script>

<NavigationBar />

<Hero
	title="Het webplatform van de toekomst"
	text="Wij geloven in een open, creatief internet met een verscheidenheid aan geluiden. Wij
  bieden oplossi. Ons platform bestaat uit springplankjes. Misschien ben je een thuiskapper die meer
  uit internet wilt halen, of juist een webwinkel die vastloopt in techniek, deadlines & bugs."
/>

<Section>
	<FeaturesOne title="Onze diensten" align="left" scale="3" />
</Section>
<Section innerSpaceSize="l" innerSpace="vb">
	<Content01 />
	<Content01 />
	<Content01 />
	<Content01 />
</Section>

<Section>
	<LeadGeneration />
</Section>
