<script lang="ts">


  export let title = ''
  export let date = ''
</script>
<a sveltekit:prefetch href="/blog">Back</a>
  <h1>{title}</h1>
  
  <p>Published: {date}</p>
  
  <slot />

<a sveltekit:prefetch href="/blog">Back</a>
