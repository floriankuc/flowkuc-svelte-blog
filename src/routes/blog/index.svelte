<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const posts = await fetch('/api/posts.json');
		const allPosts = await posts.json();

		return {
			props: {
				posts: allPosts
			}
		};
	};
</script>

<script lang="ts">
	import Head from '$lib/Head.svelte';
	import type { Post } from 'src/types';

	export let posts: Post[];
</script>

<Head title="Blog" />

<ul>
	{#each posts as post}
		<li>
			<h2>
				<a href={post.path}>
					{post.meta.title}
				</a>
			</h2>
			<p>Published {post.meta.date}</p>
			<p>{post.meta.desc ?? ''}</p>
		</li>
	{/each}
</ul>

<style lang="scss">
	@import '../../styles/variables.scss';
	ul {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		li {
			background-color: $color-grey-light-mid;
			padding: 2rem;
			border-radius: 1rem;

			a {
				font-size: 1.5rem;
				font-weight: 400;
			}
		}
	}
</style>
