<template>
  <div class="car-item" :class="{ isfav: car.fav }">
    <span class="car-name">{{ car.title }}</span>
    <button class="car-fav" @click="$emit('changefav')">Love</button>
    <h3 class="car-date">{{ car.date }}</h3>
    <div class="row">
      <div class="col-sm-6">
        <span class="car-company">{{ car.company }}</span>
      </div>
      <div class="col-sm-6 text-right">
        <span class="car-price"> {{ car.price + " $" }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["car"],
  name: "car-item",
};
</script>

<style lang="scss" scoped>
.car-item {
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px #ddd;
  position: relative;
  text-align: left;
  .car-fav {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #fff;
    border-radius: 4px;
    padding: 1px 5px;
    text-align: center;
  }
  .car-date {
    color: #888;
    display: block;
    padding: 0 0 5px;
    font-size: 14px;
  }
  .car-company {
    background-color: #6dc3f5;
    padding: 6px 10px;
    border-radius: 4px;
  }
  .car-price {
    background-color: #96e2cb;
    padding: 6px 10px;
    border-radius: 4px;
  }
}
.isfav .car-fav {
  background-color: red;
  color: white;
}
</style>
