<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({fetch}) => {
    const response = await fetch('https://api.github.com/users/floriankuc/repos?sort=created&direction=desc')
    const projects = await response.json()
  
    return {
      props: {
        projects
      }
    }
  }

  export interface ProjectProps{
    name: string;
    description: string;
    topics: string[];
    html_url: string;
  }
</script>

<script lang="ts">
  import Project from '../lib/Project.svelte'
  export let projects: ProjectProps[];
  const l = projects.length
</script>

<p> 
  These are some projects I have worked on outside work, sourced from
  my <a href="https://api.github.com/users/floriankuc" target="_blank">
    Github profile
  </a>
  and generally work in progress. Some on the verge of
  completion, others I may have abandoned entirely in the light of
  something more captivating. 😇
</p>

<ul>
{#each projects as p}
  <Project project={p}/>
{/each}
</ul>

<style lang="scss">
  ul {
    flex-direction: column;
  }
</style>