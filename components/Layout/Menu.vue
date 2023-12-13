<template>
  <nav>
    <ul class="flex items-center gap-[58px]">
      <li v-for="{ name, to, scroll } of menu" :key="name + to">
        <NuxtLink v-if="!scroll" class="hover:underline" :to="to">{{ name }}</NuxtLink>
        <button v-else class="hover:underline" @click="scrollTo('element', 'footer', 'end')">{{ name }}</button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  import { scrollTo } from '~/hooks/scrollTo'

  const menu = computed(() => [
    { name: 'Works', to: '/' },
    { name: 'About', scroll: 'footer' },
  ])
</script>

<style scoped lang="scss">
  a {
    transition: opacity 200ms ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }
</style>
