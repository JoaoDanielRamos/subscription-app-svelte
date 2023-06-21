<script lang="ts">
	import classnames from 'classnames';
	import { steps } from '../../../store';

	export function nextStep() {
		steps.update((currentSteps) => {
			for (let i = 0; i < currentSteps.length; i++) {
				if (currentSteps[i].active) {
					currentSteps[i].active = false; // set the current active step to false

					// Check if there is a next step
					if (i + 1 < currentSteps.length) {
						currentSteps[i + 1].active = true; // set the next step to active
					}

					break;
				}
			}

			return currentSteps;
		});
	}

	export function goBack() {
		steps.update((currentSteps) => {
			for (let i = 0; i < currentSteps.length; i++) {
				if (currentSteps[i].active) {
					currentSteps[i].active = false; // set the current active step to false

					// Check if there is a previous step
					if (i - 1 >= 0) {
						currentSteps[i - 1].active = true; // set the previous step to active
					}

					break;
				}
			}

			return currentSteps;
		});
	}
</script>

<div class="flex items-center justify-between w-full py-4">
	<button
		class={classnames(
			'font-bold text-gray300 fade_in_1000 py-4 select-none hover:text-purple200 transition_all_300 border border-transparent',
			$steps.at(0)?.active && 'hidden'
		)}
		on:click={goBack}>Go Back</button
	>

	<button
		class={classnames(
			'px-10 fade_in_1000 py-4 ml-auto font-bold rounded-md bg-blue200 border border-transparent text-white select-none hover:border-blue200 hover:bg-white hover:text-blue200 transition_all_300'
		)}
		on:click={nextStep}>{$steps.at(-1)?.active ? 'Confirm' : 'Next Step'}</button
	>
</div>
