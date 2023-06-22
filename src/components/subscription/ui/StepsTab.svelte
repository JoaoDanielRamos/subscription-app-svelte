<script lang="ts">
	import classnames from 'classnames';
	import data from '../../../data.json';

	export const steps = data.steps;

	import { activeStep } from '../../../stores/stepsStore';
</script>

<!-- 
  This component renders a tab with the four main steps. Step 5 is conditionally rendered when the user clicks on "confirm" at step 4. 
  Each step is displayed with its respective number and name. The active step is highlighted with blue background and white text color. 
  The rendering logic ensures that step 5 is displayed only if it is the active step or if it is not step number 5.
-->
<div class="flex flex-col gap-8 text-white">
	{#each steps as step}
		{#if step.number !== 5 || ($activeStep === 5 && step.number === 5)}
			<div class="flex items-center gap-4">
				<p
					class={classnames(
						'border border-white w-[33px] h-[33px] rounded-full flex items-center justify-center text-[14px] font-semibold transition_all_300',
						step.number === $activeStep && 'bg-blue100 border-[transparent_!important] text-blue200'
					)}
				>
					{step.number}
				</p>

				<div>
					<p class="text-[12px] uppercase">step {step.number}</p>
					<p class="text-[14px] font-semibold uppercase">{step.name}</p>
				</div>
			</div>
		{/if}
	{/each}
</div>
