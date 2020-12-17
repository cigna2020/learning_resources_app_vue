<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Input name</label>
      <input type="text" v-model="userName" />
    </div>
    <div>
      <label>Input age</label>
      <input type="text" v-model="userAge" />
    </div>
    <button>Submit!</button>
  </form>
</template>

<script>
export default {
  emits: ["input-data"],
  data() {
    return {
      userName: "",
      userAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("input-data", this.userName, this.userAge);
    },
  },
};
</script>

<style scoped>
button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  margin-right: 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
</style>
