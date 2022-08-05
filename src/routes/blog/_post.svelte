<script lang="ts">
	export let title = '';
	export let date = '';
</script>

<article>
	<a sveltekit:prefetch href="/blog">Back</a>
	<div>
		<h2>{title}</h2>
		<p>{new Date(date).toLocaleDateString()}</p>
	</div>
	<slot />
	<a sveltekit:prefetch href="/blog">Back</a>
</article>

<style lang="scss">
	article {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	h2 {
		font-size: 3rem;
	}
	a {
		margin: 2rem 0;
	}
	div {
		margin-bottom: 2rem;
	}
</style>
