<template>
  <div>
    
    <b-navbar toggleable="md" type="dark" class="nav-back">
      <b-navbar-brand class="nav-brand-centered">
        <NuxtLink to="/">
          <div class="header-logo mt-5">
            <img
              :src="require('../assets/vpn_logo.png')"
              alt="Deep State Defender VPN"
            />
          </div>
        </NuxtLink>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse navbar-toggler"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
        <!-- <b-navbar-nav> -->
          <b-nav-item  class="nav-link">
          <!-- <b-nav-item> -->
            <NuxtLink to="/about">
              About
            </NuxtLink>
          </b-nav-item>
          <b-nav-item class="nav-link">
          <!-- <b-nav-item> -->
            <NuxtLink to="/articles">
              Stay INFORMED
            </NuxtLink>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

  </div>
</template>

<style lang="scss" scoped>
.nav-back {
  background: #121314;
}

.nav-brand-centered {
  position: absolute;
  left: 50%;
  display: block;
  text-align: center;
  margin-left: -50px !important; /* 50% of your logo width */
  padding: 20px 10px 10px;
}

.nav-link {
  color: inherit;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
}

.header-logo {
  flex-shrink: 1;
  animation: 1s appear;

  img {
    max-width: 100px;
  }
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
