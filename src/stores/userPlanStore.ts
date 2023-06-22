import { get, writable } from 'svelte/store';
import data from '../data.json';

export const userPlan: UserPlanInterface = writable({
	name: undefined,
	email: undefined,
	phone: undefined,
	summary: {
		name: 'arcade',
		planPrice: 9,
		frequency: 'monthly',
		addOns: [],
		total: undefined
	}
});

export function updatePersonalInfo(field, event) {
	const { value } = event.target;
	userPlan.update((state) => ({ ...state, [field]: value }));
}

export function updatePlan(planName) {
	userPlan.update((state) => {
		const plan = data.plans.find((plan) => plan.name === planName);
		const currentFrequency = state.summary.frequency;
		const planPrice = plan.price[currentFrequency];

		return {
			...state,
			summary: {
				...state.summary,
				name: planName,
				planPrice: planPrice
			}
		};
	});
}

export function updatePaymentFrequency() {
	userPlan.update((state) => {
		const newFrequency = state.summary.frequency === 'monthly' ? 'yearly' : 'monthly';
		const plan = data.plans.find((plan) => plan.name === state.summary.name);

		const updatedAddOns = state.summary.addOns.map((addOn) => {
			const addOnFromJSON = data['add-ons'].find((a) => a.name === addOn.name);
			const price = addOnFromJSON.price[newFrequency];

			return { ...addOn, price: price };
		});

		const planPrice = plan.price[newFrequency];

		return {
			...state,
			summary: {
				...state.summary,
				frequency: newFrequency,
				planPrice: planPrice,
				addOns: updatedAddOns
			}
		};
	});
}

export function updateAddOns(addOnName) {
	userPlan.update((state) => {
		const addOns = [...state.summary.addOns];
		const addOnIndex = addOns.findIndex((addOn) => addOn.name === addOnName);

		if (addOnIndex === -1) {
			const addOn = data['add-ons'].find((addOn) => addOn.name === addOnName);
			const price = addOn.price[state.summary.frequency];

			addOns.push({ name: addOn.name, price: price });
		} else {
			addOns.splice(addOnIndex, 1);
		}

		const updatedAddOns = addOns.map((addOn) => {
			const addOnFromJSON = data['add-ons'].find((a) => a.name === addOn.name);
			const price = addOnFromJSON.price[state.summary.frequency];

			return { ...addOn, price: price };
		});

		return {
			...state,
			summary: {
				...state.summary,
				addOns: updatedAddOns
			}
		};
	});
}

export function calculateTotal() {
	const state = get(userPlan);
	const { planPrice, addOns } = state.summary;

	let total = planPrice;

	for (const addOn of addOns) {
		total += addOn.price;
	}

	userPlan.update((value) => ({
		...value,
		summary: {
			...value.summary,
			total: total
		}
	}));
}
