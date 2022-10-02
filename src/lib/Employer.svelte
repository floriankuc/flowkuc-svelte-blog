<script lang="ts">
	import type { Position } from 'src/types';
	import { fade } from 'svelte/transition';
	export let position: Position;
</script>

<div  in:fade={{delay: 0, duration: 100}}>
<h4>{position.title}</h4>
<p>{position.time}</p>
<ul>
	{#each position.bullets as bullet}
		<li>{bullet}</li>
	{/each}
</ul>
</div>

<style lang="scss">
	div {
		padding-left: 70px;
	}
	ul {
		display: block;
		padding: 1rem;

		li {
			list-style-image: url('/images/chevron.svg');
		}
	}
</style>
