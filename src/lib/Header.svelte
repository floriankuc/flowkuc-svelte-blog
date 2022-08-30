<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">About</a></li>
			<li class:active={$page.url.pathname === '/work'}>
				<a sveltekit:prefetch href="/work">work</a>
			</li>
			<li class:active={$page.url.pathname.includes('/blog')}>
				<a sveltekit:prefetch href="/blog">Blog</a>
			</li>
			<li class:active={$page.url.pathname === '/contact'}>
				<a sveltekit:prefetch href="/contact">Contact</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	@import '../styles/variables.scss';

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: sticky;
		top: 0;
		height: 50px;
		z-index: 1;
		background-color: $color-white;
	}

	nav {
		display: flex;
		justify-content: center;
		width: 100%;
	}

	.active a {
		color: $color-red;
	}

	nav a {
		display: flex;
		padding: 0 1em;
		font-weight: 400;
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 0.1rem;
		color: $color-black;
		text-decoration: none;
		font-family: 'Roboto Condensed';
	}
</style>
