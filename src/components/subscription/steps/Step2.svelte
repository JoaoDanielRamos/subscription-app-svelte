<script lang="ts">
	import { userPlan } from '../../../store';
	import classNames from 'classnames';
	import Heading from '../../ui/Heading.svelte';
	import Subheading from '../../ui/Subheading.svelte';
	import PlanCard from '../ui/PlanCard.svelte';
	import arcade from '$lib/assets/icon-arcade.svg';
	import advanced from '$lib/assets/icon-advanced.svg';
	import pro from '$lib/assets/icon-pro.svg';

	export const cards = [
		{
			icon: arcade,
			name: 'arcade',
			price: 9
		},
		{
			icon: advanced,
			name: 'advanced',
			price: 12
		},
		{
			icon: pro,
			name: 'pro',
			price: 15
		}
	];

	function updatePaymentFrequency() {
		let paymentFrequency: string = 'monthly'; // default value

		if ($userPlan.paymentFrequency === 'monthly') {
			paymentFrequency = 'yearly';
		} else if ($userPlan.paymentFrequency === 'yearly') {
			paymentFrequency = 'monthly';
		}

		userPlan.update((plan) => ({ ...plan, paymentFrequency }));
	}
</script>

<div class="fade_in_1000">
	<Heading text={'Select your plan'} />
	<Subheading text={'You have the option of monthly or yearly billing.'} />

	<div class="flex gap-4 mb-8">
		{#each cards as card}
			<PlanCard icon={card.icon} planName={card.name} price={card.price} />
		{/each}
	</div>

	<div class="flex items-center justify-center w-full h-12 gap-6 rounded bg-gray100">
		<p
			class={classNames(
				'transition_all_300',
				$userPlan.paymentFrequency === 'monthly' ? 'text-blue200' : 'text-gray300'
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
					$userPlan.paymentFrequency === 'monthly' ? 'left-[15%]' : 'left-[55%]'
				)}
			/>
		</div>

		<p
			class={classNames(
				'transition_all_300',
				$userPlan.paymentFrequency === 'yearly' ? 'text-blue200' : 'text-gray300'
			)}
		>
			yearly
		</p>
	</div>
</div>
