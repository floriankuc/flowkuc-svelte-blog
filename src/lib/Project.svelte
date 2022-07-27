<script lang="ts">
  import type { ProjectProps } from "src/routes/projects.svelte";
  export let project: ProjectProps;
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
</li>

<style>
  /* your styles go here */
</style>
