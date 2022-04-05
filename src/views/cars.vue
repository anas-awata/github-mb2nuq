<template>
  <div class="Cars">
    <h1>{{ pagename }}</h1>
    <p>{{ pagedesc }}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="Carss-area"></div>
          <MyCars
            v-for="car in carsload"
            :key="car.id"
            :class="{ isfav: car.fav }"
            :id="car.id"
            :fav="car.fav"
            :carname="car.title"
            :date="car.date"
            :company="car.company"
            :price="car.price"
            @click="car.fav = !car.fav"
          />
          <button @click="length += step" v-if="length < carslength">
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
import cardata from "../json/car-items.json";
import MyCars from "@/components/CarsItems.vue";

export default {
  data: function () {
    return {
      pagename: "Cars",
      pagedesc: "my cars page",
      cars: cardata,
      length: 3,
      step: 3,
    };
  },
  computed: {
    carsload() {
      return this.cars.slice(0, this.length);
    },
    carslength() {
      return this.cars.length;
    },
  },
  name: "my-blog",
  components: { MyCars, SideBar },
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
