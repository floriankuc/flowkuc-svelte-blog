<script lang="ts">
	export let items: { value: number; label: string; component: any }[] = [];
	export let activeTabValue = 1;

	const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<div class="tabs">
	<ul class="tabs__panels">
		{#each items as item}
			<li class={activeTabValue === item.value ? 'active' : ''}>
				<span on:click={handleClick(item.value)}>{item.label}</span>
			</li>
		{/each}
	</ul>
	{#each items as item}
		{#if activeTabValue == item.value}
			<div class="box">
				<svelte:component this={item.component} />
			</div>
		{/if}
	{/each}
</div>

<style lang="scss">
	@import '../styles/variables.scss';

	.tabs {
		display: flex;
		gap: 4rem;
	}

	.tabs__panels {
		flex-direction: column;

		li {
			white-space: nowrap;
			color: $color-grey-mid;
		}
	}

	.box {
		flex-grow: 1;
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
