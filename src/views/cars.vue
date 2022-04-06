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
            :car="car"
            @changefav="togglefav(car)"
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
    favCars() {
      return this.cars.filter((car) => car.fav);
    },
  },
  methods: {
    togglefav(car) {
      car.fav = !car.fav;
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
