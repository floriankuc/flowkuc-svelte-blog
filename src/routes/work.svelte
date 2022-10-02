<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { fly } from 'svelte/transition';
	import { flyer } from '../helpers';

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
	import Project from '../lib/Project.svelte';
	import Tabs from '$lib/Tabs.svelte';
	import Head from '$lib/Head.svelte';
	import Eppendorf from '$lib/employers/Eppendorf.svelte';
	import Bookingtime from '$lib/employers/Bookingtime.svelte';
	import Business from '$lib/employers/Business.svelte';
	import type { Project as ProjectProps } from 'src/types';
	import { techs } from '../data';
	import { arrayToString } from '../helpers';

	export let projects: ProjectProps[];
	let items = [
		{ label: 'Eppendorf', value: 1, component: Eppendorf },
		{ label: 'Bookingtime', value: 2, component: Bookingtime },
		{ label: 'Business', value: 3, component: Business }
	];

	
</script>

<Head title="Work" />
<Tabs {items} />

<div>
	<p in:fly={flyer(150)}>
		My main stack is {arrayToString(techs)}. All technologies I've
		worked with so far can be found on
		<a href="https://stackshare.io/floriankuc/my-stack#stack" target="_blank">stackshare</a>. Below
		are some projects I have worked on outside work, sourced from my
		Github profile.
		They are generally work in progress. Some on the verge of completion, others I may have abandoned entirely
		in the light of something more captivating. 
	</p>
</div>

<ul in:fly={flyer(250)}>
	{#each projects as p}
		<Project project={p} />
	{/each}
</ul>

<style lang="scss">
	ul {
		flex-direction: column;
		gap: 3rem;
	}
</style>
