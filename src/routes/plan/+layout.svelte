<script lang="ts">
	import '../../styles/app.css';
	import PlanLayoutDesktop from '../../components/subscription/layout/PlanLayoutDesktop.svelte';
	import PlanLayoutMobile from '../../components/subscription/layout/PlanLayoutMobile.svelte';
</script>

<div
	class="flex w-full md:min-h-screen md:items-center md:justify-center md:px-10 md:p-0 md:bg-gray100"
>
	<PlanLayoutMobile>
		<svelte.fragment slot="children"> <slot /> </svelte.fragment>
	</PlanLayoutMobile>

	<PlanLayoutDesktop>
		<svelte.fragment slot="children"> <slot /> </svelte.fragment>
	</PlanLayoutDesktop>
</div>
