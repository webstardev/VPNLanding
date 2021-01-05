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
            <app-buttons :wrapperClass="`app-button-div`"></app-buttons>
          </div>
          <div class="col-md-6 right-panel">
            <img class="img-mobile" src="../assets/two-mobile.png" alt="Mobiles" />
          </div>
        </div>
      </div>
    </section>

    <section class="keep-section">
      <div class="container vpn-container">
        <div class="keep-div">
          <img src="../assets/frame-left.png" alt="quote" />
          <h3>Keep your data happy<br/>with Datacappy!</h3>
          <img class="right-quote" src="../assets/frame-right.png" alt="quote" />
        </div>
      </div>
    </section>

    <section class="section-three">
      <div class="container vpn-container">
        <div class="row">
          <div class="col-md-6">
            <img class="panel-img" src="../assets/mobile-map.png" alt="Mobile Map" />
          </div>
          <div class="col-md-6">
            <h3>The Datacappy VPN</h3>
            <ul class="list-ul">
              <li>
                <div class="icon-div">
                  <img src="../assets/unlock.png" alt="unlock" />
                </div>
                With no account required, you can download and connect in seconds!
              </li>
              <li>
                <div class="icon-div">
                  <img src="../assets/close.png" alt="close" />
                </div>
                Datacappy does not have access to logs, history or browser activity. We don’t even have your email address (but if you reach out to us, our team will happily respond!).
              </li>
              <li>
                <div class="icon-div">
                  <img src="../assets/location.png" alt="location" />
                </div>
                Wireguard ® protocol adds the speediest VPN connection which means no frustrating lag times. Want to switch from Germany to London? Tap and go. It’s a lightning fast trip.
              </li>
              <li>
                <div class="icon-div">
                  <img src="../assets/present.png" alt="present" />
                </div>
                You get 100MB of FREE VPN data to use! We also give you access to the same server locations as the Premium users.
              </li>
            </ul>
            <app-buttons :wrapperClass="`app-buttons-wrapper`"></app-buttons>
          </div>
        </div>
      </div>
    </section>

    <section class="section-four">
      <div class="container vpn-container">
        <div class="row">
          <div class="col-md-6">
            <h3>The Datacappy Browser</h3>
            <ul class="list-ul">
              <li>
                <div class="icon-div">
                  <img src="../assets/icon.png" alt="icon" />
                </div>
                Experience effortless privacy! Launch the Datacappy Browser from inside the Datacappy VPN with one tap.
              </li>
              <li>
                <div class="icon-div">
                  <img src="../assets/cancel.png" alt="cancel" />
                </div>
                For added security, activate more privacy options from within the Datacappy Browser such as private browsing, block ads & trackers, block images and block third party cookies.
              </li>
              <li>
                <div class="icon-div">
                  <img src="../assets/check-square.png" alt="check" />
                </div>
                Choose your search engine, display language and customize your colors.
              </li>
              <li>
                <div class="icon-div">
                  <img src="../assets/camera.png" alt="camera" />
                </div>
                Datacappy keeps a growing list of ad providers so we can stay on the lookout for data trackers trying to profit off your online behavior.
              </li>
            </ul>
            <app-buttons :wrapperClass="`app-buttons-wrapper`"></app-buttons>
          </div>
          <div class="col-md-6">
            <img src="../assets/mobile-duck.png" alt="Mobile duck"/>
          </div>
        </div>
      </div>
    </section>

    <section class="section-five">
      <div class="container vpn-container">
        <h3>Go Premium and Get:</h3>        
        <div class="content">
          <div class="description-div">
            <div class="check-line">
              <img src="../assets/check.png" alt="green-check" />
              Unlimited data
            </div>
            <div class="check-line">
              <img src="../assets/check.png" alt="green-check" />
              Early release locations
            </div>
            <div class="check-line">
              <img src="../assets/check.png" alt="green-check" />
              On-Demand coverage: Wi-Fi, cellular or both. You choose!
            </div>
            <app-buttons :wrapperClass="`app-buttons-wrapper`"></app-buttons>
          </div>                  
          <div class="logo-div">
            <img src="../assets/logo.svg" alt="logo" />
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
    padding: 57px 0 300px;

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

  .keep-section {
    margin-top: -150px;
    .keep-div {
      width: 100%;
      max-width: 1220px;
      height: 300px;
      display: flex;
      justify-content: center;
      padding: 92px 0;
      background: url('../assets/keep-bg.png') no-repeat;
      background-size: 100% 100%;
      background-position: center center;
      margin: 0 auto;

      h3 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 45px;
        line-height: 130%;        
        text-align: center;
        color: #FFFFFF;
        margin: 0;
      }
      img {
        width: 82px;
        height: 55px;
        margin: 0 20px;
        &.right-quote {
          align-self: flex-end;
        }
      }
    }
  }

  .section-three {
    padding-top: 110px;

    .panel-img {
      width: 100%;
    }

    h3 {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 47px;      
      display: flex;
      align-items: center;
      color: #0B032D;
      margin: 0 0 68px 0;
    }

    .app-buttons-wrapper {
      margin: 22px 0 0 105px;
    }
  }

  .section-four {
    padding: 111px 0 120px;

    h3 {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 47px;            
      display: flex;
      align-items: center;
      color: #0B032D;
      margin: 0 0 76px 0;
    }

    .app-buttons-wrapper {
      margin: 22px 0 0 105px;
    }
  }

  .section-five {
    height: 485px;
    background-position: top center;
    background-size: 100% 100%;
    background: url('../assets/bg_small.png') no-repeat;
    padding: 85px 0;

    h3 {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 55px;
      line-height: 50px;
      color: #98CA4E;
      margin: 0 0 43px 0;
    }
    .content {
      display: flex;

      .description-div {
        flex: 1 1 100%;
        img {
          width: 30px;
          height: 30px;
          margin-right: 18px;
        }
        .check-line {
          display: flex;
          font-family: Montserrat;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 40px;          
          color: #DAE5F1;
        }
      }

      .logo-div {        
        flex: 0 0 141px;
        img {
          width: 141px;
          height: 195px;
        }
      }
    }    
    .app-buttons-wrapper {
      margin: 28px 0 0 0;
    }
  }

  .list-ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;

    li {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 150%;
      display: flex;
      align-items: center;
      color: #505050;
      margin: 0 0 58px 0;
      display: flex;
      align-items: flex-start;

      .icon-div {
        flex: 0 0 65px;
        width: 65px;
        height: 65px;
        background: #CFDAE8;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;    
        margin: 0 40px 0 0;
      }
    }    
  }
  
</style>








