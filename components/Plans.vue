<template>
  <div class="container-fluid footer">
    <div class="container">
      <div class="row">
        <div class="w-100 text-center">
          <div class="footer-title">
            Choose a plan. We keep it simple.
          </div>
          <div
            class="col-12 col-md-8 col-lg-10 d-flex flex-wrap text-center mx-auto"
          >
            <div class="col-12 col-lg-6 mt-4">
              <div class="plan-normal-wrapper">
                <img
                  :src="require('../assets/plan-normal.png')"
                  alt="Deep State Defender Plans"
                />
                <div class="plan-text-monthly">
                  Monthly Subscription
                </div>
                <div class="plan-price-monthly">
                  $9.99<span class="plan-month-text">/month</span>
                </div>

                <b-dropdown text="TRY NOW" variant="success">
                  <b-dropdown-item
                    href="https://apps.apple.com/us/app/id1501838199"
                    target="new"
                    >iPhone</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="https://apps.apple.com/us/app/id1501838199"
                    target="new"
                    >iPad</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="https://apps.apple.com/us/app/id1501838199"
                    target="new"
                    >Mac</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="https://play.google.com/store/apps/details?id=com.blindcut.dsdefender.vpn"
                    >Android</b-dropdown-item
                  >

                  <b-dropdown-item>
                    <NuxtLink :to="'/downloads/'">
                      Windows
                    </NuxtLink>
                  </b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
            <div class="col-12 col-lg-6 mt-4">
              <div class="plan-premium-wrapper">
                <img
                  :src="require('../assets/plan-premium.png')"
                  alt="Deep State Defender Premium Plan"
                />
                <div class="plan-text-yearly">
                  Yearly Subscription
                </div>
                <div class="plan-price-yearly">
                  $99.99<span class="plan-year-text"
                    >/year<br />2 months free!</span
                  >
                </div>

                <b-dropdown text="GO PREMIUM" variant="success">
                  <b-dropdown-item
                    href="https://apps.apple.com/us/app/id1501838199"
                    target="new"
                    >iPhone</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="https://apps.apple.com/us/app/id1501838199"
                    target="new"
                    >iPad</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="https://apps.apple.com/us/app/id1501838199"
                    target="new"
                    >Mac</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="https://play.google.com/store/apps/details?id=com.blindcut.dsdefender.vpn"
                    >Android</b-dropdown-item
                  >
                   <b-dropdown-item>
                     <NuxtLink :to="'/downloads/'">
                     Windows
                     </NuxtLink>
                     </b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
          </div>
          <div class="available-text">
            Available on:
          </div>
          <div class="text-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.blindcut.dsdefender.vpn"
              target="_new"
              ><img
                :src="require('../assets/logo.svg')"
                role="button"
                class="pr-2 pb-2"
            /></a>
          </div>
          <div class="text-center">
            <div class="copyright">
              © Blindcut, LLC 2020 -
              <router-link to="/privacy">Privacy Policy</router-link> -
              <router-link to="/terms">Terms</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.footer {
  background: #2C5A90;
  display: flex;
  align-items: center;
  height: 100px;
}

.footer-title {
  font-family: Montserrat;
  font-size: 40px;
  font-weight: 600;
  color: #000000;
  padding-top: 60px;
  padding-bottom: 40px;
}

.available-text {
  font-family: Roboto Mono;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  color: #000000;
  margin-top: 40px;
  margin-bottom: 40px;
}

.copyright {
  font-family: Roboto;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 54px;
  padding-bottom: 30px;
}

.plan-button {
  font-family: Montserrat;
  width: 170px;
  height: 50px;
  font-weight: bold;
  font-size: 16px;
  color: #1d1d1d;
  background: #73fd05;
  border-radius: 8px;
  border: solid 0;
}

.plan-normal-wrapper {
  background: #dadcdf;
  border-radius: 8px;
  padding-top: 60px;
  padding-bottom: 60px;
}

.plan-premium-wrapper {
  background: #1f2022;
  border-radius: 8px;
  padding-top: 60px;
  padding-bottom: 60px;
}

.plan-text-monthly {
  font-family: Montserrat;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #000000;
  padding-top: 40px;
  padding-bottom: 16px;
}

.plan-text-yearly {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #ffffff;
  padding-top: 40px;
  padding-bottom: 16px;
}

.plan-price-monthly {
  font-family: Montserrat;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  color: #000000;
  height: 100px;
  padding-bottom: 50px;
}

.plan-price-yearly {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  color: #ffffff;
  height: 100px;
  padding-bottom: 50px;
}

.plan-month-text {
  font-family: Montserrat;
  font-size: 18px;
  line-height: 120%;
  color: #000000;
}

.plan-year-text {
  font-family: Montserrat;
  font-size: 18px;
  line-height: 120%;
  color: #ffffff;
}
</style>
