<template>
  <div class="blog">
    <h1>{{ pagename }}</h1>
    <p>{{ pagedesc }}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area"></div>
          <blog-posts />
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

export default {
  data: function () {
    return {
      pagename: "Blog",
      pagedesc: "my Blog page",
    };
  },
  name: "my-blog",
  components: { BlogPosts, SideBar },
};
</script>
