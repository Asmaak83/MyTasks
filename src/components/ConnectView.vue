<template>
  <div
    class="connect" 
    style="background-color: #3B3791;
"
  >
    <div class="container pb-5">
      <div class="row">
        <div class="col-md-6 col-lg-7 pt-3">
          <div class="form pt-4 bg-light ps-3 pe-3 rounded-2">
            <div class="row">
              <div class="col">
                <label
                  for="exampleFormControlInput1"
                  class="form-label text-end"
                >البريد الالكتروني</label>
                <input
                  id="exampleFormControlInput1"
                  type="email"
                  class="form-control text-end"
                  placeholder="example@gmail.com"
                >
              </div>
              <div class="col">
                <label
                  class="form-label text-end"
                >الاسم </label>
                <input
                  type="text"
                  class="form-control text-end"
                  placeholder="اسم المستخدم"
                  aria-label="First name"
                >
              </div>
              <div class="mb-3">
                <label
                  for="formGroupExampleInput"
                  class="form-label"
                >رقم التلفون</label>
                <input
                  id="formGroupExampleInput"
                  type="text "
                  class="form-control text-end"
                  placeholder=" 985566889899  +966"
                >
              </div>
              <div class=" mb-3">
                <label
                  for="formGroupExampleInput"
                  class="form-label text-end"
                >السبب </label>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Text input with segmented dropdown button"
                >
              </div>
              <div class="mb-3">
                <label
                  for="formGroupExampleInput"
                  class="form-label"
                >الموضوع </label>
                <input
                  id="formGroupExampleInput"
                  type="text"
                  class="form-control text-end"
                  placeholder="عنوان الموضوع"
                >
              </div>
              <div class="form-floating">
                <label
                  class="form-label"
                >الرسالة</label>
                <textarea
                  id="floatingTextarea2"
                  class="form-control"
                  placeholder="اكتب رسالتك..."
                  style="height: 120px"
                />
              
                <input
                  class="btn m-4 text-light d-flex justify-content-end"
                  style="background-color: #3A3791;"
                  type="submit"
                  value="ارسال"
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-5 pt-5">
          <div class="text text-end text-light pt-5">
            <h1 class="fw-bold">
              نحب أن نسمع منك
            </h1>
            <p>اذا كان لديك أي استفسارات تواصلي معنا</p>
            <p>
              :البريد الالكترونى
            </p>
            <p>
              tahara@tahara.com.sa
            </p>
            <p>
              :رقم الهاتف
            </p>
            <p>
              56658544455
            </p>
            <p>
              :موقعنا
            </p>
            <p>
              http//tahara.com.sa/
            </p>
            <div
              class="icons"
            >
              <font-awesome-icon
                icon="fa-brands fa-instagram"
                class="p-2"
              />
              <font-awesome-icon
                icon="fa-brands fa-twitter"
                class="p-2"
              />
              <font-awesome-icon
                icon="fa-brands fa-facebook"
                class="p-2 bg-opacity-25 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 <script>
    export default {
    name:"ReviewVue",
    }
  </script>