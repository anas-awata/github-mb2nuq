<template>
  <div class="blog">
    <h1>{{ pagename }}</h1>
    <p>{{ pagedesc }}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area"></div>
          <!-- <div v-for="(po, index) in postload" :key="index"> -->
          <blog-posts
            v-for="post in postload"
            :key="post.id"
            :id="post.id"
            :views="post.views"
            :title="post.title"
            :date="post.date"
            :content="post.content"
            :author="post.author"
            :catigory="post.catigory"
          />
          <!-- </div> --->
          <button @click="length += step" v-if="length < postlength">
            show more
          </button>
        </div>
        <div class="col-md-4">
          <div class="sidebar"></div>
          <side-bar />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BlogPosts from "@/components/BlogPosts.vue";
import SideBar from "@/components/SideBar.vue";
import JsonPosts from "../json/blog-posts.json";

export default {
  data: function () {
    return {
      pagename: "Blog",
      pagedesc: "my Blog page",
      posts: JsonPosts,
      length: 3,
      step: 3,
    };
  },
  computed: {
    postload() {
      return this.posts.slice(0, this.length);
    },
    postlength() {
      return this.posts.length;
    },
  },
  name: "my-blog",
  components: { BlogPosts, SideBar },
};
</script>
<style lang="scss" scoped>
button {
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  background-color: black;
  color: white;
  padding: 10px;
  &:hover {
    background-color: aqua;
    color: black;
  }
}
</style>
