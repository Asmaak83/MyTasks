<template>
  <div class="footer">
    <div class="container mt-5">
      <div class="contant text-end d-md-flex flex-md-column-reverse">
        <div class="row ">
          <div class="col-lg-5 col-md-6 conect ">
            <h3
              class="pb-3"
            >
              معلومات التواصل
            </h3>
            <p> tahara@tahara.com.sa:البريد الالكتروني </p>
            <p>
              رقم الهاتف : 56658544455
            </p>
            <p> http//tahara.com.sa/:موقعنا</p>
          </div>
          <div class="col-md-6 col-lg-3 links ">
            <h3>
              روابط سريعة
            </h3>
            <p>
              <a
                class="text-dark text-decoration-none"
                href="#"
              >عن طهارة</a>
            </p>
            <p>
              <a
                class="text-dark text-decoration-none"
                style="font-weight:500"
                href="#"
              >استشارات طبية</a>
            </p>
            <p>
              <a
                class="text-dark text-decoration-none"
                href="#"
              >مقالات</a>
            </p>
            <p>
              <a
                class="text-dark text-decoration-none"
                href="/connect"
              >تواصلي معنا</a>
            </p>
          </div>
          <div class=" col-lg-4 col-md-6  mb-5">
            <img src="../images/Untitled1.png">
            <h3
              class="pt-3 pb-3 "
            >
              احصلي على التطبيق
            </h3>
            <div class="d-grid gap-2 d-md-block mb-5">
              <button
                class="btn btn-light text-light pt-2 pb-2"
                type="button"
              >
                <font-awesome-icon icon="fa-brands fa-apple" />  App Store
              </button>
              <button
                class="btn btn-light text-light  pt-2 pb-2"
                type="button"
              >
                <font-awesome-icon icon="fa-brands fa-google-play" /> Google Play
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-5 fs-6 ">
              <p class="  fw-bold">
                سياسة الخصوصية   <span class="me-3">الأحكام والشروط</span>
              </p>
            </div>
            <div class="col-lg-4 col-md-5">
              <p>
                <span class="dat">© 2022 Tahara </span>جميع الحقوق محفوظة
              </p>
            </div>
           
            <div class="col-lg-4 ">
              <div class="icons">
                <font-awesome-icon
                  icon="fa-brands fa-instagram"
                  class="icon p-2 me-1 m-md-0 rounded-circle"
                />
                <font-awesome-icon
                  icon="fa-brands fa-twitter"
                  class="icon p-2 me-1 m-md-0 rounded-circle"
                />
                <font-awesome-icon
                  icon="fa-brands fa-facebook"
                  class="icon p-2 rounded-circle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:'FooterView',
}
</script>
