<template>
  <header class="z-30 flex w-full items-center justify-between px-[40px] pb-[34px] pt-[35px]">
    <NuxtLink to="/">
      <img class="h-[25px]" src="/logo.svg" alt="QTIM Logo" />
    </NuxtLink>

    <article class="flex items-center gap-[91px]">
      <Menu />

      <div class="flex items-center gap-[16px]">
        <LanguageBar />

        <Button>Let’s work</Button>
      </div>
    </article>
  </header>
</template>

<script setup>
  import Menu from '~/components/Layout/Menu.vue'
  import Button from '~/components/Atoms/Button.vue'
  import LanguageBar from '~/components/Layout/LanguageBar.vue'
</script>

<style scoped lang="scss"></style>
