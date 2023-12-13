<template>
  <section class="flex w-full items-center justify-center pb-[140px]">
    <article v-if="posts.length" class="container flex flex-col gap-[59px]">
      <h1 class="text-[84px]">Articles</h1>

      <div class="grid grid-cols-4 gap-[32px]">
        <PostCard v-for="(post, index) of getPaginatePosts" :key="`Post ${index}`" :post="post" />
      </div>

      <div class="flex items-center gap-[8px]">
        <button
          v-for="page of getPages"
          :key="`Page ${page}`"
          :class="`${+page === currentPage ? 'bg-darker text-white' : 'bg-grayLight'}`"
          class="flex aspect-square w-[44px] select-none items-center justify-center rounded-[12px]"
          :disabled="+page === currentPage"
          @click="postsStore().currentPage = +page"
        >
          {{ page }}
        </button>
        <button
          class="trs flex aspect-square w-[44px] items-center justify-center rounded-[12px] border border-black/10 hover:bg-grayLight disabled:opacity-50"
          :disabled="currentPage === getPages"
          @click="incrementPage"
        >
          <img class="aspect-square w-[24px] select-none" src="/icons/chevron.svg" alt="Chevron Icon" />
        </button>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { postsStore } from '~/store/posts'

  import PostCard from '~/components/Home/Posts/PostCard.vue'

  const { posts, currentPage, getPages, getPaginatePosts } = storeToRefs(postsStore())
  const { fetchPosts } = postsStore()

  useAsyncData('posts', () => fetchPosts())

  const incrementPage = () => {
    if (currentPage.value !== getPages.value) currentPage.value += 1
  }
</script>

<style scoped lang="scss"></style>
