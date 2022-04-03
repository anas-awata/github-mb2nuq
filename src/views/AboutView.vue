<template>
  <div class="about">
    <h1>{{ pagename }}</h1>
    <p>{{ pagedesc }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pagename: "About us",
      pagedesc: "my about us page",
    };
  },
  name: "about-view",
};
</script>
