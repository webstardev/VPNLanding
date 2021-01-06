<template>
  <div>
    <div class="articles-container small-container">
      <b-card v-if="!loading" class="article-card">
        <b-card-body>

          <b-card-title>
            <div class="caption mt-2">
              {{ getPostDate(post.date) }}
            </div>
            <h2>
              <span v-html="post.title ? post.title.rendered : ''" />
            </h2>
          </b-card-title>

          <b-card-img
            img-top
            v-if="post._embedded && post._embedded['wp:featuredmedia']"
            :src="post._embedded['wp:featuredmedia'][0].source_url"
          />

          <b-card-text
            v-html="post.content ? post.content.rendered : ''"
          ></b-card-text>
          <div class="my-4" v-if="!!socialPostUrl">
            <vue-goodshare-facebook
              :page_url="socialPostUrl"
              title_social="Facebook"
              has_icon
            >
            </vue-goodshare-facebook>
            <vue-goodshare-twitter
              :page_url="socialPostUrl"
              title_social="Twitter"
              has_icon
            ></vue-goodshare-twitter>
            <vue-goodshare-reddit
              :page_url="socialPostUrl"
              title_social="Reddit"
              has_icon
            ></vue-goodshare-reddit>
          </div>            

        </b-card-body>
      </b-card>
    </div>

    <div class="releated-post">
      <div class="container">
        <h2 class="section-title text-center">More like this</h2>
        <div class="row">
          <div
            class="col-sm-6 col-md-4 col-lg-4"
            v-for="(post, index) in releatedPosts"
            :key="index"            
          >
            <b-card v-if="index < 3">
              <b-card-body>
                <b-card-img
                  img-top
                  v-if="post._embedded && post._embedded['wp:featuredmedia']"
                  :src="post._embedded['wp:featuredmedia'][0].source_url"
                />
                <b-card-title>
                  <div class="caption">
                    {{ getPostDate(post.date) }}
                  </div>
                  <h2>
                    <NuxtLink :to="'/articles/' + post.slug">
                      <span v-html="post.title ? post.title.rendered : ''" />
                    </NuxtLink>
                  </h2>
                </b-card-title>

                <b-card-text
                  v-html="post.excerpt ? post.excerpt.rendered : ''"
                ></b-card-text>

                <NuxtLink
                  :to="'/articles/' + post.slug"
                  class="card-link btn btn-outline f-Montserrat"
                >
                  READ MORE
                </NuxtLink>
              </b-card-body>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";
import VueGoodshareReddit from "vue-goodshare/src/providers/Reddit.vue";

export default {
  layout: "pages",

  data() {
    return {
      sharing: {},
      post: {},
      releatedPosts: [],
      loading: true,
      socialPostUrl: '',
    };
  },

  head() {
    return {
      title: this.post.title ? this.post.title.rendered : "",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.excerpt ? this.post.excerpt.rendered : ""
        }
      ]
    };
  },
  components: {
    VueGoodshareFacebook,
    VueGoodshareTwitter,
    VueGoodshareReddit
  },
  watch: {
    "$route.params.slug": function() {
      this.getRecentPost();
    }
  },

  methods: {
    // Get Recent Posts From WordPress Site
    getRecentPost() {
      this.loading = true;
      const slug = this.$route.params.slug;
      axios
        .get(`https://wp.dsdefender.com/wp-json/wp/v2/posts?slug=${slug}`, {
          params: {
            context: "view",
            _embed: true
          }
        })
        .then(response => {
          this.loading = false
          this.post = response.data[0] || {};

          // console.log(this.post);

          this.getReleatedPost();
        })
        .catch(error => {
          this.loading = false;
          console.log(error);          
        });
    },
    getReleatedPost() {
      axios
        .get(`https://wp.dsdefender.com/wp-json/wp/v2/posts`, {
          params: {
            per_page: 4,
            page: 1,
            _embed: true
          }
        })
        .then(response => {
          this.releatedPosts = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getPostDate(date) {
      return moment(date).format("lll");
    },
    getUrlFromRoute() {    
      if (window && window.location && window.location.href) {
        this.socialPostUrl = window.location.href
      }
    }

  },
  mounted() {
    this.getRecentPost();
    this.getReleatedPost();
    this.getUrlFromRoute();
  }
};
</script>

<style lang="scss" scoped>
.articles-container {
  padding-top: 70px;
  padding-bottom: 80px;

  @media screen and (max-width: 767px) {
    padding-top: 35px;
    padding-bottom: 40px;
  }
}
.article-card {
  background: transparent;  
  border: none;
  
  .card-title {    
    margin: 0;
    h2 {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 47px;
      text-align: center;
      color: #0B032D;
      margin: 26px 0 0 0;

      @media screen and (max-width: 767px) {
        margin: 13px 0 0 0;
      }
    }

    a:hover {
      color: #73fd05;
    }
    .caption {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      text-align: center;
      color: #505050;
    }
  }
  .card-img {
    width: 100%;
    border-radius: 20px;
    object-fit: cover;
    margin: 60px 0 0 0;
    @media screen and (max-width: 767px) { 
      margin: 30px 0 0 0;
    }
  }

  .card-text {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;    
    color: #505050;
    margin: 45px 0 0 0;
    @media screen and (max-width: 767px) {
      margin: 20px 0 0 0;
    }
  }

}
.section-title {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 47px;  
  color: #0B032D;
  margin: 0 0 80px 0;

  @media screen and (max-width: 1279px) {
    font-size: 32px;
    margin: 0 0 40px 0;
  }
}

.releated-post {
  background-color: rgba(207,218,232, 0.3);
  padding-top: 112px;
  padding-bottom: 112px;
  @media (max-width: 991px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .card {
    border: 0;
    padding: 0;
    background-color: transparent;
    margin-bottom: 30px;
    .card-body {
      padding: 0;
    }
  }

  .card-title {
    margin: 0;
    h2 {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      color: #0B032D;
      margin: 18px 0 0 0;    
    }
  }
  .card-text {
    font-size: 14px;
  }
  .card-img {
    border-radius: 20px;
  }

  .caption {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    color: #505050;
    margin: 15px 0 0 0;
  }

  .card-text {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;    
    color: #505050;
    margin: 19px 0 0 0;
    p {
      margin: 0;
    }
  }

  .card-link {
    background: #98CA4E;
    border-radius: 25px;
    width: 170px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 32px;    
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    border: none;
    outline: none;    
  }
}
</style>

<style>
.button-social {
  border-radius: 20px !important;
}
</style>