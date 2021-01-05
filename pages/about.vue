<template>
  <div class="about-layout">
    <BannerTitle
      title="About"
      description="Our mission should be your mission."
    />

    <b-container>
      <div class="small-container section wp-content">
        <div class="text-left">
          <p>
            Big Tech sees your data—your clicks, your online shopping choices,
            your browsing history—as the gushing oil well of our times. It’s the
            most valuable stuff on earth, and they want it. Once they get it,
            they use it in ways we are only beginning to understand.
          </p>
          <p>
            We are not Big Tech. We are independent developers worried about the
            sudden loss of online privacy. Digital insecurity and what’s been
            called “Surveillance Capitalism” are serious problems for our kids,
            ourselves, and you. And not a lot of people are doing anything about
            it.
          </p>
          <p>We are.</p>
          <p>
            We see your data as yours. We think your clicks are your business.
            If your kid wants to research tigers and rocket ships, she should be
            able to do so without an unaccountable corporation using that data
            to build a profile of her and profit off it.
          </p>
          <p>
            Our business—our mission—is to help you preserve your privacy, use
            the internet securely, and to keep your information under your
            control. We take this mission seriously. We were among the very
            first companies to understand that a VPN and ad-blocking browser
            combined offered the best defense. So that’s what we built. That’s
            what we’re selling: the best defense.
          </p>
          <p>
            Deep State Defender will never auction off your information to the
            highest bidder. We will not try to make a buck off your data. We
            will not exploit your privacy.
          </p>
          <p>
            We offer access to the internet on your terms. Our VPN and browser
            are safe, simple to install and use, and reliable. Paired together,
            they provide an effective defense.
          </p>
          <p>
            Your information is yours and your privacy—your family’s privacy—is
            worth defending. We can help.
          </p>
        </div>
      <NuxtLink to="/blocked"></NuxtLink>

        <!-- <SocialShare2 :data="sharing" />  -->

        <!-- <ShareNetwork
    network="facebook"
    url=""
    title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
    description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
    quote="The hot reload is so fast it\'s near instant. - Evan You"
    hashtags="vuejs,vite"
  >
    Share on Facebook
</ShareNetwork>
 -->
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  layout: "pages",
  head: {
    title: "About Deep State Defender",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Our mission is to protect your privacy"
      }
    ]
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html body {
  color: #9ea1a6;
}
body a {
  color: inherit;
  color: all 0.5s;
  &:hover {
    color: #73fd05;
    text-decoration: none;
  }
}
.section {
  padding-top: 50px;
  padding-bottom: 70px;
  @media (min-width: 991px) {
    padding-top: 30px;
    padding-bottom: 40px;
  }
}
body .btn {
  font-weight: bold;
  font-size: 14px;
  &.btn-outline {
    border: 1px solid #9ea1a6;
    background: transparent;
    color: #fff;
    transition: all 0.5s;
    &:hover {
      background: #73fd05;
      color: #1f2022;
    }
  }
}

.wp-content {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff;
    margin-bottom: 1em;
    margin-top: 1.2em;
  }
  a {
    color: #73fd05;
  }
}
body .share-links a {
  font-size: 18px;
  color: #fff;
  margin: 0 4px;
  height: 26px;
  width: 26px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    color: #73fd05;
  }
}

button:focus {
  outline: none !important;
  outline: none !important;
}
#router-view {
  padding: 0px;
  margin: 0 auto;
}

.about-layout {
  background: linear-gradient(0deg, #1f2022, #1f2022), #1d1d1d;
}

@media (min-width: 1200px) {
  .inner-layout .container-fluid {
    padding: 0 60px;
  }
}
</style>
