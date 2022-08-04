<script lang="ts">
	import Employer from '../Employer.svelte';
	import { positions } from '../../data';

	const [, , business] = positions;
</script>

<Employer position={business} />
