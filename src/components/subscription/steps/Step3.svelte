<script lang="ts">
	import Heading from '../../ui/Heading.svelte';
	import Subheading from '../../ui/Subheading.svelte';
	import AddOn from '../ui/AddOn.svelte';

	import { toggleAddOn } from '../../../store';

	export const addOns = [
		{
			name: 'Online service',
			description: 'Access to multiplayer games',
			price: '+$1/mo',
			active: false
		},
		{
			name: 'Larger storage',
			description: 'Extra 1TB of cloud save',
			price: '+$2/mo',
			active: false
		},
		{
			name: 'Customizable profile',
			description: 'Custom theme on your profile',
			price: '+$2/mo',
			active: false
		}
	];
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
				onClick={() => toggleAddOn(addOn.name)}
			/>
		{/each}
	</div>
</div>
