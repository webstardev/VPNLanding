<template>
  <div class="container-fluid pages-layout px-0">
    <Header />
    <Nuxt />
    <Footer />
    <client-only><Cookie /></client-only>    
  </div>
</template>

<script>
import Cookie from "@/components/Cookie.vue";

export default {
  components: {
    Cookie
  }
};
</script>

<style>


</style>