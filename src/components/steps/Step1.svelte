<script lang="ts">
	import Heading from '../ui/Heading.svelte';
	import Subheading from '../ui/Subheading.svelte';
	import Input from '../ui/Input.svelte';
	import { userPlan } from '../../store';

	function updateName(event: { target: { value: string } }) {
		let name = event.target.value;
		userPlan.update((plan) => ({ ...plan, name }));
	}

	function updateEmail(event: { target: { value: string } }) {
		let email = event.target.value;
		userPlan.update((plan) => ({ ...plan, email }));
	}

	function updatePhone(event: { target: { value: string } }) {
		let phone = event.target.value;
		userPlan.update((plan) => ({ ...plan, phone }));
	}
</script>

<div class="fade_in_1000">
	<Heading text={'Personal info'} />
	<Subheading text={'Please provide your name, email address, and phone number.'} />

	<Input
		label="Name"
		type="text"
		placeholder="e.g. Stephen King"
		onChange={updateName}
		bindValue={$userPlan.name}
	/>

	<Input
		label="Email"
		type="email"
		placeholder="e.g. stephenking@lorem.com"
		onChange={updateEmail}
		bindValue={$userPlan.email}
	/>

	<Input
		label="Phone"
		type="tel"
		placeholder="e.g. +1 234 567 890"
		onChange={updatePhone}
		bindValue={$userPlan.phone}
	/>
</div>

<!-- <label class="block text-sm">
		Name
		<input
			type="text"
			class="text_input"
			placeholder="e.g. Stephen King"
			required
			on:change={updateName}
			bind:value={$userPlan.name}
		/>
	</label> -->
