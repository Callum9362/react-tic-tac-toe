<template>
  <v-toolbar app color="purple lighten-3" dark>
    <v-toolbar-side-icon
      class="hidden-md-and-up"
      @click="drawer = !drawer"
    ></v-toolbar-side-icon>
    <v-spacer class="hidden-md-and-up"></v-spacer>
    <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
    <v-btn color="purple lighten-3" flat class="hidden-sm-and-down">Menu</v-btn>
    <v-spacer class="hidden-sm-and-down"></v-spacer>
    <v-btn color="purple lighten-3" flat class="hidden-sm-and-down">SIGN IN</v-btn>
    <v-btn color="purple lighten-3" class="hidden-sm-and-down">JOIN</v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: "AppNavigation",
};
</script>

<style scoped>
</style>