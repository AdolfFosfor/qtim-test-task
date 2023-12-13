<template>
  <button
    class="select-none rounded-full bg-darker px-[32px] py-[16px] text-[20px] text-white"
    :type="`${submit ? 'submit' : 'button'}`"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
  defineProps({
    submit: Boolean,
  })
</script>

<style scoped lang="scss">
  button {
    transition: background-color 200ms ease, text-shadow 200ms ease;

    &:hover {
    }
    &:active {
    }

    &:disabled {
      filter: opacity(0.6);
    }
  }
</style>
