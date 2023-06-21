<script lang="ts">
	import Steps from './Steps.svelte';
	import BackOrNext from './BackOrNext.svelte';
</script>

<div
	class="items-center justify-center hidden w-full min-h-screen px-10 md:flex hi md:p-0 bg-Magnolia"
>
	<div class="w-[940px] h-[600px] rounded-md bg-White shadow-lg p-4 flex">
		<div
			class="w-auto bg-Purplish-blue bg-transparent static h-[568px] min-w-[274px] bg-[url('$lib/assets/bg-sidebar-desktop.svg')] px-8 py-10 z-0"
		>
			<Steps />
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
