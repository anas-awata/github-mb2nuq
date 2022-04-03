<template>
  <div class="header">
    <div class="logo">STORE-TEMPLATE</div>
    <ul>
      <li>
        <router-link to="/"><a>Home</a></router-link>
      </li>
      |
      <li>
        <router-link to="/about"><a>About</a></router-link>
      </li>
      |
      <li>
        <router-link to="/help"><a> Help</a></router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "AppHeader",
};
</script>
<style lang="scss" scoped>
.header {
  background: #333;
  color: #fff;
  overflow: hidden;
  .logo {
    font-size: 24px;
    padding: 20px;
    float: left;
    width: 300px;
  }
  ul {
    float: left;
    width: 800px;
    li {
      padding: 20px;
      display: inline-block;
      a {
        text-decoration: none;
        font-size: 18px;
        color: #fff;
      }
    }
  }
}
</style>
