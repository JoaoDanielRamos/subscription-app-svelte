import { writable, get } from 'svelte/store';
import { userPlan } from './userPlanStore';

export const activeStep = writable(1);

/**
 * Updates the active step by increasing or decreasing it based on the specified direction.
 * @param {string} direction - The direction of the step update ('increase' or 'decrease').
 */
export function updateStep(direction: string) {
	activeStep.update((currentStep) => {
		if (direction === 'increase') {
			if (currentStep === 1) {
				if (validateUserPlan()) {
					return currentStep + 1;
				}
			} else {
				return currentStep + 1;
			}
		} else if (direction === 'decrease') {
			return currentStep - 1;
		}

		return currentStep;
	});
}

/**
 * Updates the active step to the specified step.
 * @param {number} step - The step to set as the active step.
 */
export function sendToStep(step: number) {
	activeStep.set(step);
}

// ******************************************************************************************* //

export const formValidation = writable({
	name: undefined,
	email: undefined,
	phone: undefined
});

function validateUserPlan() {
	const { name, email, phone } = get(userPlan);

	const updatedValidation = {
		name: name === undefined ? 'This field is required' : 'filled',
		email: email === undefined ? 'This field is required' : 'filled',
		phone: phone === undefined ? 'This field is required' : 'filled'
	};

	formValidation.update((prevValidation) => ({
		...prevValidation,
		...updatedValidation
	}));

	const isValid = Object.values(updatedValidation).every((error) => error === 'filled');

	return isValid;
}
