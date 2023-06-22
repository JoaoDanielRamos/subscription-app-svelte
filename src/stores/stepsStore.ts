import { writable } from 'svelte/store';
export const activeStep = writable(1);

/**
 * Updates the active step by increasing or decreasing it based on the specified direction.
 * @param {string} direction - The direction of the step update ('increase' or 'decrease').
 */
export function updateStep(direction) {
	activeStep.update((currentStep) => {
		if (direction === 'increase') {
			return currentStep + 1;
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
export function sendToStep(step) {
	activeStep.set(step);
}
