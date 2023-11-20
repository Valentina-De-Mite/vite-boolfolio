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
  <header>
    <nav class="navbar navbar-expand bg-dark d-flex shadow">
      <div class="container text-light">
        <div class="nav navbar-nav justify-content-center fs-4">
          <a class="nav-item nav-link" href="#">Home</a>
          <a class="nav-item nav-link" href="#">Project</a>
          <a class="nav-item nav-link" href="#">Contacts</a>
        </div>
      </div>
    </nav>
  </header>

  <main>
    <div class="p-5 mb-4 bg-light rounded-3 shadow mb-4">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">My Projects</h1>
        <p class="col-md-8 fs-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae modi
          obcaecati unde, molestiae illum architecto.
        </p>
      </div>
    </div>

    <div class="container">
      <section class:projects>
        <div class="row row-cols-1 row-cols-sm-2 row cols-lg-3 g-4">
          <div class="col" v-for="project in projects.data">
            <div class="card">
              <img src="" alt="" />
              <h3>{{ project.title }}</h3>

              <div class="card-body"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
a {
  color: white;
}
</style>
