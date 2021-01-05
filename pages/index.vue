<template>
  <div class="container-fluid no-gutters px-0">
    <section class="banner-section">
      <div class="container vpn-container">
        <div class="row">
          <div class="col-md-6 left-panel">
            <img class="logo" src="../assets/logo.svg" alt="logo" />
            <h3>
              The ultimate combination of security tools to keep you <span>anonymous and encrypted</span>.
            </h3>
            <p>
              You and only you should own your online activity.
            </p>
            <app-buttons wrapperClass="app-button-div"></app-buttons>
          </div>
          <div class="col-md-6 right-panel">
            <img class="img-mobile" src="../assets/two-mobile.png" alt="Mobiles" />
          </div>
        </div>
      </div>
    </section>
    <!-- <Smoking />
    <Features />"
    <Video />
    <Staff />       -->
  </div>
</template>

<script>
import AppButtons from '../components/AppButtons.vue'
export default {
  layout: 'pages',
  components: {
    AppButtons
  }
}
</script>

<style lang="scss" scoped>
  .banner-section {
    width: 100%;
    background: url('../assets/bg-1.png') no-repeat;
    background-position: top center;
    background-size: 100% 100%;
    background-color: rgba(207,218,232, 0.3);
    padding: 57px 0;

    .left-panel {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .logo {
        width: 114px;
        height: 157px;
      }

      h3 {        
        font-style: normal;
        font-weight: 750;
        font-size: 50px;
        line-height: 50px;
        color: #0B032D;
        max-width: 500px;
        margin: 40px 0 0 0;

        span {
          color: #1d5595;
        }
      }

      p {
        margin: 40px 0 0 0;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 35px;
        color: #505050;
      }

      .app-button-div {
        margin: 60px 0 0 0;
      }
    }

    .right-panel {
      .img-mobile {
        width: 100%;
      }
    }      

  }
</style>








