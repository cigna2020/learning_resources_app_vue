<template>
  <li>
    <h2>{{ name }} {{ isFavorite === "1" ? "is Favorite" : "" }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  //   props: ["name", "phoneNumber", "emailAddress"],
  props: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: String,
      required: false,
      default: "0",
      validator: function(value) {
        return value === "1" || value === "0";
      },
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manual",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>
