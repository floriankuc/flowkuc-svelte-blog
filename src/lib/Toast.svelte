<script lang="ts">
	import { toast } from '../stores/toastStore';
	import { fly } from 'svelte/transition';
</script>

{#if $toast.message}
	<div in:fly={{ y: -20 }}>{$toast.message}</div>
{/if}

<style lang="scss">
	@import '../styles/variables.scss';
	div {
		z-index: 100;
		position: absolute;
		top: 50%;
		left: 50%;
		background: $color-black;
		transform: translate(-50%, -50%);
		color: $color-white;
		padding: 1rem 2rem;
		font-weight: 300;
		border-radius: 1rem;
	}
</style>
