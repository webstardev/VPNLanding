<template>
  <div>
    <BannerTitle
      title="Get your head out of the sand"
      description="Stay informed and learn ways to protect your privacy"
    />
    <div class="articles-container small-container">
      <b-card v-if="!loading">
        <b-card-body>
          <b-card-img
            img-top
            v-if="post._embedded && post._embedded['wp:featuredmedia']"
            :src="post._embedded['wp:featuredmedia'][0].source_url"
          />

          <b-card-title>
            <div class="caption mt-2">
              {{ getPostDate(post.date) }}
            </div>
            <h2>
              <span v-html="post.title ? post.title.rendered : ''" />
            </h2>
          </b-card-title>

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
        <h2 class="section-title">More like this</h2>
        <div class="row">
          <div
            class="col-sm-6 col-lg-3 mb-5 mb-lg-0"
            v-for="(post, index) in releatedPosts"
            :key="index"
          >
            <b-card>
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
                  <h2 class="m-0">
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
                  <b-icon-arrow-right></b-icon-arrow-right>
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
}
.card {
  background: transparent;
  border: none;
  .card-title {
    color: #fff;
    h2 {
      font-size: 45px;
    }
    a:hover {
      color: #73fd05;
    }
    .caption {
      color: #9ea1a6;
      font-size: 14px;
    }
  }
  .card-img-top {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
  }
  .card-text {
    color: #9ea1a6;
  }
  .card-link {
    .icon {
      vertical-align: middle;
    }
  }
}
.section-title {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  position: relative;
  font-weight: 500;
  font-size: 30px;
  line-height: 48px;
  text-transform: uppercase;
  color: #9ea1a6;
  margin-bottom: 70px;
  @media (max-width: 991px) {
    font-size: 24px;
    margin-bottom: 30px;
  }
  &:before {
    position: absolute;
    top: 50%;
    background: #9ea1a6;
    left: -540px;
    content: "";
    width: 500px;
    height: 1px;
    display: table;
  }
}
.releated-post {
  background: #121314;
  padding-top: 120px;
  padding-bottom: 120px;
  @media (max-width: 991px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .card-title {
    h2 {
      font-size: 24px;
    }
  }
  .card-text {
    font-size: 14px;
  }
  .card-img-top {
    height: 100px;
  }
}
</style>
