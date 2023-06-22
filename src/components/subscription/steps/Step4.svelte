<script lang="ts">
	import Heading from '../../ui/Heading.svelte';
	import Subheading from '../../ui/Subheading.svelte';
	import { userPlan } from '../../../stores/userPlanStore';
	import { sendToStep } from '../../../stores/stepsStore';
	import { onMount } from 'svelte';
	import { calculateTotal } from '../../../stores/userPlanStore';

	onMount(() => {
		calculateTotal();
	});
</script>

<!-- markup (zero or more items) goes here -->
<div class="fade_in_1000">
	<Heading text={'Finishing up'} />
	<Subheading text={'Double-check everything looks OK before confirming.'} />

	<div class="px-6 pt-4 pb-6 mb-6 rounded-md bg-gray100">
		<div class="flex items-center justify-between">
			<div>
				<p class="text-lg font-medium capitalize text-blue200">
					{$userPlan.summary.name} ({$userPlan.summary.frequency})
				</p>
				<button class="underline text-gray300" on:click={() => sendToStep(2)}>Change</button>
			</div>

			<p class="text-lg font-semibold">
				${$userPlan.summary.planPrice}/{$userPlan.summary.frequency === 'monthly' ? 'mo' : 'yr'}
			</p>
		</div>

		<div class="w-full h-px mt-6 mb-4 rounded-full bg-gray300" />

		{#each $userPlan.summary.addOns as addOn}
			<div class="flex justify-between mb-4">
				<p class="text-gray300">{addOn.name}</p>
				<p>${addOn.price}/{$userPlan.summary.frequency === 'monthly' ? 'mo' : 'yr'}</p>
			</div>
		{/each}
	</div>

	<div class="flex justify-between">
		<p class="text-gray300">
			Total (per {$userPlan.summary.frequency === 'monthly' ? 'month' : 'year'})
		</p>

		<p class="text-2xl font-medium text-purple200">
			${$userPlan.summary.total}/{$userPlan.summary.frequency === 'monthly' ? 'mo' : 'yr'}
		</p>
	</div>
</div>
