<template>
  <div class="footer-wrapper">
    <div class="container vpn-container">
      <b-navbar type="dark" class="nav-back">

        <div class="d-none d-md-block">
          <b-navbar-brand>
            <NuxtLink to="/" class="footer-brand">
              <div class="footer-logo">
                <img
                  :src="require('../assets/logo.svg')"
                  alt="Datacappy VPN & Browser"
                />
              </div>
              <div class="footer-title">Datacappy VPN & Browser</div>
            </NuxtLink>
          </b-navbar-brand>
        </div>

        <b-navbar-nav class="footer-nav">
          <b-nav-text>
            <NuxtLink to="/about" class="nav-link px-3">
              About
            </NuxtLink>
          </b-nav-text>
          <b-nav-text>
            <NuxtLink to="/articles" class="nav-link px-3">
              Stay Informed
            </NuxtLink>
          </b-nav-text>
          <b-nav-text>
            <NuxtLink to="/privacy" class="nav-link px-3">
              Privacy
            </NuxtLink>
          </b-nav-text>
          <b-nav-text>
            <NuxtLink to="/terms" class="nav-link px-3">
              Terms of Service
            </NuxtLink>
          </b-nav-text>        
        </b-navbar-nav>

        <p class="copy-right">© Blindcut, LLC 2020. All Rights Reserved</p>
      </b-navbar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-wrapper {
  margin: 0;
  background-color: #2C5A90;

  .container {
    padding-top: 25px;
    padding-bottom: 25px;
  }

  .navbar {
    padding: 0;
  }

  .navbar-brand {
    padding: 0;
  }

  .footer-nav {
    margin-left: 90px;
    .navbar-text {
      margin-right: 40px;
    }
  }

  .copy-right {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: right;
    color: rgba(255, 255, 255, 0.6);
    margin: 0 0 0 auto;
  }


}

.footer-brand {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  .footer-logo {
    flex-shrink: 0;
    margin-right: 8px;
    img {
      width: 42px;
      height: 58px;
      margin-top: -10px;
    }
  }
  .footer-title {
    flex-shrink: 1;
    font-weight: 600;
    font-size: 18px;    
    font-family: Montserrat;
  }
}

@media (max-width: 991px) {
  .footer-brand {
    justify-content: center;
  }
}

.nav-back {
  background: transparent;
}
.nav-link {
  font-size: 14px;  
  line-height: 20px;
}

</style>
