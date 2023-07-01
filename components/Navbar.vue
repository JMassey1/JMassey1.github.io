<template>
  <nav class="flow-root gap-x-4 mx-7 py-8">
    <div class="float-left flex-row flex gap-x-8">
      <NuxtLink to="/">
        <p class="prim-text">Portfolio</p>
      </NuxtLink>
      <NuxtLink to="/test">
        <p class="prim-text"><span class="sec-text">5. </span>Test</p>
      </NuxtLink>
    </div>
    <div class="float-right flex-row flex gap-x-8 pr-28">
      <NuxtLink to="/">
        <p class="prim-text"><span class="sec-text">1. </span>Home</p>
      </NuxtLink>
      <NuxtLink to="/about">
        <p class="prim-text"><span class="sec-text">2. </span>About</p>
      </NuxtLink>
      <NuxtLink to="/projects">
        <p class="prim-text"><span class="sec-text">3. </span>Projects</p>
      </NuxtLink>
      <NuxtLink to="/contact">
        <p class="prim-text"><span class="sec-text">4. </span>Contact</p>
      </NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
