<script lang="ts">
	import Github from './icons/Github.svelte';
	import LinkedIn from './icons/LinkedIn.svelte';
	import Specs from './Specs.svelte';
	import Xing from './icons/Xing.svelte';
</script>

<footer>
	<ul>
		<li><a href="https://github.com/floriankuc/" target="_blank"><Github /></a></li>
		<li><a href="https://www.linkedin.com/in/floriankuc/" target="_blank"><LinkedIn /></a></li>
		<li><a href="https://www.xing.com/profile/Florian_Kuc/" target="_blank"><Xing /></a></li>
	</ul>
	<Specs />
</footer>

<style lang="scss">
	@import '../styles/variables.scss';
	footer {
		position: sticky;
		bottom: 0;
		display: flex;
		align-items: flex-end;
		padding: 0 2rem 0.7rem;
		height: 70px;
		justify-content: space-between;

		ul {
			gap: 20px;
		}

		@media (max-width: $mq-lg) {
			padding-bottom: 0;
			justify-content: center;
			height: 40px;
			background: $color-white;
		}
	}
</style>
