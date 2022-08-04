<script lang="ts">
	import Employer from '../Employer.svelte';
	import { positions } from '../../data';

	const [eppendorf] = positions;
</script>

<Employer position={eppendorf} />
