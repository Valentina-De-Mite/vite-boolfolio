<script>
export default {
  name: "HomeView",
};
</script>

<template>
  <div class="container d-flex justify-content-center py-5">
    <div class="card p-5 rounded shadow">
      <h1 class="my-4">HI, i'm Valentina!!</h1>

      <button
        class="rounded btn w-50 m-auto btn-primary bg-violet"
        type="button"
      >
        <router-link class="nav-link light" to="/projects"
          >Discover More!</router-link
        >
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-violet {
  background-color: rgba(29, 9, 53, 255) !important;
}
</style>
