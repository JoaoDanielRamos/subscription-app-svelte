<script lang="ts">
	import advanced from '$lib/assets/icon-advanced.svg';
	import arcade from '$lib/assets/icon-arcade.svg';
	import pro from '$lib/assets/icon-pro.svg';
	import classNames from 'classnames';
	import data from '../../../data.json';
	import { updatePaymentFrequency, userPlan } from '../../../stores/userPlanStore';
	import Heading from '../../ui/Heading.svelte';
	import Subheading from '../../ui/Subheading.svelte';
	import PlanCard from '../ui/PlanCard.svelte';

	export const plans = data.plans;
	export const plansImages: { [key: string]: string } = {
		arcade: arcade,
		advanced: advanced,
		pro: pro
	};
</script>

<div class="fade_in_1000">
	<Heading text={'Select your plan'} />
	<Subheading text={'You have the option of monthly or yearly billing.'} />

	<div class="flex gap-4 mb-8">
		{#each plans as plan}
			<PlanCard icon={plansImages[plan.name]} planName={plan.name} price={plan.price} />
		{/each}
	</div>

	<div class="flex items-center justify-center w-full h-12 gap-6 rounded bg-gray100">
		<p
			class={classNames(
				'transition_all_300',
				$userPlan.summary.frequency === 'monthly' ? 'text-blue200' : 'text-gray300'
			)}
		>
			monthly
		</p>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="w-[38px] h-5 rounded-full bg-blue200 relative cursor-pointer transition_all_300"
			on:click={updatePaymentFrequency}
		>
			<div
				class={classNames(
					'absolute w-3 h-3 -translate-y-1/2 rounded-full bg-white top-1/2 transition_all_300',
					$userPlan.summary.frequency === 'monthly' ? 'left-[15%]' : 'left-[55%]'
				)}
			/>
		</div>

		<p
			class={classNames(
				'transition_all_300',
				$userPlan.summary.frequency === 'yearly' ? 'text-blue200' : 'text-gray300'
			)}
		>
			yearly
		</p>
	</div>
</div>
