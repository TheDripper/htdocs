<template>
  <div class="flex flex-col items-center">
    <div id="filter" class="w-1/5 mt-4 p-2 pr-4 border-2 border-dark rounded-full"  @click="toggleFilter"><p>All Locations</p></div>
      <div class="relative w-1/5 h-10">
      <ul class="w-full absolute z-10 left-0 bg-white mt-4 p-2 pr-4 border-2 border-dark rounded-xl" :class="{closed: isClosed}">
        <li><input id="all" @change="filterUsers" class="mr-2 country" type="checkbox" value="all">All Locations</input></li>
        <li><input @change="filterUsers" class="mr-2 country" type="checkbox" value="United States">United States</input></li>
        <li><input @change="filterUsers" class="mr-2 country" type="checkbox" value="Japan">Japan</input></li>
        <li><input @change="filterUsers" class="mr-2 country" type="checkbox" value="France">France</input></li>
        <li><input @change="filterUsers" class="mr-2 country" type="checkbox" value="Germany">Germany</input></li>
        <li><input @change="filterUsers" class="mr-2 country" type="checkbox" value="Israel">Israel</input></li>
      </ul>
      </div>
    <ul class="filter_results flex flex-wrap w-full" v-if="users.length">
      <li v-for="user in this.users" class="p-4 w-full md:w-1/2 lg:w-1/3">
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
import { mapActions, mapGetters } from "vuex";
import $ from "jquery";
export default {
  // sync asyncData({ $axios }) {
  //   const allUsers = await $axios.$get("/api/users.php");
  //   return { allUsers };
  // },
  data() {
    return {
      isClosed: true,
    };
  },
  computed: {
    ...mapGetters(["users"]),
  },
  methods: {
    async filterUsers(e) {
      let countries = [];
      if (e.target.id == "all") {
        $(".country").each(function (e) {
          this.checked = true;
        });
      }
      $(".country").each(function (e) {
        if (this.checked) {
          countries.push(this.value);
        }
      });
      // let filtered = await this.$axios.$get("/api/users.php", {
      //   params: { countries: countries },
      // });
      this.updateUsers(countries);
    },
    toggleFilter() {
      this.isClosed = !this.isClosed;
    },
    ...mapActions(["updateUsers"]),
  },
};
</script>

<style lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
#filter {
}
.closed {
  @apply hidden;
}
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
