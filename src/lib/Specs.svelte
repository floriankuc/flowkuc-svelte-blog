<script  lang="ts">
  import { onMount } from 'svelte';

  export let repoo: Repo;
  export let tagversion: string;
  let tag: any
  let date: string;

  onMount(async () => {
    const getRepo = async () => {
      const res = await fetch('https://api.github.com/repos/floriankuc/flowkuc-svelte-blog')
      return await res.json()
    }

    const getTags = async () => {
      const res = await fetch('https://api.github.com/repos/floriankuc/flowkuc-svelte-blog/tags')
      return await res.json()
    }
    
    [repoo, tag] = await Promise.all([getRepo(), getTags()])

    tagversion = tag[0].name
    date = new Date(repoo.pushed_at).toLocaleDateString('en')
  });

  interface Repo {
    updated_at: string;
    pushed_at: string;
  }
</script>

<ul class="site-specs">
  <li>{tagversion || 'v'}</li>
  <li>Sveltekit</li>
  <li>{ date || ''}</li>
</ul>


<style lang="scss">
  .site-specs {
    position: sticky;
    flex-direction: column;
    text-align: right;

    li {
       text-transform: uppercase;
      font-weight: 300;
    }
  }
</style>
