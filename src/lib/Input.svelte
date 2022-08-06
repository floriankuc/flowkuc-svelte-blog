<script lang="ts">
	export let label: string;
	export let name: string;
	export let error: any;
	export let type: 'input' | 'textarea' = 'input';
</script>

<div>
	<label for={name}>{label}</label>
	{#if type === 'input'}
		<input id={name} {name} />
	{:else}
		<textarea id={name} {name} />
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

		small {
			color: $color-red;
		}
	}
</style>
