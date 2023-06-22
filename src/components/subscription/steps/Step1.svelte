<script lang="ts">
	import { updatePersonalInfo, userPlan } from '../../../stores/userPlanStore';
	import Heading from '../../ui/Heading.svelte';
	import Subheading from '../../ui/Subheading.svelte';
	import Input from '../../ui/Input.svelte';
</script>

<div class="fade_in_1000">
	<Heading text={'Personal info'} />
	<Subheading text={'Please provide your name, email address, and phone number.'} />

	<Input
		label="Name"
		type="text"
		placeholder="e.g. Stephen King"
		onChange={() => updatePersonalInfo('name', event)}
		bindValue={$userPlan.name}
	/>

	<Input
		label="Email"
		type="email"
		placeholder="e.g. stephenking@lorem.com"
		onChange={() => updatePersonalInfo('email', event)}
		bindValue={$userPlan.email}
	/>

	<Input
		label="Phone"
		type="tel"
		placeholder="e.g. +1 234 567 890"
		onChange={() => updatePersonalInfo('phone', event)}
		bindValue={$userPlan.phone}
	/>
</div>
