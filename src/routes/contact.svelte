<script lang="ts">
	import { createForm } from 'svelte-forms-lib';
	import emailjs from '@emailjs/browser';
	import Input from '../lib/Input.svelte';
	import Button from '../lib/Button.svelte';
	import Head from '$lib/Head.svelte';
	import { validationSchema } from '../helpers/validationSchema';
	import { fly } from 'svelte/transition';
	import Toast from '../lib/Toast.svelte';
	import { triggerToast } from '../stores/toastStore';

	const { form, errors, handleChange, handleReset, isValid, isSubmitting, touched } = createForm({
		initialValues: {
			name: '',
			email: '',
			message: ''
		},
		validationSchema,
		onSubmit: sendEmail
		// validate: (values) => {
		// 	let errs: { name?: string } = {};
		// 	if (values.name === '') {
		// 		errs.name = 'name required';
		// 	}
		// 	if(values.email === "") {

		// 	}

		// return errs;
		// }
	});

	// console.log('valid', $isValid);
	// console.log('t', $touched);
	// console.log('v', $form.name);

	// FIX: emailjs cannot type this event correctly
	async function sendEmail(e: any) {
		e.preventDefault();
		isSubmitting.set(true);
		try {
			await emailjs.sendForm(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				'#emailform',
				import.meta.env.VITE_USER_ID
			);
			triggerToast('Thanks for your message!');
			handleReset();
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

<form on:submit={sendEmail} id="emailform" in:fly={{ x: -10, delay: 100 }}>
	<Input name="name" {handleChange} value={$form.name} error={$errors.name} label={'Name'} />
	<Input name="email" {handleChange} value={$form.email} error={$errors.email} label={'Email'} />
	<Input
		type="textarea"
		name="message"
		{handleChange}
		value={$form.message}
		error={$errors.message}
		label={'Message'}
	/>
	<Button type="submit" disabled={$isValid}>Submit</Button>
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
