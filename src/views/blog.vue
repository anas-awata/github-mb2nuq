<template>
  <div class="blog">
    <h1>{{ pagename }}</h1>
    <p>{{ pagedesc }}</p>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      pagename: "Blog",
      pagedesc: "my Blog page",
    };
  },
  name: "my-blog",
  components: {},
};
</script>
