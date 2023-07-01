<template>
  <div
    id="app"
    class="min-h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
  >
    <Navbar />
    <div class="container px-5 py-24 mx-auto">
      <NuxtPage />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "Jordan Massey",
  components: [Navbar],
};
</script>
