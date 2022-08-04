<script lang="ts">
</script>

<button {...$$props}>
	<slot />
</button>

<style lang="scss">
	@import '../styles/variables.scss';
	button {
		height: 3rem;
		width: fit-content;
		padding: 0 1.5rem;
		border: none;
		border-radius: 0.7rem;
		color: $color-white;
		background-color: $color-black;

		&:enabled:hover {
			cursor: pointer;
		}
		&:disabled {
			background-color: $color-grey-mid;
			color: $color-grey-dark;
		}
	}
</style>
