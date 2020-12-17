<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "is Favorite" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">Show Details</button>
    <button @click="this.$emit('delete', id)">Delete</button>
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
    id: {
      type: String,
      required: true,
    },
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
      type: Boolean,
      required: false,
      default: false,
      //   validator: function(value) {
      //     return value === "1" || value === "0";
      //   },
    },
  },
  // not obligatory property gives more info about a custom event
  emits: ["toggle-favorite", "delete"],
  //   emits: {
  //     "toggle-favorite": function(id) {
  //       if (id) {
  //         return true;
  //       } else {
  //         console.warn("Id is missing!");
  //         return false;
  //       }
  //     },
  //   },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>
