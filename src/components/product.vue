<template>
  <div class="product" :class="{ isfav: product.fav }">
    <span class="product-name">{{ product.title }}</span>
    <button class="product-fav" @click="$emit('changefav')">&hearts;</button>
    <button class="product-cart text-right" @click="$emit('addcart')">
      Add To Cart
    </button>
    <h3 class="product-date">{{ product.date }}</h3>
    <div class="row">
      <div class="col-sm-6">
        <span class="product-company">{{ product.company }}</span>
      </div>
      <div class="col-sm-6 text-right">
        <span class="product-price"> {{ product.price + " $" }} </span>
      </div>
    </div>
  </div>
  <div v-if="showmodal">
    <mymodal @closemodal="$emit('closemodal')">
      <h1>{{ product.title }}</h1>
    </mymodal>
  </div>
</template>

<script>
import mymodal from "@/components/Modal.vue";
export default {
  props: ["product", "showmodal"],
  name: "my-product",
  components: { mymodal },
};
</script>

<style lang="scss" scoped>
.product {
  padding: 20px;
  background-color: white;
  box-shadow: 10px 10px 20px #ddd;
  position: relative;
  text-align: left;
  margin-bottom: 20px;
  border-radius: 20px;
  .product-fav {
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
  .product-cart {
    position: absolute;
    top: 7px;
    right: 60px;
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
  .product-date {
    color: #888;
    display: block;
    padding: 0 0 5px;
    font-size: 14px;
  }
  .product-company {
    background-color: #6dc3f5;
    padding: 6px 10px;
    border-radius: 4px;
  }
  .product-price {
    background-color: #96e2cb;
    padding: 6px 10px;
    border-radius: 4px;
  }
}
.isfav .product-fav {
  text-shadow: 0 1px 0 #b12f27;
  background-color: #f64136;
  border-color: #b12f27;
  color: whitesmoke;
}
</style>
