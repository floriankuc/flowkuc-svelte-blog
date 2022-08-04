<script lang="ts">
	import Employer from '../Employer.svelte';
	import { positions } from '../../data';

	const [, bookingtime] = positions;
</script>

<Employer position={bookingtime} />
