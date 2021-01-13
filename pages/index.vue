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
          <div class="col-md-6 img-div">
            <img class="panel-img" src="../assets/mobile-map.png" alt="Mobile Map" />
          </div>
          <div class="col-md-6 d-flex flex-column">
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
          <div class="col-md-6 img-div mobile mb-4" >
            <img src="../assets/mobile-duck.png" alt="Mobile duck"/>
          </div>

          <div class="col-md-6 d-flex flex-column">
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
          <div class="col-md-6 img-div desktop" >
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
    
    <section class="section-six">
      <div class="container vpn-container">
        <h3 class="text-center">The Datacappy VPN & Browser</h3>
        <h6 class="text-center">Datacappy VPN: One tap and you are protected!</h6>
        <div class="embed-responsive embed-responsive-16by9">
          <video controls autoplay muted>
            <source src="../assets/dsd_promo_1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>

    <section class="section-seven">
      <div class="container vpn-container">
        <h3>Here’s what our customers say about the Datacappy VPN & Browser!</h3>
        <div class="row">
          <div class="col-md-6">
            <div class="feedback-card">
              <div class="review-div">
                <img class="avatar" src="../assets/staff-face1.png" alt='avatar' />
                <div class="name-div">
                  Jeremie
                  <img src="../assets/star-5.png" alt="star" />
                </div>
              </div>
              <div class="description">
                “The Datacappy VPN is so easy to use! I downloaded it and was connected in seconds. I love reading articles without all the ads.”
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="feedback-card" style="margin-top: 40px">
              <div class="review-div">
                <img class="avatar" src="../assets/staff-face2.png" alt='avatar' />
                <div class="name-div">
                  Angelica
                  <img src="../assets/star-5.png" alt="star" />
                </div>
              </div>
              <div class="description">
                “Protecting my privacy is more important than ever. With the VPN/Browser combo, I am loving the security and the speed.”
              </div>
            </div>
          </div>


          <div class="col-md-6">
            <div class="feedback-card">
              <div class="review-div">
                <img class="avatar" src="../assets/staff-face3.png" alt='avatar' />
                <div class="name-div">
                  Jonathan
                  <img src="../assets/star-5.png" alt="star" />
                </div>
              </div>
              <div class="description">
                “Not having to set up an account was awesome. I was connected to the VPN and using the browser in one minute. It’s super fast!”
              </div>
            </div>
          </div>


          <div class="col-md-6">
            <div class="feedback-card" style="margin-top: 40px">
              <div class="review-div">
                <img class="avatar" src="../assets/staff-face4.png" alt='avatar' />
                <div class="name-div">
                  Paolo
                  <img src="../assets/star-5.png" alt="star" />
                </div>
              </div>
              <div class="description">
                "I have tried a lot of other VPNs and this is the first one I really like. It's clean, easy-to-use interface is great and the integrated, private browser is a really cool feature I have been using a lot."
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="section-eight">
      <div class="container vpn-container">
        <h3>Choose a plan. We keep it simple.</h3>
        <div class="plan-div">

          <div class="plan-card">
            <h6>Monthly Subscription</h6>
            <h3>$12.99</h3>
            <p class="price">$20 Save $7 Today</p>
            <b-button class="btn-plan">TRY NOW</b-button>
            <p class="description">
              Lorem ipsum dolor amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt magna aliqua.
            </p>
          </div>

          <div class="popular-card">
            <p class="card-kind">MOST POPULAR</p>
            <div class="plan-card">
              <h6>Yearly Subscription</h6>
              <h3>$129</h3>
              <p class="price">$200 Save $70 Today</p>
              <b-button class="btn-plan">go premium</b-button>
              <p class="description">
                Lorem ipsum dolor amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt magna aliqua.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="section-fag">
      <div class="container vpn-container">
        <h3>FAQ</h3>
        <div class="accordion" role="tablist">
          <b-card no-body class="faq-card">
            <b-card-header header-tag="header" role="tab">
              <b-button block v-b-toggle.accordion-1 class="btn-faq-collapse">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit?
                <img src="../assets/plus-icon.png" alt="plus" />
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="faq-card">
            <b-card-header header-tag="header" role="tab">
              <b-button block v-b-toggle.accordion-2 class="btn-faq-collapse">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit2?
                <img src="../assets/plus-icon.png" alt="plus" />
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>


          <b-card no-body class="faq-card">
            <b-card-header header-tag="header" role="tab">
              <b-button block v-b-toggle.accordion-3 class="btn-faq-collapse">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit3?
                <img src="../assets/plus-icon.png" alt="plus" />
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

        </div>
      </div>
    </section>
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

  @media screen and (max-width: 479px) {
    h3 {
      font-size: 28px !important;
    }
  }
  .banner-section {
    width: 100%;
    background: url('../assets/bg-1.png') no-repeat;
    background-position: top center;
    background-size: 100% 100%;
    background-color: rgba(207,218,232, 0.3);
    padding: 57px 0 300px;

    @media screen and (max-width: 1023px) {
      padding-bottom: 160px;
    }

    @media screen and (max-width: 767px) {
      padding: 30px 0 160px;
    }

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
        font-family: 'Montserrat';

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

      @media screen and (max-width: 767px) {
        align-items: center;

        .logo {
          display: none;
        }
        h3 {
          font-size: 32px;
          line-height: 32px;
          text-align: center;
        }
        p {
          margin-top: 20px;
          text-align: center;
          font-size: 20px;
          line-height: 20px;
        }
      }
    }

    .right-panel {
      display: flex;  
      align-items: center;      

      @media screen and (max-width: 767px) {        
        display: none;        
      }
      .img-mobile {
        width: 100%;
      }
    }      

  }

  .keep-section {
    margin-top: -150px;

    @media screen and (max-width: 1023px) {
      margin-top: -80px;
    }

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

    @media screen and (max-width: 1023px) {
      .keep-div {
        height: 160px;
        padding: 40px 0;
        h3 {
          font-size: 32px;
        }

        img {
          width: 50px;
          height: 32px;
        }
      }
    }

    @media screen and (max-width: 767px) {
      .keep-div {
        img {
          display: none;
        }
      }
    }

    @media screen and (max-width: 479px) {
      .keep-div {
        height: 100px;
        padding: 0;
        display: flex;
        align-items: center;
        h3 {
          font-size: 20px !important;
        }
      }      
    }
  }

  .section-three {
    padding-top: 110px;

    @media screen and (max-width: 1279px) {
      padding-top: 40px;
    }

    @media screen and (max-width: 767px) {
      padding-top: 0;
    }

    .panel-img {
      width: 100%;
    }

    h3 {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 47px;            
      align-items: center;
      color: #0B032D;
      margin: 0 0 68px 0;      

      @media screen and (max-width: 1279px) {
        font-size: 32px;
        margin-bottom: 39px;
      }

      @media screen and (max-width: 767px) {
        text-align: center;
      }
    }

    .img-div {
      img {
        width: 100%;
      }

      @media screen and (max-width: 767px) {
        padding-bottom: 40px;
      }
    }

    .app-buttons-wrapper {
      margin: 22px 0 0 105px;

      @media screen and (max-width: 1279px) {
        margin: 22px 0 0 57px;
      }

      @media screen and (max-width: 767px) {
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: center;
      }
    }
  }

  .section-four {
    padding: 111px 0 120px;

    @media screen and (max-width: 1279px) {
      padding: 55px 0 60px;
    }    

    h3 {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 47px;                        
      color: #0B032D;
      margin: 0 0 76px 0;

      @media screen and (max-width: 1279px) {
        font-size: 32px;
        margin-bottom: 38px;
      }

      @media screen and (max-width: 1279px) {
        text-align: center;
      }

    }

    .img-div {
      img {
        width: 100%;
      }

      &.desktop {
        display: block;
      }

      &.mobile {
        display: none;
      }

      @media screen and (max-width: 767px) {
        &.desktop {
          display: none;
        }
        &.mobile {
          display: block;
        }
      } 
    }

    .app-buttons-wrapper {
      margin: 22px 0 0 105px;

      @media screen and (max-width: 1279px) {
        margin: 22px 0 0 57px;
      }

      @media screen and (max-width: 767px) {
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: center;
      }
    }
  }

  .section-five {
    height: 485px;
    background-position: top center;
    background-size: 100% 100%;
    background: url('../assets/bg_small.png') no-repeat;
    padding: 85px 0;

    @media screen and (max-width: 1279px) {
      padding: 40px 0;
      height: auto;
    }

    h3 {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 55px;
      line-height: 50px;
      color: #98CA4E;
      margin: 0 0 43px 0;

      @media screen and (max-width: 1279px) { 
        font-size: 32px;
        line-height: 32px;
        margin-bottom: 20px;
      }

      @media screen and (max-width: 1279px) {
        text-align: center;
      }
    }
    .content {
      display: flex;

      .description-div {
        flex: 1 1 100%;
                
        img {
          width: 30px;
          height: 30px;
          margin-right: 18px;

          @media screen and (max-width: 1279px) {
            width: 20px;
            height: 20px;
            margin-right: 12px;            
          }
        }
        .check-line {
          display: flex;
          font-family: Montserrat;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 40px;          
          color: #DAE5F1;
          @media screen and (max-width: 1279px) {
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 20px;
          }

          @media screen and (max-width: 479px) {
            font-size: 18px;
          }
        }
      }

      .logo-div {        
        flex: 0 0 141px;

        @media screen and (max-width: 1023px) {
          display: none;
        }

        img {
          width: 141px;
          height: 195px;
        }
      }
    }    
    .app-buttons-wrapper {
      margin: 28px 0 0 0;

      @media screen and (max-width: 767px) {
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: center;
      }
    }
  }

  .list-ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;

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

      @media screen and (max-width: 1279px) {
        margin-bottom: 29px;
        font-size: 16px;
        .icon-div {
          flex: 0 0 37px;          
          width: 37px;
          height: 37px;
          border-radius: 8px;
          margin: 0 20px 0 0;
          img {
            width: 60%;
          }
        }
      }

    }    
  }

  .section-six {
    background: rgba(207,218,232,0.3);
    padding: 112px 0 120px;

    @media screen and (max-width: 1279px) {
      padding: 56px 0 60px;
    }

    h3 {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 47px;                  
      text-align: center;
      color: #0B032D;
      margin: 0 0 22px 0;

      @media screen and (max-width: 1279px) {
        font-size: 32px;
      }
    }
    h6 {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 35px;      
      text-align: center;
      color: #0B032D;
      margin: 0;

      @media screen and (max-width: 1279px) {
        font-size: 20px;
      }
    }
    video {
      margin-top: 80px;

      @media screen and (max-width: 1279px) {
        margin-top: 40px;
      }
    }
  }
  
  .section-seven {
    background: url('../assets/bg-pane1.png') no-repeat center center;  
    background-size: auto 80%;  
    padding: 96px 0;

    @media screen and (max-width: 1279px) {
      padding: 40px 0;
    }

    h3 {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 47px;
      line-height: 65px;
      text-align: center;
      color: #0B032D;
      margin: 0 auto 80px auto;
      max-width: 600px;

      @media screen and (max-width: 1279px) {
        font-size: 32px;
        line-height: 40px;
        margin-bottom: 40px;
      }
    }

    .feedback-card {
      background: #FAFAFB;
      box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.07);
      border-radius: 40px;
      padding: 56px 60px 65px;

      @media screen and (max-width: 1279px) {
        padding: 28px 30px 37px;
      }

      @media screen and (max-width: 767px) {
        margin: 0 0 30px 0 !important;
      }

      .review-div {
        display: flex;
        .avatar {
          flex: 0 0 75px;
          width: 75px;
          height: 75px;
          border-radius: 37.5px;
          margin: 0 28px 0 0;          
        }
        .name-div {
          font-family: Montserrat;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 40px;
          color: #0B032D;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;

          img {
            margin: 0;
          }
        }
      }

      .description {
        margin: 38px 0 0 0;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 30px;
        color: #505050;

        @media screen and (max-width: 1279px) {
          margin-top: 20px;
        }
      }
      
    }
  }

  .section-eight {
    padding: 111px 0;
    background-color: rgba(207,218,232, 0.3);
    background-image: url('../assets/bg-pane2.png');
    background-repeat: no-repeat;
    background-position: center center;

    @media screen and (max-width: 1279px) {
      padding: 40px 0;
    }

    h3 {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 47px;      
      text-align: center;
      color: #0B032D;
      @media screen and (max-width: 1279px) {
        font-size: 32px;        
      }
    }
    .plan-div {
      display: flex;
      align-items: flex-end;      
      margin: 40px 0 0 0;
      justify-content: center;

      @media screen and (max-width: 767px) {
        flex-direction: column;
        align-items: center;
      }

      .popular-card {
        background: #2C5A90;
        border-radius: 35px;
        padding: 5px;
        margin: 40px 40px 0;

        @media screen and (max-width: 767px) {
          margin-left: 0;
          margin-right: 0;
        }

        .card-kind {
          font-family: Montserrat;
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 120%;
          text-align: center;
          letter-spacing: 0.3px;
          text-transform: uppercase;
          color: #FFFFFF;
          margin: 13px 0 18px;
        }
      }

      .plan-card {
        width: 380px;        
        background-color: #FFFFFF;
        border-radius: 30px;
        padding: 56px 50px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url('../assets/bg-small-1.png');
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: 15px;        
        background-size: 80% auto;

        @media screen and (max-width: 1279px) {
          padding: 28px 25px;
        }

        @media screen and (max-width: 767px) {
          width: 100%;
          max-width: 380px;
        }

        h6 {
          font-family: Montserrat;
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 120%;          
          text-align: center;
          color: #0B032D;
          margin: 0;

          @media screen and (max-width: 1279px) {
            font-size: 16px;
          }

        }

        h3 {
          font-family: Montserrat;
          font-style: normal;
          font-weight: 600;
          font-size: 56px;
          line-height: 50px;          
          text-align: center;
          color: #0B032D;
          margin: 45px 0 0 0;

          @media screen and (max-width: 1279px) {
            font-size: 38px;
            margin-top: 25px;
            line-height: 120%;
          }
        }

        .price {
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 120%;                    
          text-align: center;
          color: #505050;
          margin: 27px 0 0 0;

          @media screen and (max-width: 1279px) {
            margin-top: 13px;
          }
        }

        .btn-plan {
          background: #98CA4E;
          border-radius: 25px;
          width: 260px;
          height: 50px;
          display: flex;          
          outline: none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: Montserrat;
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 32px;          
          text-align: center;
          text-transform: uppercase;
          color: #FFFFFF;
          margin: 39px 0 0 0;

          @media screen and (max-width: 1279px) {
            margin-top: 20px;
          }
        }

        .description {
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 35px;          
          text-align: center;
          color: #505050;
          margin: 46px 0 0 0;

          @media screen and (max-width: 1279px) {
            margin-top: 23px;
            font-size: 16px;
            line-height: 150%;
          }
        }
      }
    }
  }

  .section-fag {
    padding: 121px 0;

    @media screen and (max-width: 1279px) {
      padding: 40px 0;
    }

    h3 {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 47px;
      text-align: center;
      color: #0B032D;
      margin: 0 0 40px 0;
      @media screen and (max-width: 1279px) {
        font-size: 32px;
        margin-bottom: 20px;
      }
    }

    .faq-card {
      background: #F3F6F9;
      border-radius: 20px;
      margin-bottom: 5px;
      border: 0;

      .card-header {
        padding: 0;
        border-bottom: 0;
      }

      .card-body {
        padding: 10px 28px 50px;
      }

      .card-text {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 30px;        
        color: #505050;
      }
    }

    .btn-faq-collapse {
      background: #F3F6F9;      
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;      
      color: #0B032D;
      max-height: 75px;
      height: auto;
      display: flex;
      align-items: center;
      outline: none;
      border: none;
      padding-left: 28px;
      padding-right: 28px;
      border-radius: 0;
      box-shadow: none;
      padding-top: 10px;
      padding-bottom: 10px;

      img {
        margin-left: auto;
      }

      @media screen and (max-width: 1279px) {
        font-size: 16px;
      }
    }
  }
</style>








