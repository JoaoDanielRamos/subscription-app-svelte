<script lang="ts">
	import Heading from '../../ui/Heading.svelte';
	import Subheading from '../../ui/Subheading.svelte';
	import { userPlan } from '../../../stores/userPlanStore';
	import { sendToStep } from '../../../stores/stepsStore';
	import { onMount } from 'svelte';

	onMount(() => {
		console.log($userPlan);
	});
</script>

<!-- markup (zero or more items) goes here -->
<div class="fade_in_1000">
	<Heading text={'Finishing up'} />
	<Subheading text={'Double-check everything looks OK before confirming.'} />

	<div class="px-6 pt-4 pb-6 mb-6 rounded-md bg-gray100">
		<div class="flex items-center justify-between">
			<div>
				<p class="text-lg font-medium text-blue200">Arcade (Monthly)</p>
				<button class="underline text-gray300" on:click={() => sendToStep(2)}>Change</button>
			</div>

			<p class="text-lg font-semibold">$9/mo</p>
		</div>

		<div class="w-full h-px mt-6 mb-4 rounded-full bg-gray300" />

		<div class="flex justify-between mb-4">
			<p class="text-gray300">Online service</p>
			<p>+$1/mo</p>
		</div>

		<div class="flex justify-between">
			<p class="text-gray300">Online service</p>
			<p>+$1/mo</p>
		</div>
	</div>

	<div class="flex justify-between">
		<p class="text-gray300">Total (per month)</p>

		<p class="text-2xl font-medium text-purple200">+$12/mo</p>
	</div>
</div>
