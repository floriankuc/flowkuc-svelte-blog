- post umschreiben, date anpassen, what. thats same value
- zoom in / out, media queries
- animations
- button, loading, submitting

- threejs

<script lang="ts">
	import { spring } from 'svelte/motion';

	let count = 0;

	const displayed_count = spring();
	$: displayed_count.set(count);
	$: offset = $displayed_count

</script>

<div class="counter">
	<button on:click={() => (count -= 1)} aria-label="Decrease the counter by one">
    </button>
</div>
