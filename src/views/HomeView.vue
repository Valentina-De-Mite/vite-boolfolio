<script>
export default {
  name: "HomeView",
};
</script>

<template>
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
</template>

<style lang="scss" scoped></style>
