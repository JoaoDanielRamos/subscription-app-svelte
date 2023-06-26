<script lang="ts">
	import StepsTab from '../ui/StepsTab.svelte';
	import BackOrNext from '../ui/BackOrNext.svelte';
</script>

<div class="items-center justify-center hidden w-full min-h-screen px-10 md:flex md:p-0 bg-gray100">
	<div class="w-[940px] h-[600px] rounded-md bg-white shadow-lg p-4 flex">
		<div
			class="w-auto bg-purple200 bg-transparent static h-[568px] min-w-[274px] bg-[url('$lib/assets/bg-sidebar-desktop.svg')] px-8 py-10 z-0"
		>
			<StepsTab />
		</div>

		<div class="flex justify-center w-full">
			<div class="flex flex-col w-[450px]">
				<div class="flex-grow w-full">
					<slot name="children" />
				</div>

				<BackOrNext />
			</div>
		</div>
	</div>
</div>
