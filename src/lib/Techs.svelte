<script context="module" lang="ts">
	import { fly } from 'svelte/transition';
</script>


<script lang="ts">
  import { techs } from "../data";
</script>

<ul in:fly={{x: -10, delay: 100}}>
{#each techs as tech}
   <li>{tech}</li>
{/each}
</ul>

<style lang="scss">
	ul {
    margin: 0 auto;
    display:grid;
    gap: 20px;
    padding: 3rem 1rem;
    grid-template-columns: repeat(3, minmax(80px, 100px));
    width: max-content;

		li {
			list-style-image: url('/images/chevron.svg');
		}
	}
</style>
