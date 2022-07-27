<script lang="ts">
  import type { ProjectProps } from "src/routes/projects.svelte";
import Link from "./Link.svelte";
  export let project: ProjectProps;

  console.log(project)
</script>
<!-- 
topics: string[];
gh_url: string;
web_url: string; -->

<li>
    <h3>{project.name.split(/[-_]/g).join(" ")}</h3>
    <p>{project.description}</p>
    <ul>
      {#each project.topics as topic}
        <p>{topic}</p>
      {/each}
    </ul>
    <a href={project.html_url} target="_blank"><Link/></a>
</li>

<style>
  /* your styles go here */
</style>
