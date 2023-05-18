<template>
  <div class="filter_results">
    <ul v-if="filtered.length">
      <li v-for="user in filtered">
        {{ user.first_name }} {{ user.last_name }}, {{ user.country }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const filtered = await $axios.$get("/api/records.php");
    return { filtered };
  },
};
</script>

<style lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.filter_results {
  li {
    list-style: none;
  }
}
</style>
