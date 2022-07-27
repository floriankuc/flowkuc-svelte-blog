<script context="module">
	import { browser, dev } from '$app/env';
	import { techs } from '../data';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="Florian Kuc | Web Dev" />
</svelte:head>

<div class="about">
	<img alt="me" src="me.jpg" class="about__pic"/>
	<h1 class="about__headline">Hi, I'm <span>Flo</span>rian</h1>
	<div class="about__description">
	
	<p>A web dev based in Hamburg, DE.</p>
	<p>Creating new things out of nothing and improving upon already existent systems, processes and solutions is what I love about software development. I enjoy both working independently and in a team and contributing to well-crafted and useful software with intuitive and clear user experience. I am an avid learner and always looking into new technologies that catch my attention.
	Happily working on exciting front end and cloud related projects in the life science sector at <a href="https://www.eppendorf.com" target="_blank">Eppendorf</a>.</p>
	</div>
	<div class="about__techs">
		<ul>
			{#each techs as t}
				<li>{t}</li>
			{/each}
		</ul>
	<a href="https://stackshare.io/floriankuc/my-stack#stack" target="_blank">More on stackshare</a>
</div>


</div>

<style lang="scss">
	@import '../styles/variables.scss';

	.about {
		display: grid;
		align-items: center;
		grid-template-columns: 20% 20% 10% 1fr;
		grid-template-rows: 30% 20% 10%;
		row-gap: 15%;

		&__pic {
			border-radius: 1rem;
			width: 700px;
			grid-column: 1 / 3;
			grid-row: 1 / 2;
		}

		&__headline {
			grid-row: 1 / 2;
			grid-column: 2 / 5;
			align-self: end;
			justify-self: end;
			text-shadow: -1px -1px 0 $color-white, 1px -1px 0 $color-white, -1px 1px 0 $color-white, 1px 1px 0 $color-white;

			span {
				border: 1px solid black;
			}
		}

		&__description {
			grid-column: 2 / 4;
			grid-row: 2 / 3;
			display: grid;
		}


		&__techs {
			grid-row: 3 / 4;
			grid-column: 3 / 4;
			background-color: black;
			color: white;
			padding: 1rem;
			width: fit-content;
			border-radius: 1rem;

			ul {
				gap: 2rem;
			} 
		} 
	}
</style>
