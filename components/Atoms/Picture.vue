<template>
  <picture class="relative flex w-full items-center justify-center">
    <img :class="`w-full opacity-0 ${className}`" :src="src" />
    <client-only>
      <img
        :class="`${loading ? 'opacity-0' : 'opacity-[1]'} ${
          contain ? 'object-contain' : 'object-cover'
        } trs absolute h-full w-full ${object ? `object-[${object}]` : ''}`"
        :src="src"
        :alt="alt"
        :style="`${loading ? 'scale: 1.1' : 'scale: 1'}`"
        @load="loading = false"
      />
    </client-only>
  </picture>
</template>

<script setup lang="ts">
  defineProps({
    src: {
      type: String,
      default: null,
    },
    alt: {
      type: String,
      default: null,
    },
    className: {
      type: String,
      default: null,
    },
    object: {
      type: String,
      default: null,
    },
    contain: Boolean,
  })

  const loading = ref(true)
</script>
