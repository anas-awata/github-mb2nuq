<template>
  <div class="blog">
    <h1>{{ pagename }}</h1>
    <p>{{ pagedesc }}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area"></div>
          <blog-posts
            v-for="post in posts"
            :key="post.id"
            :views="post.views"
            :title="post.title"
            :date="post.date"
            :content="post.content"
            :author="post.author"
            :catigory="post.catigory"
          />
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
    };
  },
  name: "my-blog",
  components: { BlogPosts, SideBar },
};
</script>
