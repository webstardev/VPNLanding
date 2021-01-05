<template>
  <div class="bkg">
    <Header />
    <Nuxt />
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
.bkg {
  background: #121314;
}
</style>
