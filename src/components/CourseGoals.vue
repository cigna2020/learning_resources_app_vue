<template>
  <ul>
    <li v-for="goal in goals" :key="goal">{{ goal }}</li>
    <slot></slot>
    <!-- <slot :item="goal" some-goals="blu-blu-blu"></slot> -->
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Learn Vue!", "Finish the course!"],
    };
  },
};
</script>
