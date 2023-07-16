<script lang="ts">
	import thankYou from '$lib/assets/icon-thank-you.svg';
	import { userPlan } from '../../../stores/userPlanStore';
	import Heading from '../../ui/Heading.svelte';
	import Subheading from '../../ui/Subheading.svelte';

	let isLoading = true;

	function load() {
		setInterval(() => {
			isLoading = false;
		}, 3000);
	}

	load();
</script>

{#if isLoading}
	<div class="flex items-center justify-center w-full h-full mt-28 sm:mt-32">
		<!-- <img src={spinner} alt="Thank you" class="fade_in_1000" /> -->
		<iframe
			src="https://giphy.com/embed/wvtt4mtViPOSrLYNFh"
			width="300"
			height="300"
			frameBorder="0"
			class="giphy-embed"
			allowFullScreen
		/>
	</div>
{:else}
	<div class="flex flex-col items-center justify-center h-full mt-36 fade_in_1000">
		<img src={thankYou} alt="Thank you" />
		<Heading text={`Thank you, ${$userPlan.name.split(' ')[0]}!`} styles={'text-center'} />
		<Subheading
			text="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."
			styles={'text-center'}
		/>
	</div>
{/if}
