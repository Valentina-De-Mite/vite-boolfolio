<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      base_url: "http://127.0.0.1:8000",
      projects_api: "/api/projects",
      projects: [],
    };
  },
  methods: {
    getProjects(paramUrl, pageNumber) {
      let url = paramUrl;

      if (pageNumber != null) {
        url += "?page=" + pageNumber;
      }
      console.log(paramUrl);
      console.log(pageNumber);
      axios
        .get(url)
        .then((response) => {
          console.log(response);
          this.projects = response.data.result;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getProjects(this.base_url + this.projects_api, null);
  },
};
</script>

<template>
  <header>
    <div class="navbar navbar-expand bg-violet shadow">
      <div class="container text-light">
        <img class="" src="./assets/logo.png" alt="" srcset="" />
        <div class="col-8 d-flex justify-content-between nav navbar-nav fs-4">
          <div class="d-flex">
            <a class="nav-item nav-link light" href="#">Home</a>
            <a class="nav-item nav-link light" href="#">Project</a>
            <a class="nav-item nav-link light" href="#">Contacts</a>
          </div>

          <div class="align-self-end">
            <a
              class="nav-item nav-link light"
              href="http://127.0.0.1:8000/login"
            >
              <div class="d-flex align-items-center">
                Admin
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-balloon-heart ms-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <main>
    <div class="p-5 mb-4 bg-light rounded-3 shadow mb-4">
      <div class="container-fluid py-3">
        <h1 class="display-5 fw-bold">My Projects</h1>
        <p class="col-md-8 fs-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae modi
          obcaecati unde, molestiae illum architecto.
        </p>
      </div>
    </div>

    <div class="container py-5">
      <section class="projects">
        <div class="row row-cols-1 row-cols-sm-2 row cols-lg-3 g-4">
          <div class="col" v-for="project in projects.data">
            <div class="card p-3">
              <img src="" alt="" />
              <h3>{{ project.title }}</h3>

              <div class="card-body">
                <p>{{ project.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav class="my-5 text-dark" aria-label="Page navigation example ">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="" aria-label="Previous" onclick="">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="">1</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="">3</a>
          </li>
          <li class="page-item">
            <button class="page-link" aria-label="Next" onclick="">
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </main>

  <footer>
    <div class="row bg-violet py-5">
      <div class="container d-flex g-4 light justify-content-evenly">
        <div class="col-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iure
          non neque exercitationem qui vel, obcaecati excepturi necessitatibus,
          ut maxime tempora eos, molestiae earum illum nulla magnam similique
          sunt optio.
        </div>
        <div class="col-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam
          qui veniam eius enim! Pariatur, hic repudiandae cum voluptates enim
          necessitatibus excepturi mollitia corporis sequi praesentium error
          dolore sint vitae?
        </div>
        <div class="col-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo magnam
          eligendi architecto repellat veritatis magni velit dignissimos eius.
          Deserunt amet quasi quaerat consectetur, tempore suscipit mollitia
          quidem provident vel explicabo?
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.light {
  color: white;
}

.bg-violet {
  background-color: rgba(29, 9, 53, 255);
}
</style>
