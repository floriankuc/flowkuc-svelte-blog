<script context="module" lang="ts">
import type { Load } from "@sveltejs/kit";


  export const load: Load = async ({fetch}) => {
    const posts = await fetch('/api/posts.json')
    const allPosts = await posts.json()
    console.log(allPosts)
  
    return {
      props: {
        posts: allPosts
      }
    }
  }
  </script>

<script lang="ts">
    interface Post {
    meta: {
      title: string;
      date: string;
    },
    path: string;
  }

  export let posts: Post[];
  </script>
  
  <ul>
    {#each posts as post}
      <li>
        <h2>
          <a href={post.path}>
            {post.meta.title}
          </a>
        </h2>
        Published {post.meta.date}
      </li>
    {/each}
  </ul>