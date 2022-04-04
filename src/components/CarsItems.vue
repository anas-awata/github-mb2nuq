<template>
  <div class="car-item">
    <span class="car-name">{{ carname }}</span>
    <h3 class="car-date">{{ date }}</h3>
    <div class="row">
      <div class="col-sm-6">
        <span class="car-company">{{ company }}</span>
      </div>
      <div class="col-sm-6 text-right">
        <span class="car-price"> {{ price + " $" }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["carname", "date", "company", "price"],
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
  /* .car-views {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #9086;
    border-radius: 4px;
    padding: 1px 5px;
    text-align: center;
    font-weight: bold;
  }*/
  .car-date {
    color: #888;
    display: block;
    padding: 0 0 5px;
    font-size: 14px;
  }
  /*.post-content {
    line-height: 1.8;
    color: #666;
  }*/
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
</style>
