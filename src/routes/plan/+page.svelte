<script lang="ts">
	import { steps } from '../../store';
	import Step1 from '../../components/steps/Step1.svelte';
	import Step2 from '../../components/steps/Step2.svelte';
	import Step3 from '../../components/steps/Step3.svelte';
	import Step4 from '../../components/steps/Step4.svelte';

	export let activeStep = 0;

	// Subscribe to the store
	$: {
		// Listen to changes in the steps store
		activeStep = $steps.find((step) => step.active)?.number || 0;
	}
</script>

<svelte:head>
	<title>Plan</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	{#if activeStep === 1}
		<Step1 />
	{:else if activeStep === 2}
		<Step2 />
	{:else if activeStep === 3}
		<Step3 />
	{:else if activeStep === 4}
		<Step4 />
	{/if}
</section>
