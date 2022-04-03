<template>
  <div class="post">
    <span class="post-views">{{ views }}</span>
    <h3 class="post-title">{{ title }}</h3>
    <span class="post-date">{{ date }}</span>
    <p class="post-content">
      {{ content }}
    </p>
    <div class="row">
      <div class="col-sm-6">
        <span class="post-author">{{ author }}</span>
      </div>
      <div class="col-sm-6 text-right">
        <span class="post-catigory"> {{ catigory }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["views", "title", "date", "content", "author", "catigory"],
  name: "blog-post",
};
</script>

<style lang="scss" scoped>
.post {
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px #ddd;
  position: relative;
  text-align: left;
  .post-views {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #9086;
    border-radius: 4px;
    padding: 1px 5px;
    text-align: center;
    font-weight: bold;
  }
  .post-date {
    color: #888;
    display: block;
    padding: 0 0 5px;
    font-size: 14px;
  }
  .post-content {
    line-height: 1.8;
    color: #666;
  }
  .post-author {
    background-color: #6dc3f5;
    padding: 6px 10px;
    border-radius: 4px;
  }
  .post-catigory {
    background-color: #96e2cb;
    padding: 6px 10px;
    border-radius: 4px;
    margin-left: 255px;
  }
}
</style>
