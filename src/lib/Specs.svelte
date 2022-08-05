<script lang="ts">
	import type { Repo } from 'src/types';

	import { onMount } from 'svelte';

	export let repo: Repo;
	let tag: any;
	let date: string;

	onMount(async () => {
		const getRepo = async () => {
			const res = await fetch('https://api.github.com/repos/floriankuc/flowkuc-svelte-blog');
			return await res.json();
		};

		const getTags = async () => {
			const res = await fetch('https://api.github.com/repos/floriankuc/flowkuc-svelte-blog/tags');
			return await res.json();
		};

		[repo, tag] = await Promise.all([getRepo(), getTags()]);

		tag = tag[0].name;
		date = new Date(repo.pushed_at).toLocaleDateString('en');
	});
</script>

<ul>
	<li>{tag ?? 'v'}</li>
	<li>Sveltekit</li>
	<li>{date || ''}</li>
</ul>

<style lang="scss">
	@import '../styles/variables.scss';
	ul {
		position: sticky;
		flex-direction: column;
		text-align: right;
		line-height: 1;
		font-size: 0.9rem;
		align-self: center;

		li {
			text-transform: uppercase;
		}

		@media (max-width: $mq-lg) {
			display: none;
		}
	}
</style>
