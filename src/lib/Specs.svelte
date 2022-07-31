<script  lang="ts">
	// export const load: Load = async ({ fetch }) => {
	// 	const response = await fetch(
	// 		'https://api.github.com/repos/floriankuc/flowkuc-svelte-blog'
	// 	);
	// 	const project = await response.json();

  //   return {
	// 		props: {
	// 			project
	// 		}
	// 	};
		
	// };

  import { onMount } from 'svelte';


onMount(async () => {

  const getRepo = async () => {
   const res = await fetch('https://api.github.com/repos/floriankuc/flowkuc-svelte-blog')
   return await res.json()
  }

  const getTags = async () => {
   const res = await fetch('https://api.github.com/repos/floriankuc/flowkuc-svelte-blog/tags')
   return await res.json()
  }
  
  const [repo, tags] = await Promise.all([getRepo(), getTags()])

  console.log(repo)
  console.log(tags)
});

 interface Repo {
    updated_at: string;
    pushed_at: string;
}

</script>

<ul>
  <li>Version: </li>
  <li>Made with:</li>
  <li>Last updated:</li>
</ul>


<style lang="scss">

</style>
