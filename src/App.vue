<template>
  <div>
    <TheHeader></TheHeader>
    <BadgeList></BadgeList>
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></UserInfo>
    <CourseGoals>
      <template>
        <!-- <template #default="slotProps"> -->
        <!-- <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps["some-goals"] }}</p> -->
      </template>
    </CourseGoals>
    <button @click="selectedComponent('manage-goals')">Manage Goals</button>
    <button @click="selectedComponent('active-goals')">Active Goals</button>
    <!-- <manage-goals v-if="statusComponent === 'manage-goals'"></manage-goals>
    <active-goals v-if="statusComponent === 'active-goals'"></active-goals> -->
    <component v-bind:is="statusComponent"></component>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoals from "./components/CourseGoals.vue";
import ManageGoals from "./components/ManageGoals";
import ActiveGoals from "./components/ActiveGoals.vue";

export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,
    ManageGoals,
    ActiveGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
      statusComponent: "active-goals",
    };
  },
  methods: {
    selectedComponent(comp) {
      this.statusComponent = comp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
