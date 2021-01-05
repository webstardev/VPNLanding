<template>
  <div class="container-fluid features">
    <div class="container">
      <div class="row">
        <div class="features-title">
          Features
        </div>
      </div>

      <div class="row py-5">
        <div class="col-12 col-md-6 pb-5 my-auto">
          <h2 class="heading1">
            No account needed!
          </h2>
          <h3 class="explanation">
            Just download, connect and go. No account requirement means the DS
            Defender VPN has zero access to any logs, history or browser
            activity. We won't ask for your email address because we don't want
            to know anything about you and that's the way it should be.
          </h3>
          <div>
            <a
              href="https://play.google.com/store/apps/details?id=com.blindcut.dsdefender.vpn"
              target="_new"
              ><img
                :src="require('../assets/features-google.png')"
                role="button"
                class="pr-5 pb-2"
            /></a>
            <a href="https://apps.apple.com/us/app/id1501838199" target="_new"
              ><img
                :src="require('../assets/features-apple.png')"
                role="button"
                class="pb-2"
            /></a>
          </div>
        </div>
        <div class="col-12 col-md-6 text-right my-auto d-none d-md-block">
          <img
            :src="require('../assets/features-noaccount.png')"
            alt="Deep State Defender No Account Needed"
            class="col-12 col-lg-10"
          />
        </div>
      </div>

      <!--  -->
      <div class="row py-5">
        <div class="col-12 col-md-6 text-left pb-5 my-auto d-none d-md-block">
          <img
            :src="require('../assets/features-wireguard.png')"
            alt="Deep State Wireguard VPN"
            class="col-12 col-lg-10"
          />
        </div>
        <div class="col-12 col-md-6 pb-5 my-auto">
          <h2 class="heading1">Wireguard<span class="copyright">®</span></h2>
          <h3 class="explanation">
            DS Defender VPN is cleverly designed with the Wireguard® protocol
            for incredibly speedy VPN connections.
          </h3>
          <div>
            <b-dropdown text="TRY NOW" variant="outline-success">
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
      <!--  -->
      <div class="row py-5">
        <div class="col-12 col-md-6 pb-5 my-auto">
          <h2 class="heading1">
            The Browser
          </h2>
          <h3 class="heading2">
            What makes our VPN different than ALL the others? Effortless
            privacy.
          </h3>
          <h4 class="explanation">
            One tap opens the DS Defender Browser. Use the VPN and browser
            together for the fastest, most secure experience. Activate more
            privacy options in the browser settings for ultimate protection.
          </h4>
          <div>
            <a
              href="https://play.google.com/store/apps/details?id=com.blindcut.browser.dsdefender"
              target="_new"
              ><img
                :src="require('../assets/features-google.png')"
                role="button"
                class="pr-5 pb-2"
            /></a>
            <a href="https://apps.apple.com/us/app/id1492828395" target="_new"
              ><img
                :src="require('../assets/features-apple.png')"
                role="button"
                class="pb-2"
            /></a>
          </div>
        </div>
        <div class="col-12 col-md-6 text-right my-auto d-none d-md-block">
          <img
            :src="require('../assets/features-browser.png')"
            alt="Deep State Private Browser Image"
            class="col-12 col-lg-10"
          />
        </div>
      </div>
      <!--  -->
      <div class="row py-5">
        <div class="col-12 col-md-6 text-left pb-5 my-auto d-none d-md-block">
          <img
            :src="require('../assets/features-freeamount.png')"
            alt="Deep State Defender Features"
            class="col-12 col-lg-10"
          />
        </div>
        <div class="col-12 col-md-6 pb-5 my-auto">
          <h2 class="heading1">
            You get 100MB for FREE!
          </h2>
          <h3 class="explanation">
            That's a generous amount of data. We also give you access to the
            same server locations as Premium users. There is no time limit or
            trial period with sneaky fees. When you run out of the 100 MB, you
            simply run out! We hope by then that you love us so much, you
            upgrade to the Premium subscription!
          </h3>
          <div>
            <b-dropdown text="TRY NOW" variant="outline-success">
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

      <div class="row py-5">
        <div class="col-12 col-md-6 pb-5 my-auto">
          <div class="heading1">
            Go Premium!
          </div>
          <div class="explanation">
            Upgrade to Premium and get:<br /><br />
            • Unlimited data<br />
            • Access to all server locations <br />
            • Early release locations <br />
            • On Demand: choose WI-FI, Cellular or both for VPN coverage <br />
          </div>
          <div>
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
        <div class="col-12 col-md-6 text-right my-auto d-none d-md-block">
          <img
            :src="require('../assets/features-premium.png')"
            alt="Deep State Defender Premium"
            class="col-12 col-lg-10"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.features {
  background: #1f2022;
}

.features-title::before {
  content: " ";
  border-bottom: 1px solid #9ea1a6;
  width: 600px;
  padding-top: 24px;
  margin-left: -600px;
  margin-right: 10px;
  float: left;
}

.features-title {
  margin-top: 100px;
  margin-bottom: 100px;
  font-weight: 500;
  font-size: 30px;
  line-height: 48px;
  color: #9ea1a6;
  letter-spacing: 0.01em;
  text-transform: uppercase;
}

.heading1 {
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 40px;
  line-height: 120%;
  color: #ffffff;
  padding-bottom: 20px;
}

.heading2 {
  font-family: "Roboto";
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  text-transform: uppercase;
  color: #ffffff;
  padding-bottom: 20px;
}

.explanation {
  font-family: "Roboto";
  font-size: 20px;
  line-height: 140%;
  color: #9ea1a6;
  padding-bottom: 40px;
}

.copyright {
  font-size: 24px;
  vertical-align: top;
  line-height: 150%;
}

.trynow {
  font-family: Montserrat;
  background: transparent;
  width: 170px;
  height: 50px;
  border-radius: 8px;
  border: solid 1px white;
  font-weight: bold;
  font-size: 16px;
}

.gopremium {
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
</style>
