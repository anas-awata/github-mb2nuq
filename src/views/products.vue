<template>
  <div class="Cars">
    <h1>{{ pagename }}</h1>
    <p>{{ pagedesc }}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="products-area"></div>
          <myproduct
            v-for="product in productsload"
            :key="product.id"
            :product="product"
            :showmodal="showmodal"
            @changefav="togglefav(product)"
            @addcart="togglemodal()"
            @closemodal="togglemodal()"
          />
          <button @click="length += step" v-if="length < productslength">
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
import SideBar from "@/components/SideBar.vue";
import productsdata from "../json/car-items.json";
import myproduct from "@/components/product.vue";
export default {
  data: function () {
    return {
      pagename: "products",
      pagedesc: "my products page",
      products: productsdata,
      length: 3,
      step: 3,
      showmodal: false,
    };
  },
  computed: {
    productsload() {
      return this.products.slice(0, this.length);
    },
    productslength() {
      return this.products.length;
    },
    favproducts() {
      return this.products.filter((product) => product.fav);
    },
  },
  methods: {
    togglefav(product) {
      product.fav = !product.fav;
    },
    togglemodal() {
      this.showmodal = !this.showmodal;
    },
  },
  name: "my-blog",
  components: { myproduct, SideBar },
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
