<template>
  <section class="flex w-full items-center justify-center pb-[80px] pt-[110px]">
    <article class="container flex flex-col">
      <h1 class="mb-[73px] text-[84px] leading-[84px]">{{ post.title }}</h1>

      <Picture class="mb-[80px]" class-name="min-h-[700px]" :src="post.image" :alt="post.preview" />

      <h5 class="mb-[32px] text-[16px] leading-[16px]">About</h5>

      <p class="mb-[32px] max-w-[695px] text-[36px] leading-[44px]">{{ post.description }}</p>
    </article>
  </section>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { postsStore } from '~/store/posts'
  import Picture from '~/components/Atoms/Picture.vue'

  const { post } = storeToRefs(postsStore())
  const { fetchPost } = postsStore()

  useAsyncData('post', () => fetchPost(`${useRoute().params.id}`))

  onMounted(() => {
    useHead({
      title: `QTIM | ${post.value.title}`,
    })
  })
</script>

<style lang="scss" scoped></style>
