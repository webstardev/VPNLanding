<template>
  <div v-if="!loading">
    <BannerTitle
      title="Get your head out of the sand"
      description="Stay informed and learn ways to protect your privacy"
    />
    <b-container>
      <div class="small-container">
        <template
          v-for="(post, index) in posts"           
        >
          <b-card v-if="index>= perPage * (currentPage-1) && index <perPage * (currentPage)" :key="index" >
            <b-card-body>
              <b-card-title>
                <div class="caption mb-2">
                  {{ getPostDate(post.date) }}
                </div>
                <h2 class="text-center">
                  <NuxtLink :to="'/articles/' + post.slug">
                    <span v-html="post.title.rendered" />
                  </NuxtLink>
                </h2>
              </b-card-title>
            </b-card-body>

            <b-card-img
              img-top
              v-if="post._embedded && post._embedded['wp:featuredmedia']"
              :src="post._embedded['wp:featuredmedia'][0].source_url"
            />
            <b-card-text
              class="mt-4 f-Roboto"
              v-html="post.excerpt ? post.excerpt.rendered : ''"
            ></b-card-text>            

            <NuxtLink
              :to="'/articles/' + post.slug"
              class="card-link btn btn-outline f-Montserrat"
            >
              READ MORE
              <b-icon-arrow-right></b-icon-arrow-right>
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
    title: "Deep State Defender Articles",
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
    color: #fff;
    h2 {
      font-size: 45px;
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
      color: #9ea1a6;
      font-size: 14px;
    }
  }
  .card-img-top {
    width: 100%;
    border-radius: 8px;
    height: 289px;
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
      background-color:  #121314;
      &.active {
        color: #73fd05;
      }
    }
    .page-item {
      &.disabled {
        .page-link {
          background-color: rgb(29, 29,29);
        }
      }
    }
  }
</style>
