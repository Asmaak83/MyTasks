<template>
  <div
    class="connect"
  >
    <div class="container pb-5">
      <div class="row">
        <div class="col-md-6 col-lg-7 pt-3">
          <form>
            <div class="form-group pt-4 bg-light ps-3 pe-3 rounded-2">
              <div class="row">
                <div class="col">
                  <label
                    for="exampleInputName"
                  >البريد الالكتروني</label>
                  <input
                    id="exampleFormControlInput1"
                    type="email"
                    class="form-control"
                    placeholder="example@gmail.com"
                    dir="rtl" 
                  >
                </div>
                <div class="col">
                  <label
                    class="text-end"
                  >الاسم </label>
                  <input
                    type="text"
                    class="form-control "
                    placeholder="اسم المستخدم"
                    dir="rtl"
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
                    dir="rtl"
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
                    style=""
                    type="submit"
                    value="ارسال"
                  >
                </div>
              </div>
            </div>
          </form>
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
  <style lang="scss">

  </style>