<template>
  <div
    class=""
    style="background-color: #CFFAF8;"
  >
    <div class="containar  container-md-fluid">
      <div class="row">
        <div class=" col">
          <img
            class=" img-fluid"
            src="../images/imagecland1.png"
          >
        </div>
        <div class=" col">
          <div class="box  ">
            <img
              class="pt-4 ps-0 d-none d-lg-block"
              src="../images/imgcland2.png"
            >
            <div
              class="text m-auto text-end me-5 pe-5 pt-5  "
              style="color:#3A3791;"
            >
              <h2 class=" pb-3 fw-bold">
                التقويم
              </h2>
              <p>
                شاهدي جميع بياناتك المدخلة في طريقة واضحة
                من خلال تقارير التحليل المتكررة والتقويم, ستتمكني من 
                استخلاص النتائج بسرعة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "CalendarView",
}
</script>
<style lang="scss" scoped>
.container{
    .box p{
        color:#3A3791;

    }
}
</style>
