<script lang="ts">
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import emailjs from '@emailjs/browser';
	import Input from '../lib/Input.svelte';
	import Button from '../lib/Button.svelte';

	const { form, errors, handleChange, handleReset, isValid, isSubmitting, touched } = createForm({
		initialValues: {
			name: '',
			email: '',
			message: ''
		},
		validationSchema: yup.object().shape({
			name: yup.string().required('Name is required.'),
			email: yup.string().email('Email is invalid').required('Email is required.'),
			message: yup
				.string()
				.required('Message is required')
				.min(5, 'Message should probably longer. :-)')
		}),
		onSubmit: sendEmail
	});

	async function sendEmail(e) {
		e.preventDefault();

		try {
			const res = await emailjs.sendForm(
				// process.env.SERVICE_ID,
				// process.env.VITE_SERVICE_ID as string,
				'service_7jrq2gv',
				'template_owkbegn',
				// process.env.VITE_TEMPLATE_ID,
				'#emailform',
				// process.env.VITE_USER_ID
				'user_syQnaJg1pFkIoDz5V3il4'
				// process.env.USER_ID
			);
			handleReset();
		} catch (err) {
			console.log(err);
		}
	}
</script>

<p>
	If you'd like to get in touch, feel free to drop me a line. I am currently not looking for any new
	opportunites in terms of permanent full-time position - I am however keen to do more open source
	work or hear about promising side projects.
</p>

<form on:submit={sendEmail} id="emailform">
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
	<Button type="submit" disabled={$isSubmitting || !$isValid}>Submit</Button>
</form>

<style lang="scss">
	#emailform {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
