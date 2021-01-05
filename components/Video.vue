<template>
  <div class="container-fluid video">
    <div class="container">
      <div class="row">
        <div class="w-100 text-center">
          <h1 class="video-title">
            Deep State Defender VPN:<br />
            One tap and you are protected!
          </h1>
          <div class="embed-responsive embed-responsive-16by9">
            <video controls autoplay muted>
              <source src="../assets/dsd_promo_1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
/*   name: "video",
  data() {
    return {};
  },
  methods: {},
  beforeMount() {} */
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.video {
  background: #121314;
}

.video-title {
  font-family: Montserrat;
  font-size: 40px;
  font-weight: 600;
  color: #ffffff;
  padding-top: 60px;
  padding-bottom: 40px;
}
</style>
