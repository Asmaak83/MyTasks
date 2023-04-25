<template>
  <div
    id="changColor"
    class="about"
  >
    <div
      class="container  p-5"
    >
      <div class="row">
        <div class="col col-sm-5">
          <div
            class="imgs img-responsive  w-md-50  "
          >
            <img
              class="one img-fluid text-center img-thumbnail "
              src="../images/photo1.png"
            >
            <img
              class="two d-none text-center bg-overlay img-responsive img-thumbnail "
              src="../images/photo2.png"
            >
            <img
              class="three d-none text-center bg-opacity-75 img-responsive img-thumbnail "
              src="../images/photo3.png"
            >
          </div>
        </div>
        <div class=" col col-sm-7  m-auto pe-5 pb-3 text-end ">
          <p
            class="text-light pb-2 fw-bold fs-1 md-fs-5 fs-sm-6"
          >
            تعرفي على مراحل دورتك بالتفصيل
          </p>
          <div
            class="box  active pe-auto text-align-end bg-light p-2 mb-4 "
             
            role="button"
            data-cont=".one"
            data-cont2="#8BDED8"
            data-color="#8BDED8"
          >
            <p class="fw-bold fs-5 fs-sm-6">
              مرحلة ما قبل الاباضة
            </p>
            <p>تتبع هذه المرحلة يشجعك على القيام بفعاليات مختلفة مثل الرياضة</p>
          </div>
          <div
            class="box text-align-end pe-auto bg-light p-2 mb-4 "
            style="opacity:0.75"
            role="button"
            data-cont=".two"
            data-cont2="#5B56D5D9"
            data-color=" #3A3791"
          >
            <h5
              class="
            fw-bold"
            >
              مرحلة الاباضة
            </h5>
            <p class="fs-6">
              تتبع هذه المرحلة مهم عند التخطيط للحمل
            </p>
          </div>
          <div
            class="box text-align-end pe-auto  bg-light p-2  mb-4 "
            style="opacity:0.75"
            role="button"
            data-cont=".three"
            data-cont2="#AD4480BF"
            data-color="#AD4480BF"
          >
            <h5
              class="
            fw-bold"
            >
              مرحلة الدورة / الحيض
            </h5>
            <p>تتبع هذه المرحلة يساعدك على تخطيط شهرك لتكوني مستعدة</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "AboutView",
 
    mounted(){  
      //changebackground(){
      let boxs = document.querySelectorAll(".box");
      let boxsArray = Array.from(boxs);
      //console.log(boxsArray)
      let imges = document.querySelectorAll(".imgs > img");
      let imgsArray = Array.from(imges)
      let changColor= document.querySelectorAll(".about")
      console.log(changColor);
      let color = document.getElementById("changColor").style.backgroundColor;
      console.log(color);
       let backg = document.getElementById("changColor");
      console.log(backg);
      //console.log(imgsArray)
      //console.log(imgsArray)
        boxsArray.forEach((ele) => {
          //console.log(ele)
          ele.addEventListener("click", function (e) {
              //console.log(ele);
            
              boxsArray.forEach((ele) => {
                ele.classList.remove("active");
                ele.style.opacity="0.75"
                 
              });
              e.currentTarget.classList.add("active");
              imgsArray.forEach((img) => {
                img.style.display = "none";
              });
             //console.log(e.currentTarget.dataset.cont);

             e.currentTarget.style.opacity="1";

             backg.style.background=e.currentTarget.dataset.cont2;
             document.querySelector(e.currentTarget.dataset.cont).style.background=e.currentTarget.dataset.color;
            document.querySelector(e.currentTarget.dataset.cont).classList.remove('d-none');
            document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
            

        });
      });
  }

}

</script>
