<template>
  <NuxtLink
    v-if="post"
    class="trs relative flex w-full flex-col gap-[24px]"
    :class="`${hovered ? '-translate-y-3' : ''}`"
    :to="`/posts/${post.id}`"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <img class="aspect-square w-full" :src="post.image" :alt="post.title" />
    <p class="line-clamp-3 text-[20px] leading-[24px]">{{ post.description }}</p>

    <Transition name="fade-in">
      <NuxtLink
        v-if="hovered"
        class="absolute top-full w-full pt-[10px] text-[20px] leading-[24px] text-purpleLight"
        :to="`/posts/${post.id}`"
      >
        Read more
      </NuxtLink>
    </Transition>
  </NuxtLink>
</template>

<script setup lang="ts">
  interface Post {
    id: string
    createdAt: string
    title: string
    preview: string
    image: string
    description: string
  }

  defineProps<{
    post: Post
  }>()

  const hovered = ref(false)
</script>

<style scoped lang="scss"></style>
