<script lang="ts">
	import Heading from '../ui/Heading.svelte';
	import Subheading from '../ui/Subheading.svelte';
</script>

<!-- markup (zero or more items) goes here -->
<div class="fade_in_1000">
	<Heading text={'Finishing up'} />
	<Subheading text={'Double-check everything looks OK before confirming.'} />

	<div class="px-6 pt-4 pb-6 mb-6 rounded-md bg-Magnolia">
		<div class="flex items-center justify-between">
			<div>
				<p class="text-lg font-medium text-Marine-blue">Arcade (Montly)</p>
				<p class="underline text-Cool-gray">Change</p>
			</div>

			<p class="text-lg font-semibold">$9/mo</p>
		</div>

		<div class="w-full h-px mt-6 mb-4 rounded-full bg-Cool-gray" />

		<div class="flex justify-between mb-4">
			<p class="text-Cool-gray">Online service</p>
			<p>+$1/mo</p>
		</div>

		<div class="flex justify-between">
			<p class="text-Cool-gray">Online service</p>
			<p>+$1/mo</p>
		</div>
	</div>

	<div class="flex justify-between">
		<p class="text-Cool-gray">Total (per month)</p>

		<p class="text-2xl font-medium text-Purplish-blue">+$12/mo</p>
	</div>
</div>
