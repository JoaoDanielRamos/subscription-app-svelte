<script lang="ts">
	import classnames from 'classnames';

	import { steps } from '../store';
</script>

<div class="flex flex-col gap-8 text-White">
	{#each $steps as step}
		<div class="flex items-center gap-4">
			<p
				class={classnames(
					step.active && 'bg-Light-blue border-transparent text-Marine-blue',
					'border border-White w-[33px] h-[33px] rounded-full flex items-center justify-center text-[14px] font-semibold transition_all_300'
				)}
			>
				{step.number}
			</p>

			<div>
				<p class="text-[12px] uppercase">step {step.number}</p>
				<p class="text-[14px] font-semibold uppercase">{step.name}</p>
			</div>
		</div>
	{/each}
</div>
