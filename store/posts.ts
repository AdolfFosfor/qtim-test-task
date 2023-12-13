import { defineStore } from 'pinia'

interface Post {
  id: string
  createdAt: string
  title: string
  preview: string
  image: string
  description: string
}
export const postsStore = defineStore('posts', {
  state: () => ({
    posts: [] as Post[],
    post: {} as Post,

    filteredPosts: [] as Post[],
    currentPage: 1 as number,
    itemsPerPage: 8 as number,
  }),
  getters: {
    getPages(): Number {
      return Math.round((this.posts.length + 1) / 8)
    },
    getPaginatePosts(): Post[] {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage
      const endIndex = startIndex + this.itemsPerPage
      return this.posts.slice(startIndex, endIndex)
    },
  },
  actions: {
    async fetchPost(id: string) {
      const { error, data } = await useFetch(`${useRuntimeConfig().app.backend}/posts/${id}`)
      if (error.value) return console.error(error.value)

      this.post = data.value as Post
    },
    async fetchPosts() {
      const { error, data } = await useFetch(`${useRuntimeConfig().app.backend}/posts/`)
      if (error.value) return console.error(error.value)

      this.posts = data.value as Post[]
    },
  },
})
