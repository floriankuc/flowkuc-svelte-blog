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

	export interface ProjectProps {
		name: string;
		description: string;
		topics: string[];
		html_url: string;
	}
</script>

<script lang="ts">
	import Tab1 from '$lib/Tab1.svelte';

	import Project from '../lib/Project.svelte';
	import Tab2 from '$lib/Tab2.svelte';
	import Tabs from '$lib/Tabs.svelte';
	import Tab3 from '$lib/Tab3.svelte';
	export let projects: ProjectProps[];
	const l = projects.length;

	let items = [
		{ label: 'Eppendorf', value: 1, component: Tab1 },
		{ label: 'Bookingtime', value: 2, component: Tab2 },
		{ label: 'Business', value: 3, component: Tab3 }
	];
</script>

<Tabs {items} />
<p>
	These are some projects I have worked on outside work, sourced from my <a
		href="https://github.com/floriankuc"
		target="_blank"
	>
		Github profile
	</a>
	and generally work in progress. Some on the verge of completion, others I may have abandoned entirely
	in the light of something more captivating. 😇
</p>
<ul>
	{#each projects as p}
		<Project project={p} />
	{/each}
</ul>

<style lang="scss">
	ul {
		margin-top: 5rem;
		flex-direction: column;
		gap: 3rem;
	}
</style>
