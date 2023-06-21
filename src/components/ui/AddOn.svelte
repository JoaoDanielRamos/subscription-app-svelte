<script lang="ts">
	import checkmark from '$lib/assets/icon-checkmark.svg';
	import classNames from 'classnames';
	import { userPlan } from '../../store';

	export let name: string = '';
	export let description: string = '';
	export let price = '';
	export let onClick = () => {};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class={classNames(
		'flex items-center w-full h-20 px-4 py-6 border rounded cursor-pointer hover:border-Purplish-blue transition_all_300',
		$userPlan.addOns.includes(name) ? 'border-Purplish-blue' : 'border-Light-gray'
	)}
	on:click={onClick}
>
	<div
		class={classNames(
			'w-5 h-5 border rounded border-Light-gray flex items-center justify-center transition_all_300',
			$userPlan.addOns.includes(name) ? 'bg-Purplish-blue' : 'bg-transparent'
		)}
	>
		{#if $userPlan.addOns.includes(name)}
			<img src={checkmark} alt="icon checkmark" class="fade_in_300" />
		{/if}
	</div>

	<div class="ml-6">
		<p class="font-semibold text-Marine-blue">{name}</p>
		<p class="text-sm text-Cool-gray">{description}</p>
	</div>

	<p class="ml-auto text-Purplish-blue">{price}</p>
</div>
