<template>
  <h2>Manage Goals</h2>
  <input type="text" placeholder="Your text here..." ref="goal" />
  <button @click="setGoal">Confirm!</button>
  <error-alert v-if="inputIsValid">
    <h2>The input shouldn't be empty!</h2>
    <p>Please enter some text...</p>
    <button @click="confirmError">Ok</button>
  </error-alert>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsValid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.inputIsValid = true;
      }
    },
    confirmError() {
      this.inputIsValid = false;
    },
  },
};
</script>
