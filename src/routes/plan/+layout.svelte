<script lang="ts">
	import '../../styles/app.css';
	import PlanLayoutDesktop from '../../components/subscription/layout/PlanLayoutDesktop.svelte';
</script>

<div class="flex items-center justify-center w-full min-h-screen px-10 md:p-0 bg-gray100">
	<PlanLayoutDesktop>
		<svelte.fragment slot="children"> <slot /> </svelte.fragment>
	</PlanLayoutDesktop>
</div>
