<template>
  <div class="banner-title f-Montserrat">
    <div class="container vpn-container">      
      <div class="main-content">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <slot></slot>        
      </div>
      <div class="logo-div">
        <img src="../assets/logo.svg" alt="logo"/>      
      </div>      
    </div>
  </div>
</template>

<script>
export default {
  name: "banner-title",
  props: ["title", "description"]
};
</script>


<style lang="scss" scoped>
.banner-title {    
  display: flex;  
  background-image: url('../assets/bg-2.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center top;
  background-color: rgba(207,218,232,0.3);
  width: 100%;
  height: 395px;
  padding-top: 76px;
  padding-bottom: 50px;

  .vpn-container {
    display: flex;
  }

  .main-content {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 53px;    
    color: #0B032D;
    margin: 0;
  }

  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 26px;    
    color: #0B032D;
    margin: 16px 0 0 0;
  }

  .logo-div {
    width: 137px;
    height: 350px;
    margin-left: auto;
    flex: 0 0 137px;
    img {
      width: 100%;
      margin-top: -15px;
    }
  }

  @media screen and (max-width: 1279px) {
    height: 240px;
    padding-top: 38px;
    h1 {
      font-size: 36px;
    }
    p {
      font-size: 18px;
    }

    .logo-div {
      width: 100px;
      height: 250px;
      flex: 0 0 100px;
    }
  }

  @media screen and (max-width: 767px) {
    .main-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1 1 100%;
      h1 {
        text-align: center;
      }
      p {
        text-align: center;
      }
    }

    .logo-div {
      display: none;
    }
  }

  @media screen and (max-width: 479px) {
    height: auto;
  }
}
</style>
