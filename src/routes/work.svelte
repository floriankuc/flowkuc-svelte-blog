<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const response = await fetch(
			'https://api.github.com/users/floriankuc/repos?sort=created&direction=desc'
		);
		const projects = await response.json();

		return {
			props: {
				projects
			}
		};
	};
</script>

<script lang="ts">
	import { techs } from '../data';
	import Project from '../lib/Project.svelte';
	import Tabs from '$lib/Tabs.svelte';
	import Head from '$lib/Head.svelte';
	import { arrayToString } from '../helpers';
	import Eppendorf from '$lib/employers/Eppendorf.svelte';
	import Bookingtime from '$lib/employers/Bookingtime.svelte';
	import Business from '$lib/employers/Business.svelte';
	import type { Project as ProjectProps } from 'src/types';

	export let projects: ProjectProps[];
	let items = [
		{ label: 'Eppendorf', value: 1, component: Eppendorf },
		{ label: 'Bookingtime', value: 2, component: Bookingtime },
		{ label: 'Business', value: 3, component: Business }
	];

	const techString = arrayToString(techs);
</script>

<Head title="Work" />
<Tabs {items} />

<div>
	<p>
		I've been building websites and apps mainly with <span>{techString}</span>. All technologies
		I've ever worked with can be found on my
		<a href="https://stackshare.io/floriankuc/my-stack#stack" target="_blank">stackshare</a>. Below
		are some projects I have worked on outside work, sourced from my
		<a href="https://github.com/floriankuc" target="_blank"> Github profile </a>
		and generally work in progress. Some on the verge of completion, others I may have abandoned entirely
		in the light of something more captivating. 😇
	</p>
</div>

<ul>
	{#each projects as p}
		<Project project={p} />
	{/each}
</ul>

<style lang="scss">
	ul {
		flex-direction: column;

		font-weight: 300;
		gap: 3rem;
		padding: 1rem;
	}

	span {
		font-weight: 400;
	}
</style>
