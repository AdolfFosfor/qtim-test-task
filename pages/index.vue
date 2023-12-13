<template>
  <div class="flex w-full flex-grow flex-col">
    <Articles />
  </div>
</template>

<script setup lang="ts">
  import Articles from '~/components/Home/Articles.vue'

  useHead({
    title: 'QTIM | Test Task',
  })
</script>

<style lang="scss" scoped></style>
