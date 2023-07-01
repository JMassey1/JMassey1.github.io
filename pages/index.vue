<template>
  <section class="text-slate-100 body-font">
    <div class="lg:w-2/3 flex-col sm:items-center items-start mx-auto">
      <h3
        class="sm:pr-16 text-sm text-violet-400 mb-3 font-bold tracking-[.15em]"
      >
        Hello, my name is
      </h3>
      <h1 class="sm:pr-16 text-5xl text-slate-400 font-bold tracking-wide mb-2">
        Jordan Massey.
      </h1>
      <h3 class="sm:pr-16 text-lg text-slate-400/50 italic tracking-wide">
        Computer Science B.S.
      </h3>
    </div>
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "Index",
  components: {
    Navbar,
  },
};
</script>

<script setup>
useHead({
  title: "Portfolio - Home",
});
</script>
