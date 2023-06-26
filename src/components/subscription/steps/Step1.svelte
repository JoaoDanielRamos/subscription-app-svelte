<script lang="ts">
	import { updatePersonalInfo, userPlan } from '../../../stores/userPlanStore';
	import { formValidation } from '../../../stores/stepsStore';
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
		error={$formValidation.name}
	/>

	<Input
		label="Email Address"
		type="email"
		placeholder="e.g. stephenking@lorem.com"
		onChange={() => updatePersonalInfo('email', event)}
		bindValue={$userPlan.email}
		error={$formValidation.email}
	/>

	<Input
		label="Phone Number"
		type="tel"
		placeholder="e.g. +1 234 567 890"
		onChange={() => updatePersonalInfo('phone', event)}
		bindValue={$userPlan.phone}
		error={$formValidation.phone}
	/>
</div>
