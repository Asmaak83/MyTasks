<template>
  <div class="footer">
    <div class="container mt-5">
      <div class="contant text-end d-md-flex flex-md-column-reverse">
        <div class="row ">
          <div class="col-lg-5 col-md-6 connect ">
            <h3
              class="pb-3"
              style="color: rgba(6, 113, 106, 0.75)"
            >
              معلومات التواصل
            </h3>
            <p> tahara@tahara.com.sa:البريد الالكتروني </p>
            <p>رقم الهاتف : 56658544455</p>
            <p> http//tahara.com.sa/:موقعنا</p>
            <p class="m-5 pt-4 pe-2 fw-bold">
              سياسة الخصوصية   <span class="me-3">الأحكام والشروط</span>
            </p>
          </div>
        
          <div class="col-md-6 col-lg-3 links ">
            <h3 style="color: rgba(6, 113, 106, 0.75)">
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
            <p class="mt-5">
              <span style="color: rgba(6, 113, 106, 0.75)">© 2022 Tahara </span>جميع الحقوق محفوظة
            </p>
          </div>
          <div class=" col-lg-4 col-md-6  mb-5">
            <img src="../images/Untitled1.png">
            <h4
              class="pt-3 pb-3 "
              style="color: rgba(6, 113, 106, 0.75);"
            >
              احصلي على التطبيق
            </h4>
            <div class="d-grid gap-2 d-md-block mb-5">
              <button
                class="btn btn-light text-light pt-2 pb-2"
                type="button"
              >
                <font-awesome-icon icon="fa-brands fa-apple" />  App Store
              </button>
              <button
                class="btn btn-light text-light me-2 pt-2 pb-2"
                type="button"
              >
                <font-awesome-icon icon="fa-brands fa-google-play" /> Google Play
              </button>
            </div>
            <div class=" pt-5">
              <font-awesome-icon
                icon="fa-brands fa-instagram"
                class="p-2 me-3 ms-3 rounded-circle"
                style="color:#06716A; background-color:rgba(6, 113, 106, 0.1)"
              />
              <font-awesome-icon
                icon="fa-brands fa-twitter"
                class="p-2 me-3  rounded-circle"
                style="color:#06716A; background-color:rgba(6, 113, 106, 0.1)"
              />
              <font-awesome-icon
                icon="fa-brands fa-facebook"
                class="p-2   rounded-circle"
                style="color:#06716A; background-color:rgba(6, 113, 106, 0.1)"
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
    name:'FooterView',
}
</script>