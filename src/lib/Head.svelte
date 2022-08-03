<script lang="ts">
  export let title: string;
</script>

<svelte:head>
	<title>{`${title} | Florian Kuc`}</title>
	<meta name={title.toLowerCase()} content="Florian Kuc | Web Dev" />
</svelte:head>