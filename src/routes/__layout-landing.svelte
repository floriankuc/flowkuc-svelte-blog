<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../styles/app.scss';
</script>

<Header />
<main>
	<slot/>
</main>
<Footer/>

<style lang="scss">
  @import '../styles/variables.scss';

  main {
    flex: 1;
		display: flex;
		flex-direction: column;
		margin: 5rem;
		justify-content: center;
		align-items: center;
  }
</style>
