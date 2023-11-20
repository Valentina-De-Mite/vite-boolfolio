<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      projects_api: "http://127.0.0.1:8000/api/projects",
      projects: [],
    };
  },

  mounted() {
    axios
      .get(this.projects_api)
      .then((response) => {
        console.log(response);
        this.projects = response.data.result;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<template>
  <div class="container">
    <h1>All Projects:</h1>

    <section class:projects>
      <div class="row">
        <div class="col" v-for="project in projects.data">
          <div class="card">
            <h3>{{ project.title }}</h3>

            <div class="card-body"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
