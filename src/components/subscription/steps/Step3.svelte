<script lang="ts">
	import data from '../../../data.json';
	import { updateAddOns } from '../../../stores/userPlanStore';
	import Heading from '../../ui/Heading.svelte';
	import Subheading from '../../ui/Subheading.svelte';
	import AddOn from '../ui/AddOn.svelte';

	export const addOns = data['add-ons'];
</script>

<div class="fade_in_1000">
	<Heading text={'Pick add-ons'} />
	<Subheading text={'Add-ons help enhance your gaming experience.'} />

	<div class="flex flex-col gap-y-4">
		{#each addOns as addOn}
			<AddOn
				name={addOn.name}
				description={addOn.description}
				price={addOn.price}
				onClick={() => updateAddOns(addOn.name)}
			/>
		{/each}
	</div>
</div>
