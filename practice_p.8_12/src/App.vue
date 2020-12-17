<template>
  <header><h2>Info about user</h2></header>
  <active-user
    v-for="user in users"
    :key="user.id"
    :name="user.name"
    :age="user.age"
  ></active-user>
  <user-data @input-data="addNewData"></user-data>
</template>

<script>
import UserData from "./components/UserData.vue";
export default {
  components: { UserData },
  data() {
    return {
      users: [
        {
          id: "user1",
          name: "Vasya",
          age: "33",
        },
        {
          id: "user2",
          name: "Kolya",
          age: "22",
        },
      ],
    };
  },
  methods: {
    addNewData(name, age) {
      const newUser = {
        id: new Date().toISOString(),
        name: name,
        age: age,
      };
      this.users.push(newUser);
    },
  },
};
</script>

<style scoped>
html {
  font-family: sans-serif;
}
header {
  margin: 50px auto;
  padding: 20px;
  display: block;
  background-color: aqua;
  max-width: 300px;
  min-height: 50px;
  text-align: center;
  border-radius: 20px;
}
section {
  margin: 0.5rem auto;
  padding: 2rem;
  max-width: 40 rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  font-weight: normal;
  font-size: 18px;
}
form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
</style>
