<script lang="ts">
	import type { Project } from 'src/types';

	import Link from './icons/Link.svelte';
	export let project: Project;
</script>

<li>
	<div>
		<h3>{project.name.split(/[-_]/g).join(' ')}</h3>
		<p>{project.description}</p>
		<ul>
			{#each project.topics as topic}
				<li>{topic}</li>
			{/each}
		</ul>
	</div>
	<a href={project.html_url} target="_blank"><Link /></a>
</li>

<style lang="scss">
	@import '../styles/variables.scss';
	li {
		display: flex;
		background-color: $color-grey-light-mid;
		border-radius: 1rem;
		padding: 1rem;

		div {
			flex-grow: 1;

			ul {
				flex-wrap: wrap;
				margin: 1rem 0 0 1rem;
				gap: 1rem;

				li {
					border-radius: 0.3rem;
					padding: 0.2rem 0.5rem;
					border: 1px solid $color-black;
				}
			}
		}
	}
</style>
