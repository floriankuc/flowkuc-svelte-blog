<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../styles/app.scss';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<style lang="scss">
	@import '../styles/variables.scss';

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 50%;
		margin: 5rem auto;
		gap: 8rem;

		@media (max-width: $mq-xl) {
			width: 60%;
		}
		@media (max-width: $mq-lg) {
			width: 70%;
		}
		@media (max-width: $mq-md) {
			width: 80%;
		}
		@media (max-width: $mq-sm) {
			width: 95%;
			gap: 3rem;
			margin: 3rem auto;
		}
	}
</style>
