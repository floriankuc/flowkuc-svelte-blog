<script lang="ts">
	import { fly } from 'svelte/transition';
</script>

<button in:fly={{ x: -10, delay: 200 }} {...$$props}>
	<slot />
</button>
