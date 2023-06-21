<script lang="ts">
	import { onMount } from 'svelte/internal';

	export let label: string = 'A label';
	export let type: 'email' | 'text' | 'password' | 'tel' | 'number' = 'text';
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
	{label}

	<input
		bind:this={ref}
		class="text_input"
		{placeholder}
		required
		on:change={onChange}
		bind:value={bindValue}
	/>
</label>
