<template>
  <div class="app flex flex-col items-center">
    <Header />

    <main class="z-10 flex w-full flex-grow">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
  import Header from '~/components/Layout/Header.vue'
  import Footer from '~/components/Layout/Footer.vue'
</script>

<style lang="scss" scoped>
  .app {
    min-height: 100vh;
  }
</style>
