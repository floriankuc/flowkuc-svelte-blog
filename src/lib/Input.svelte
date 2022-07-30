<script lang="ts">
	export let label: string;
	export let name: string;
	export let handleChange: (event: Event) => any;
	export let error: string;
	export let value: string;
	export let type: 'input' | 'textarea' = 'input';
</script>

<!-- &&props usen, disabled setzen für submitting -->

<div class="field">
	<label for={name}>{label}</label>
	{#if type === 'input'}
		<input class="field--input" id={name} {name} on:change={handleChange} bind:value />
	{:else}
		<textarea class="field--textarea" id={name} {name} on:change={handleChange} bind:value />
	{/if}

	{#if error}
		<small class="field__error">{error}</small>
	{/if}
</div>

<!-- markup (zero or more items) goes here -->
<style lang="scss">
	@import '../styles/variables.scss';
	.field {
		/* background-color: lavenderblush; */
		display: flex;
		flex-direction: column;
		gap: 0.7rem;

		&--textarea,
		&--input {
			outline: none;
			padding: 0.6rem 1rem;
			border-radius: 0.8rem;
			border: 1px solid $color-grey-dark;

			&:focus,
			&:active {
				/* outline: 1px solid $color-grey-dark; */
				background-color: $color-grey-light-mid;
			}
		}

		&--textarea {
			resize: none;
		}

		&__error {
			color: #ff0000;
		}
	}
	/* your styles go here */
</style>
