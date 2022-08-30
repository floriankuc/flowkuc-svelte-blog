<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { fly } from 'svelte/transition';
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
	import Techs from '$lib/Techs.svelte';

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
	<p in:fly={{ x: -10, delay: 100 }}>
		All technologies I've
		worked with so far can be found on
		<a href="https://stackshare.io/floriankuc/my-stack#stack" target="_blank">stackshare</a>. Below
		are some projects I have worked on outside work, sourced from my
		<a href="https://github.com/floriankuc" target="_blank">Github profile</a>.
		They are generally work in progress. Some on the verge of completion, others I may have abandoned entirely
		in the light of something more captivating. My main stack is:
	</p>
	<Techs/>
</div>

<ul in:fly={{ x: -10, delay: 200 }}>
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
