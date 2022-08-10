<ul>
	<li>{process.env.npm_package_version}</li>
	<li>Sveltekit</li>
</ul>


<style lang="scss">
	@import '../styles/variables.scss';
	ul {
		position: sticky;
		flex-direction: column;
		text-align: right;
		line-height: 1;
		font-size: 0.9rem;
		align-self: center;

		li {
			text-transform: uppercase;
		}

		@media (max-width: $mq-lg) {
			display: none;
		}
	}
</style>
