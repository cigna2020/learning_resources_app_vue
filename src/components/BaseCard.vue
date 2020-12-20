<template>
  <div>
    <!-- v-if - что-бы в html не отображался пустой header если header underfind -->
    <!-- но в этом случае дефолтное значение тоже не будет отображено -->
    <header v-if="$slots.header">
      <slot name="header">
        <!-- Будет отображено только в случае, если компонент не имеет своего контента -->
        <h2>The Default Text</h2>
      </slot>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  //   mounted() {
  //     console.log(this.$slots.header);
  //   },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
