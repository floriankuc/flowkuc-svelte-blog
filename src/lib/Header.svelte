<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">About</a></li>
			<!-- <li class:active={$page.url.pathname === '/todos'}>
				<a sveltekit:prefetch href="/todos">Todos</a>
			</li> -->
			<li class:active={$page.url.pathname === '/projects'}>
				<a sveltekit:prefetch href="/projects">Projects</a>
			</li>
			<li class:active={$page.url.pathname === '/contact'}>
				<a sveltekit:prefetch href="/contact">Contact</a>
			</li>
			<li class:active={$page.url.pathname === '/blog'}>
				<a sveltekit:prefetch href="/blog">Blog</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	@import '../styles/variables.scss';

	header {
		display: flex;
		justify-content: space-between;
		position: sticky;
		top: 0;
		height: 50px;
		background-color: $color-white;
	}

	nav {
		display: flex;
		justify-content: center;
		width: 100%;
	}

	ul {
		position: relative;
	}

	.active a {
		color: $color-red;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		font-weight: 400;
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		transition: color 0.15 ease-in-out;
		color: $color-black;
		text-decoration: none;
	}

</style>
