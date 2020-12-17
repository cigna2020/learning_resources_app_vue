<template>
  <section>
    <div>
      <h2><strong>User name:</strong> {{ name }}</h2>
    </div>
    <div>
      <h3><strong>User age:</strong> {{ age }}</h3>
    </div>
  </section>
</template>

<script>
export default {
  emits: ["user-data"],
  props: ["id", "name", "age"],
};
</script>
