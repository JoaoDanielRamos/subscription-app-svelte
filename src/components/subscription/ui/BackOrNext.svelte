<script lang="ts">
	import classnames from 'classnames';
	import { activeStep, updateStep } from '../../../stores/stepsStore';
</script>

<div
	class={classnames(
		'flex items-center justify-between w-full py-4 px-4 md:px-0',
		$activeStep === 5 && 'hidden'
	)}
>
	<button
		class={classnames(
			'font-bold text-gray300 fade_in_1000 py-4 select-none hover:text-purple200 transition_all_300 border border-transparent',
			$activeStep === 1 && 'hidden'
		)}
		on:click={() => updateStep('decrease')}>Go Back</button
	>

	<button
		class="px-6 py-4 ml-auto text-sm font-semibold text-white border border-transparent rounded-md select-none md:px-10 md:py-4 md:text-base fade_in_1000 bg-blue200 hover:border-blue200 hover:bg-white hover:text-blue200 transition_all_300"
		on:click={() => updateStep('increase')}>{$activeStep === 4 ? 'Confirm' : 'Next Step'}</button
	>
</div>
