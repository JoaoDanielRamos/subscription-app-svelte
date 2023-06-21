<script lang="ts">
	import classNames from 'classnames';
	import { userPlan } from '../../store';

	export let planName: string = '';
	export let price: number = 0;
	export let icon = '';

	function updatePlan() {
		let newPlan = planName;
		userPlan.update((plan) => ({ ...plan, plan: newPlan }));
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class={classNames(
		'flex flex-col items-start justify-between h-40 p-4 border rounded-md w-36 cursor-pointer hover:border-Purplish-blue hover:bg-Alabaster transition_all_300',
		$userPlan.plan === planName
			? 'border-Purplish-blue bg-Alabaster'
			: 'border-Light-gray bg-transparent'
	)}
	on:click={updatePlan}
>
	<img src={icon} alt={`${planName} icon`} class="" />

	<div>
		<p class="text-Marine-blue">{planName}</p>
		<p class="text-sm text-Cool-gray">
			${$userPlan.paymentFrequency === 'monthly'
				? price
				: price * 12 - price}/{$userPlan.paymentFrequency === 'monthly' ? 'mo' : 'yr'}
		</p>
	</div>
</div>
