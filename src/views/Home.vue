<template>
  <div>
    <AboutView />
    <CalendarView />
    <ReviewVue />
    <ConnectView />
    <FooterView />
  </div>
</template>
<script>
import AboutView from "/src/components/AboutView";
import CalendarView from "/src/components/CalendarView";
import ReviewVue from"/src/components/Review";
import ConnectView from "/src/components/ConnectView.vue";
import FooterView from "/src/components/FooterView";
export default {
    name : 'HomeView' ,
components: {AboutView ,CalendarView,ReviewVue,ConnectView , FooterView,}
}
</script>