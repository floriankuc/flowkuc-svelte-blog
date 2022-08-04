<script context="module">
	import { browser, dev } from '$app/env';
	import Head from '$lib/Head.svelte';
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

<Head title="About" />

<section>
	<img alt="me" src="me.jpg" />
	<div>
		<h1>Hi</h1>
		<h1>I am</h1>
		<h1>Flo</h1>
		<p>
			A web dev based in Hamburg, DE. Creating new things out of nothing and improving upon already
			existent systems, processes and solutions is what I love about software development. I enjoy
			both working independently and in a team and contributing to well-crafted and useful software
			with intuitive and clear user experience. I am an avid learner and always looking into new
			technologies that catch my attention. Happily working on exciting front end and cloud related
			projects in the life science sector at <a href="https://www.eppendorf.com" target="_blank"
				>Eppendorf</a
			>.
		</p>
	</div>
</section>

<style lang="scss">
	@import '../styles/variables.scss';

	section {
		display: flex;
		flex-wrap: wrap;
		gap: 4rem;
		img {
			border-radius: 1rem;
			width: 700px;
			align-self: flex-start;
		}

		h1 {
			text-align: left;
			line-height: 0.9;
		}

		p {
			margin-top: 3rem;
			line-height: 1.1;
			width: 600px;
		}
	}
</style>
