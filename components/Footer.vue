<template>
  <div class="footer-wrapper">
    <b-navbar type="dark" class="nav-back">

<!-- hide on screens smaller than md -->
      <div class="d-none d-md-block">
        <b-navbar-brand>
          <NuxtLink to="/" class="footer-brand">
            <div class="footer-logo mr-4">
              <img
                :src="require('../assets/vpn_logo.png')"
                alt="Deep State Defender VPN"
              />
            </div>
            <div class="footer-title">Deep State Defender VPN</div>
          </NuxtLink>
        </b-navbar-brand>
      </div>

      <b-navbar-nav>
        <b-nav-text>
          <NuxtLink to="/about" class="nav-link px-3">
            About
          </NuxtLink>
        </b-nav-text>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-text>
          <NuxtLink to="/articles" class="nav-link px-3">
            Stay INFORMED
          </NuxtLink>
        </b-nav-text>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-text>
          <NuxtLink to="/privacy" class="nav-link px-3">
            Privacy
          </NuxtLink>
        </b-nav-text>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-text>
          <NuxtLink to="/terms" class="nav-link px-3">
            Terms of Service
          </NuxtLink>
        </b-nav-text>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<style lang="scss" scoped>
.footer-wrapper {
  margin-top: auto
}
.footer-brand {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  .footer-logo {
    flex-shrink: 0;
    img {
      max-width: 30px;
    }
  }
  .footer-title {
    flex-shrink: 1;
    font-weight: 600;
    font-size: 16px;
    line-height: 60px;
  }
}

@media (max-width: 991px) {
  .footer-brand {
    justify-content: center;
  }
}

.nav-back {
  background: #121314;
}
.nav-link {
  font-size: 14px;
  // font-weight: 600;
  line-height: 20px;
}

</style>
