<template>
  <div class="backdrop" @click.self="$emit('closemodal')">
    <div class="mymodal"><slot></slot></div>
  </div>
</template>

<script>
export default {
  props: ["product"],
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
</style>
