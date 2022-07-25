<script lang="ts">
  import Xing from './Xing.svelte';
  import LinkedIn from './LinkedIn.svelte';
  import Github from './Github.svelte';
</script>

<footer>
  <ul>
    <li><a href="https://github.com/floriankuc/" target="_blank"><Github/></a></li>
    <li><a href="https://www.linkedin.com/in/floriankuc/" target="_blank"><LinkedIn/></a></li>
    <li><a href="https://www.xing.com/profile/Florian_Kuc/" target="_blank"><Xing/></a></li>
  </ul>
</footer>

<style lang="scss">
  footer {
    position: sticky;
    bottom: 10px;
    display: inline-block;
    padding-left: 20px;

    ul {
      gap:8px;
    }
  }
</style>