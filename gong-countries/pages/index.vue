<template>
  <div>
    <ul class="filter_results flex flex-wrap w-full" v-if="users.length">
      <li v-for="user in users" class="p-4 w-full md:w-1/2 lg:w-1/3">
        <div class="rounded-xl bg-purple p-4">
          <p>{{ user.last_name }}, {{ user.first_name }}</p>
          <p>{{ user.email }}</p>
          <p>{{ user.country }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {

  // sync asyncData({ $axios }) {
  //   const allUsers = await $axios.$get("/api/users.php");
  //   return { allUsers };
  // },
  computed: {
    ...mapGetters(['users'])
  },
  methods: {
    ...mapActions(['setUsers'])
  }
};
</script>

<style lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
// .filter_results {
//   display: flex;
//   flex-wrap: wrap;
//   width: 100vw;
//   padding: 0;
//   justify-content: center;
//   li {
//     list-style: none;
//     width: 100%;
//     height: 200px;
//     border-radius: 20px;
//     background-color: #f5edff;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 5px;
//     @media (min-width: 600px) {
//       width: calc(50% - 20px);
//     }
//     @media (min-width: 1200px) {
//       width: calc(33% - 20px);
//     }
//   }
// }
</style>

  }
}
</style>
