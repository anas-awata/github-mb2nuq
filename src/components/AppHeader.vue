<template>
  <div class="header">
    <div class="container">
      <div class="logo">STORE-TEMPLATE</div>
      <ul class="text-right">
        <li>
          <router-link to="/"><a>Home</a></router-link>
        </li>
        |
        <li>
          <router-link to="/cars"><a>Products</a></router-link>
        </li>
        |
        <li>
          <router-link to="/blog"><a>Blog</a></router-link>
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
    <button class="User">User</button>
    <button class="Cart">My Cart</button>
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
    margin: 0;
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
.User {
  position: absolute;
  top: 7px;
  right: 10px;
  text-align: center;
  box-shadow: 1px 1px 0 rgba(255, 255, 255, 0.5) inset;
  border-radius: 3px;
  border: 1px solid;
  line-height: 25px;
  padding: 5px 15px;
  font-size: 20px;
  text-decoration: none;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  background-color: #dbdbdb;
  border-color: #bbb;
  color: #666;
  &:hover {
    text-shadow: 0 1px 0 #b12f27;
    background-color: #f64136;
    border-color: #b12f27;
    color: whitesmoke;
  }
}
.Cart {
  position: absolute;
  top: 7px;
  right: 90px;
  text-align: center;
  box-shadow: 1px 1px 0 rgba(255, 255, 255, 0.5) inset;
  border-radius: 3px;
  border: 1px solid;
  line-height: 25px;
  padding: 5px 15px;
  font-size: 15px;
  text-decoration: none;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  background-color: #0aec61;
  border-color: #bbb;
  color: rgb(0, 0, 0);
  &:hover {
    text-shadow: 0 1px 0 #27b13e;
    background-color: #0ab953;
    border-color: #27b177;
    color: whitesmoke;
  }
}
</style>
