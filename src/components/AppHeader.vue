<template>
  <nav
    class="navbar navbar-expand-lg pt-4 pb-4 sticky-top "
    style="background-color: #e3f2fd;"
  >
    <div
      class="container d-flex flex-row-reverse   "
    >
      <a class=" navbar-brand logo pe-5  ">
        <img src="../images/Untitled1.png">
      </a>
      <button
        class="navbar-toggler border-light text-light fs-4 "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <font-awesome-icon icon="fa-solid fa-bars" />
      </button>
      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse"
      >
        <button
          type="button"
          class="btn text-light  ms-5 ps-2 pe-2 d-none d-lg-block  "
          style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;  "
        >
          حملي التطبيق الان
        </button>
        <ul class="navbar-nav  ms-auto sm-ms-2  d-flex flex-lg-row-reverse pe-5 ">
          <router-link
            to="/"
            class="text-decoration-none"
          >
            <li class="nav-item ms-3">
              <a
                class="nav-link p-lg-3 fw-bold text-center fs-6  "
                aria-current="page"
              >عن طهارة</a>
            </li>
          </router-link>
          <router-link
            to="/"
            class="text-decoration-none"
          >
            <li class="nav-item ms-3">
              <a
                class="nav-link p-lg-3  fw-bold text-center fs-6  "
                aria-current="page"
              >استشارات طبية</a>
            </li>
          </router-link>
          <router-link
            to="/"
            class="text-decoration-none"
          >
            <li class="nav-item ms-3">
              <a
                class="nav-link p-lg-3  text-center fs-6 "
                aria-current="page"
              >مقالات</a>
            </li>
          </router-link>
          <router-link
            to="/connect"
            class="text-decoration-none"
          >
            <li class="nav-item ms-3">
              <a
                class="nav-link p-lg-3  fw-bold text-center"
                aria-current="page"
              >تواصلي معنا</a>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "AppHeader",
};
</script>
<style lang="scss" scoped>
.navbar .navbar-toggler:focus{
  box-shadow:none;
}
   ul li a{
         
        font-weight:700;
    }
</style>
