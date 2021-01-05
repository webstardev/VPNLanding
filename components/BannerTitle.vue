<template>
  <div>
    <div class="banner-title bg-primary f-Montserrat">
      <div class="container text-center">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner-title",
  props: ["title", "description"]
};
</script>


<style lang="scss" scoped>
.banner-title {
  padding-top: 50px;
  padding-bottom: 76px;
  color: white;
  display: flex;
  font-weight: 300;
  h1 {
    margin-top: 20px;
    margin-bottom: 30px;
    font-size: 56px;
    font-weight: 600;
  }
  p {
    margin-bottom: 0px;
    font-size: 20px;
  }

  @media (max-width: 991px) {
    padding-top: 30px;
    padding-bottom: 36px;
    h1 {
      font-size: 36px;
    }
  }
}
</style>
