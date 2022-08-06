<script lang="ts">
	import { createForm } from 'felte';
	import emailjs from '@emailjs/browser';
	import Input from '../lib/Input.svelte';
	import Button from '../lib/Button.svelte';
	import { fly } from 'svelte/transition';
	import Toast from '../lib/Toast.svelte';
	import { triggerToast } from '../stores/toastStore';
	import { validator } from '@felte/validator-yup';
	import { schema } from '../helpers/validationSchema';
	import Head from '$lib/Head.svelte';

	const { form, reset, isSubmitting, errors, isValid, isDirty } = createForm({
		onSubmit: sendEmail,
		extend: [validator({ schema })]
	});

	async function sendEmail() {
		isSubmitting.set(true);
		try {
			await emailjs.sendForm(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				'#emailform',
				import.meta.env.VITE_USER_ID
			);
			triggerToast('Thanks for your message!');
			reset();
		} catch (err) {
			triggerToast('Something went wrong :(', 'error');
		} finally {
			isSubmitting.set(false);
		}
	}
</script>

<Head title="Contact" />
<p in:fly={{ x: -10 }}>
	If you'd like to get in touch, feel free to drop me a line. I am currently not looking for any new
	opportunites in terms of permanent full-time position - I am however keen to do more open source
	work or hear about promising side projects.
</p>

<form use:form id="emailform" in:fly={{ x: -10, delay: 100 }}>
	<Input name="name" error={$errors.name} label={'Name'} />
	<Input name="email" error={$errors?.email?.[0]} label={'Email'} />
	<Input type="textarea" error={$errors.message} name="message" label={'Message'} />
	<Button type="submit" disabled={$isSubmitting || !$isValid || !$isDirty}>Send</Button>
</form>
<Toast />

<style lang="scss">
	#emailform {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		& :global(button) {
			align-self: flex-end;
		}
	}
</style>
