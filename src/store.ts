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
	name: undefined,
	email: undefined,
	phone: undefined,
	plan: 'arcade',
	paymentFrequency: 'monthly',
	addOns: [],
	total: undefined
});

// * Step 1
/**
 * Updates the user personal information properties (name, email, or phone).
 * @param {string} field - The field to update (name, email, or phone).
 * @param {ChangeEvent<HTMLInputElement>} event - The change event object.
 */
export function updatePersonalInfo(field: string, event: ChangeEvent<HTMLInputElement>) {
	const { value } = event.target;
	userPlan.update((plan) => ({ ...plan, [field]: value }));
}

// * Step 2
/**
 * Updates the plan property of the user plan.
 * @param {string} planName - The new plan name.
 */
export function updatePlan(planName) {
	userPlan.update((plan) => ({ ...plan, plan: planName }));
}

/**
 * Toggles the payment frequency between monthly and yearly in the user plan.
 */
export function updatePaymentFrequency() {
	userPlan.update((plan) => ({
		...plan,
		paymentFrequency: plan.paymentFrequency === 'monthly' ? 'yearly' : 'monthly'
	}));
}

// * Step 3
/**
 * Toggles the specified add-on in the user plan's add-ons array.
 * @param {string} addOn - The add-on to toggle.
 */
export function toggleAddOn(addOn) {
	userPlan.update((state) => {
		const addOns = [...state.addOns];
		const addOnIndex = addOns.indexOf(addOn);

		if (addOnIndex === -1) {
			// addOn does not exist in the array, add it
			addOns.push(addOn);
		} else {
			// addOn exists in the array, remove it
			addOns.splice(addOnIndex, 1);
		}

		return { ...state, addOns };
	});
}
