<script lang="ts">
	export let label: string;
	export let name: string;
	export let handleChange: (event: Event) => any;
	export let error: string;
	export let value: string;
	export let type: 'input' | 'textarea' = 'input';
</script>

<div>
	<label for={name}>{label}</label>
	{#if type === 'input'}
		<input id={name} {name} on:change={handleChange} bind:value />
	{:else}
		<textarea id={name} {name} on:change={handleChange} bind:value />
	{/if}

	{#if error}
		<small>{error}</small>
	{/if}
</div>

<style lang="scss">
	@import '../styles/variables.scss';
	div {
		display: flex;
		flex-direction: column;
		gap: 0.7rem;

		textarea,
		input {
			outline: none;
			padding: 0.6rem 1rem;
			border-radius: 0.8rem;
			border: 1px solid $color-grey-dark;

			&:focus,
			&:active {
				background-color: $color-grey-light-mid;
			}
		}

		textarea {
			resize: none;
		}

		small {
			color: $color-red;
		}
	}
</style>
