<script lang="ts">
	import { activeStep } from '../../stores/stepsStore';
	import Step1 from '../../components/subscription/steps/Step1.svelte';
	import Step2 from '../../components/subscription/steps/Step2.svelte';
	import Step3 from '../../components/subscription/steps/Step3.svelte';
	import Step4 from '../../components/subscription/steps/Step4.svelte';
	import Confirm from '../../components/subscription/steps/Confirm.svelte';
</script>

<svelte:head>
	<title>Plan</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	{#if $activeStep === 1}
		<Step1 />
	{:else if $activeStep === 2}
		<Step2 />
	{:else if $activeStep === 3}
		<Step3 />
	{:else if $activeStep === 4}
		<Step4 />
	{:else if $activeStep === 5}
		<Confirm />
	{/if}
</section>
