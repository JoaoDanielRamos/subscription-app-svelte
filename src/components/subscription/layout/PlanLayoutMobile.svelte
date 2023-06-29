<script lang="ts">
	import StepsTab from '../ui/StepsTab.svelte';
	import BackOrNext from '../ui/BackOrNext.svelte';
</script>

<div class="relative flex flex-col w-full min-h-screen md:hidden">
	<div
		class="w-full flex justify-center bg-purple200 bg-transparent bg-[url('$lib/assets/bg-sidebar-mobile.svg')] h-[172px] pt-10 bg-no-repeat bg-cover"
	>
		<StepsTab />
	</div>

	<div class="px-4">
		<div class="box-content px-6 py-8 -mt-[74px] rounded bg-gray100">
			<slot name="children" />
		</div>
	</div>

	<div class="fixed bottom-0 left-0 z-10 w-full">
		<BackOrNext />
	</div>
</div>
