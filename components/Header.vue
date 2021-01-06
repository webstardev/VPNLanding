<template>
  <div class="header-wrapper">
    <div class="container vpn-container">
      <b-navbar toggleable="md" type="dark" class="nav-back">
        <b-navbar-brand>
          <NuxtLink to="/">
            <div class="header-logo">
              <img
                :src="require('../assets/logo.svg')"
                alt="Datacappy VPN & Browser"
              />
              <div class="header-title">Datacappy VPN & Browser</div>
            </div>
          </NuxtLink>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse navbar-toggler"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">          
            <b-nav-item  class="nav-link">            
              <NuxtLink to="/about">
                About
              </NuxtLink>
            </b-nav-item>
            <b-nav-item class="nav-link">            
              <NuxtLink to="/articles">
                Stay INFORMED
              </NuxtLink>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.header-wrapper {
  background: #005A93;
  height: 90px;

  .vpn-container {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .nav-back {
    background: transparent;
    padding: 0;
    .navbar-brand {
      padding: 0;
    }
  }

  .nav-link {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #FDFDFF;
  }

  .header-logo {
    display: flex;
    align-items: center;
    flex-shrink: 1;
    animation: 1s appear;

    img {
      width: 50px;
      height: 70px;
    }
  }

  .header-title {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 27px; 
    margin-left: 13px;
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
  }
}

@media screen and (max-width: 767px) {
  #nav-collapse {
    background: #005A93;
    margin-left: -15px;
    margin-right: -15px;
    margin-top: 10px;

    .nav-link {
      padding-left: 30px;
      padding-right: 30px;      
    }

    a.nav-link {
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);        
    }

    .nav-item {
      &:last-child {
        a.nav-link {
          border: none;
          padding-bottom: 20px;
        }   
      }
    }
  }
}

@media screen and (max-width: 479px) {
  .header-title {
    display: none;
  }
}
</style>
