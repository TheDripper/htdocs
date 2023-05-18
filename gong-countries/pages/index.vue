<template>
  <div>
    <ul class="filter_results" v-if="filtered.length">
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
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  padding: 0;
  li {
    list-style: none;
    width: calc(50% - 20px);
    height: 200px;
    border-radius: 20px;
    background-color: #f5edff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
  }
}
</style>
