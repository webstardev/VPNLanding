<template>
  <div v-if="!loading">
    <BannerTitle
      title="Get your head out of the sand"
      description="Stay informed and learn ways to protect your privacy"
    >
      <app-buttons :wrapperClass="`app-btn-wrapper`"></app-buttons>
    </BannerTitle>
    <b-container class="articles-container">
      <div class="small-container">
        <template
          v-for="(post, index) in posts"           
        >
          <b-card v-if="index>= perPage * (currentPage-1) && index <perPage * (currentPage)" :key="index" >
            <b-card-title>
              <div class="caption">
                {{ getPostDate(post.date) }}
              </div>
              <h2>
                <NuxtLink :to="'/articles/' + post.slug">
                  <span v-html="post.title.rendered" />
                </NuxtLink>
              </h2>
            </b-card-title>

            <b-card-img
              img-top
              v-if="post._embedded && post._embedded['wp:featuredmedia']"
              :src="post._embedded['wp:featuredmedia'][0].source_url"
            />
            <b-card-text
              class="f-Roboto"
              v-html="post.excerpt ? post.excerpt.rendered : ''"
            ></b-card-text>            

            <NuxtLink
              :to="'/articles/' + post.slug"
              class="card-link btn btn-outline f-Montserrat"
            >
              READ MORE              
            </NuxtLink>
          </b-card>
        </template>
      </div>

      <div class="overflow-auto mt-5">
        <pagination 
          class="post-pagination"
          :records="posts.length" 
          v-model="currentPage" 
          :per-page="perPage" 
          @paginate="callbackPagniate"
        />
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";

export default {
  head: {
    title: "Datacappy VPN & Browser Articles",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Get your head out of the sand!"
      }
    ]
  },
  components: {
    VueGoodshareFacebook,
    VueGoodshareTwitter 
  },
  layout: "pages",
  data() {
    return {            
      posts: [],
      loading: true,
      perPage: 3,
      currentPage: 1,
    };
  },
  methods: {
    // Get Recent Posts From WordPress Site
    getPosts() {
      this.loading = true;
      axios
        .get("https://wp.dsdefender.com/wp-json/wp/v2/posts")
        .then(response => {
          this.loading = false;
          this.posts = [ ...response.data]
        })
        .catch(error => {
          this.loading = false;
        })
    },
    callbackPagniate: function(page) {
      this.currentPage = page;      
    },

    getPostDate(date) {
      return moment(date).format("lll");
    }
  },
  created() {
    this.getPosts();    
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>

.articles-container {
  padding-top: 70px;
  padding-bottom: 80px;
  @media (max-width: 991px) {
    padding-top: 30px;
    padding-bottom: 40px;
  }
}
.card {
  background: transparent;
  border: none;
  .card-title {    
    margin: 0;

    h2 {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 36px;      
      color: #0B032D;
      margin: 10px 0 0 0;
    }
    @media (max-width: 991px) {
      h2 {
        font-size: 24px;
      }
    }
    a:hover {
      color: #73fd05;
    }
    .caption {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 15px;
      line-height: 30px;      
      color: #505050;
    }
  }
  .card-img-top {
    width: 100%;
    border-radius: 8px;
    height: 289px;
    object-fit: cover;
  }
  .card-text {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 30px;
    color: #505050;
    margin: 20px 0 0 0;
  }

  .card-link {
    background: #98CA4E !important;
    border-radius: 25px;
    width: 170px;
    height: 50px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0 0 0;
  }  
}

.app-btn-wrapper {
  margin: 55px 0 0 0;

  @media screen and (max-width: 1279px) {
    margin-top: 25px;
  }
}
</style>

<style lang="scss">
  .post-pagination {
    display: flex;
    justify-content: center;  
    .VuePagination__count {
      display: none;
    }      
    .page-link {
      color: white;
      background-color: #98CA4E;
      &.active {
        color: #73fd05;
      }
    }
    .page-item {
      &.active {
        .page-link {
          color: #0B032D;
          background-color: white;
        }
      }
      &.disabled {
        .page-link {
          background-color: #98CA4E;
        }
      }
    }
  }
</style>
