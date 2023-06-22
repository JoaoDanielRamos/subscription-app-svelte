<script lang="ts">
	import checkmark from '$lib/assets/icon-checkmark.svg';
	import classNames from 'classnames';
	import { userPlan } from '../../../stores/userPlanStore';

	export let name: string;
	export let description: string;
	export let price: {
		monthly: string;
		yearly: string;
	};
	export let onClick: any;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class={classNames(
		'flex items-center w-full h-20 px-4 py-6 border rounded cursor-pointer hover:border-purple200 transition_all_300',
		$userPlan.summary.addOns.some((AddOn) => AddOn.name === name)
			? 'border-purple200 bg-gray100'
			: 'border-gray200'
	)}
	on:click={onClick}
>
	<div
		class={classNames(
			'w-5 h-5 border rounded border-gray200 flex items-center justify-center transition_all_300',
			$userPlan.summary.addOns.some((AddOn) => AddOn.name === name)
				? 'bg-purple200'
				: 'bg-transparent'
		)}
	>
		{#if $userPlan.summary.addOns.some((AddOn) => AddOn.name === name)}
			<img src={checkmark} alt="icon checkmark" class="fade_in_300" />
		{/if}
	</div>

	<div class="ml-6">
		<p class="font-semibold text-blue200">{name}</p>
		<p class="text-sm text-gray300">{description}</p>
	</div>

	<p class="ml-auto text-purple200">
		${$userPlan.summary.frequency === 'monthly'
			? price.monthly
			: price.yearly}/{$userPlan.paymentFrequency === 'monthly' ? 'mo' : 'yr'}
	</p>
</div>
