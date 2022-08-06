<script lang="ts">
	import type { Position } from 'src/types';
	export let position: Position;
</script>

<h4>{position.title}</h4>
<p>{position.time}</p>
<ul>
	{#each position.bullets as bullet}
		<li>{bullet}</li>
	{/each}
</ul>

<style lang="scss">
	ul {
		display: block;
		padding: 1rem;

		li {
			list-style-image: url('/images/chevron.svg');
		}
	}
</style>
