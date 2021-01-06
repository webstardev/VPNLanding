<template>
  <div>
    <BannerTitle
      title="Downloads"
      description="Our mission should be your mission."
    >
      <b-button class="btn-vpn btn-free-trial">FREE TRIAL</b-button>
    </BannerTitle>

    <div class="container vpn-container">
      <div class="row">
        <div class="col-md-6">
          <h1>
            Download Datacappy VPN app for Windows
          </h1>      
          <p>Get the best online experience with the fastest VPN for Windows.</p>
          <b-button 
            class="btn-vpn btn-download"
            href="https://dsdefender.com/windows/DSD_VPN_Setup.msi"
          >
            Download
          </b-button>        
        </div>
        <div class="col-md-6">
          <!-- <img src="../assets" -->
        </div>
      </div>      
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  head: {
    title: 'Download Datacappy VPN & Browser',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Datacappy VPN & Browser for Windows, Datacappy for Windows'
      }
    ],
  },
  layout: "pages",
  data() {
    return {
      // url: 'https://dsdefender.com/windows/DSD_VPN_Setup.msi'
    };
  },

  methods: {
    onClick() {
      axios({
        url: "https://dsdefender.com/windows/DSD_VPN_Setup.msi",
        // url: 'https://dsdefender.com/favicon.png',
        method: "GET",
        responseType: "blob"
      }).then(response => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement("a");
        fileLink.href = fileURL;
        fileLink.setAttribute("download", "DSD_VPN.msi.zip");
        document.body.appendChild(fileLink);
        fileLink.click();
      });
    }
  }
};
</script>

<style scoped lang='scss'>
.btn-vpn {
  width: 260px;
  height: 50px;
  margin: 55px 0 0 0;
  background: #98CA4E !important;
  border-radius: 25px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 32px;  
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;  
}

.vpn-container {
  padding-top: 136px;
  padding-bottom: 76px;

  @media screen and (max-width: 1279px) {
    padding-top: 68px;
    padding-bottom: 38px;
  }
}

.btn-free-trial {
  margin: 55px 0 0 0;
  @media screen and (max-width: 1279px) {
    margin-top: 25px
  }
}

.btn-download {
  margin: 60px 0 0 0;
  @media screen and (max-width: 1279px) {
    margin-top: 25px
  }

  @media screen and (max-width: 767px) {
    margin: 25px auto 0;
  }
}

h1 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 140%;
  color: #0B032D;
  max-width: 300px;
  margin: 0;

  @media screen and (max-width: 767px) {
    max-width: 100%;
    text-align: center;
  }
}

p {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 30px;
  color: #505050;
  margin: 30px 0 0 0;
  max-width: 500px;

  @media screen and (max-width: 1279px) {
    margin-top: 20px;
  }

  @media screen and (max-width: 767px) {
    max-width: 100%;
    text-align: center;
  }

}

</style>
