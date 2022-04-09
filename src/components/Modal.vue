<template>
  <div>
    <div class="backdrop" @click.self="$emit('closemodal')">
      <div class="mymodal">
        <div class="title">
          {{ product.title }}
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          alias, nisi inventore debitis voluptatibus ullam excepturi, sapiente
          error, accusantium eveniet molestias asperiores expedita optio
          consequuntur consectetur voluptates? Fuga, sapiente mollitia!
        </p>
        <div
          class="order d-flex flex-row justify-content-around align-items-end"
        >
          <span class="p-2">number of items :</span>
          <input
            v-model.number="pronum"
            class="productsnum p-2"
            type="number"
            min="1"
          />
          <span class="p-2"> {{ parseInt(product.price) * pronum }} $</span>
        </div>
        <button>Add To Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return { pronum: 1 };
  },
  name: "My-Modal",
};
</script>

<style lang="scss" scoped>
.mymodal {
  width: 500px;
  height: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  right: 0px;
  z-index: 2;
}
.productsnum {
  width: 60px;
}
.order {
  margin-top: 150px;
}
button {
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
  margin: 20px auto;
  &:hover {
    text-shadow: 0 1px 0 #27b13e;
    background-color: #0ab953;
    border-color: #27b177;
    color: whitesmoke;
  }
}
</style>
