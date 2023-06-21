import { writable } from 'svelte/store';

export const steps = writable([
	{ number: 1, name: 'your info', active: true },
	{
		number: 2,
		name: 'select plan',
		active: false
	},
	{ number: 3, name: 'add-ons', active: false },
	{ number: 4, name: 'summary', active: false },
	{ number: 5, name: 'enjoy!', active: false }
]);

export const userPlan = writable({
	name: '',
	email: '',
	phone: '',
	plan: 'arcade',
	paymentFrequency: 'monthly',
	addOns: []
});

export function toggleAddOn(addOn: string) {
	userPlan.update((state) => {
		const addOnIndex = state.addOns.indexOf(addOn);
		let newAddOns = [...state.addOns]; // creating a copy of the addOns array
		if (addOnIndex === -1) {
			// addOn does not exist in the array, add it
			newAddOns.push(addOn);
		} else {
			// addOn exists in the array, remove it
			newAddOns.splice(addOnIndex, 1);
		}
		return { ...state, addOns: newAddOns }; // return new state with updated addOns array
	});
}
