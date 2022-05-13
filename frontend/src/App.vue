<template>
  <div>
    <Header></Header>
    <Ground></Ground>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import Ground from "./components/Ground.vue";
  import Footer from "./components/Footer.vue";
  export default {
    components: { Header, Ground, Footer },
  };
</script>

<style></style>
