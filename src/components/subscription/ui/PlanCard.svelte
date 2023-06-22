<script lang="ts">
	import classNames from 'classnames';
	import { userPlan, updatePlan } from '../../../stores/userPlanStore';

	export let planName: string;
	export let price: { monthly: number; yearly: number };
	export let icon: any;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class={classNames(
		'flex flex-col items-start justify-between h-40 p-4 border rounded-md w-36 cursor-pointer hover:border-purple200 hover:bg-Alabaster transition_all_300',
		$userPlan.summary.name === planName
			? 'border-purple200 bg-gray100'
			: 'border-gray200 bg-transparent'
	)}
	on:click={() => updatePlan(planName)}
>
	<img src={icon} alt={`${planName} icon`} class="" />

	<div>
		<p class="text-blue200">{planName}</p>
		<p class="text-sm text-gray300">
			${$userPlan.summary.frequency === 'monthly' ? price.monthly : price.yearly}/{$userPlan.summary
				.frequency === 'monthly'
				? 'mo'
				: 'yr'}
		</p>
	</div>
</div>
