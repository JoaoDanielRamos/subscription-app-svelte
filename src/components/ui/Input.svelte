<script lang="ts">
	import classNames from 'classnames';
	import { onMount } from 'svelte/internal';

	export let label: string = 'A label';
	export let type: 'email' | 'text' | 'password' | 'tel' | 'number' = 'text';
	export let error: undefined | string;
	export let placeholder: string;
	export let onChange: any;
	export let bindValue: any;

	let ref: HTMLInputElement;

	onMount(() => {
		if (ref) {
			ref.type = type;
		}
	});
</script>

<label class="block mt-6 text-sm">
	<div class="flex justify-between">
		<span>{label}</span>

		{#if error === 'This field is required'}
			<span class="font-medium text-red100">{error}</span>
		{/if}
	</div>

	<input
		bind:this={ref}
		class={classNames('text_input', error === 'This field is required' && 'border-red100')}
		{placeholder}
		required
		on:change={onChange}
		bind:value={bindValue}
	/>
</label>
