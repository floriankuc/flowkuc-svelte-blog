<script lang="ts">
	// your script goes here
</script>

<button class="button" {...$$props}>
	<slot />
</button>

<!-- markup (zero or more items) goes here -->
<style lang="scss">
	@import '../styles/variables.scss';
	.button {
		height: 3rem;
		width: fit-content;
		padding: 0 1.5rem;
		border: none;
		border-radius: 0.7rem;
		color: white;
		background-color: black;

		&:enabled:hover {
			cursor: pointer;
		}
		&:disabled {
			background-color: $color-grey-mid;
			color: $color-grey-dark;
		}
	}
</style>
