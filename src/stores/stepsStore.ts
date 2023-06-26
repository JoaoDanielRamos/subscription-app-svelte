import { writable, get } from 'svelte/store';
import { userPlan } from './userPlanStore';

export const activeStep = writable(1);

/**
 * Updates the active step based on the given direction.
 * @param {string} direction - The direction of the step update. Possible values: 'increase', 'decrease'.
 */
export function updateStep(direction) {
	activeStep.update((currentStep) => {
		if (direction === 'increase') {
			return currentStep === 1 && !validateUserPlan() ? currentStep : currentStep + 1;
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

// * Validation exclusive to Step 1
export const formValidation = writable({
	name: undefined,
	email: undefined,
	phone: undefined
});

/**
 * Validates the user plan.
 * @returns {boolean} - Indicates whether the user plan is valid.
 */
function validateUserPlan() {
	const { name, email, phone } = get(userPlan);

	const nameRegex = /^(?!.*\d)[A-Za-z]{2,}(?: [A-Za-z]{2,})*$/;
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

	/**
	 * Object containing the validation messages for each field.
	 * @type {Object}
	 * @property {string} name - The validation message for the name field.
	 * @property {string} email - The validation message for the email field.
	 * @property {string} phone - The validation message for the phone field.
	 */
	const validationMessages = {
		name: validateField(name, nameRegex, 'This field is required', 'Name is invalid'),
		email: validateField(email, emailRegex, 'This field is required', 'Email is invalid'),
		phone: validateField(phone, phoneRegex, 'This field is required', 'Phone is invalid')
	};

	formValidation.update((prevValidation) => ({
		...prevValidation,
		...validationMessages
	}));

	const isValid = Object.values(validationMessages).every((message) => message === 'filled');

	return isValid;
}

/**
 * Validates a field based on a regex pattern.
 * @param {*} field - The field value to validate.
 * @param {RegExp} regex - The regex pattern to apply for validation.
 * @param {string} requiredErrorMessage - The validation message when the field is required.
 * @param {string} invalidErrorMessage - The validation message when the field is invalid.
 * @returns {string} - The validation message for the field.
 */

function validateField(field, regex, requiredErrorMessage, invalidErrorMessage) {
	if (field === undefined) {
		return requiredErrorMessage;
	} else if (regex.test(field)) {
		return 'filled';
	} else {
		return invalidErrorMessage;
	}
}
