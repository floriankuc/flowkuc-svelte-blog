<script lang="ts">
	export let items: { value: number; label: string; component: any }[] = [];
	export let activeTabValue = 1;

	const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<section>
	<ul>
		{#each items as item}
			<li class:active={activeTabValue === item.value}>
				<span on:click={handleClick(item.value)}>{item.label}</span>
			</li>
		{/each}
	</ul>
	{#each items as item}
		{#if activeTabValue == item.value}
			<div>
				<svelte:component this={item.component} />
			</div>
		{/if}
	{/each}
</section>

<style lang="scss">
	@import '../styles/variables.scss';

	section {
		display: flex;
		gap: 4rem;
	}

	ul {
		flex-direction: column;

		li {
			white-space: nowrap;
			color: $color-grey-mid;
		}
	}

	div {
		flex-grow: 1;
		height: 150px;
	}
	ul {
		display: flex;
		flex-wrap: wrap;
	}

	span {
		display: block;
		padding: 0.5rem 1rem;
		cursor: pointer;
	}

	li.active > span {
		box-shadow: -1px 0px 0px 0px $color-red;
		color: $color-black;
	}
</style>
