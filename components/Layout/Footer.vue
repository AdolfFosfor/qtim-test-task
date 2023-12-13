<template>
  <footer id="footer" class="flex w-full items-center justify-center overflow-hidden bg-purpleLight pt-[140px]">
    <article class="container flex-col">
      <div class="flex justify-between">
        <div class="flex flex-col gap-[56px]">
          <p class="text-[16px]">Is there a project?</p>
          <h3 class="text-[112px] leading-[112px] underline decoration-2 underline-offset-[12px]">
            Let’s work <br />
            together
          </h3>
        </div>

        <div class="mb-[273px] mr-[230px] mt-[75px] flex max-w-[152px] flex-col gap-[36px]">
          <div class="flex flex-col items-start">
            <p class="mb-[12px]">For all questions</p>
            <a class="mb-[4px] hover:underline" href="tel:+79202780068" target="_blank">+7 (920) 278—00—68</a>
            <a class="hover:underline" href="mailto:qtim@agency.com" target="_blank">qtim@agency.com</a>
          </div>
          <div class="flex flex-col items-start">
            <p class="mb-[12px]">Office in Russia</p>
            <p class="mb-[8px]">139 Ruben Station Lake Drew, NM 52678</p>
            <a
              class="trs flex items-center justify-center hover:scale-110"
              href="https://maps.app.goo.gl/BYyCeEAy3B5Wapwe7"
              target="_blank"
            >
              <img class="aspect-square w-[32px]" src="/icons/button_location.svg" alt="Location Button" />
            </a>
          </div>
          <div class="flex flex-col items-start">
            <p class="mb-[12px]">Office in Dubai</p>
            <p class="mb-[8px]">139 Ruben Station Lake Drew, NM 52678</p>
            <a
              class="trs flex items-center justify-center hover:scale-110"
              href="https://maps.app.goo.gl/BYyCeEAy3B5Wapwe7"
              target="_blank"
            >
              <img class="aspect-square w-[32px]" src="/icons/button_location.svg" alt="Location Button" />
            </a>
          </div>
        </div>
      </div>

      <div class="relative mb-[30px] flex items-center justify-between">
        <div class="flex items-center gap-[32px]">
          <a
            v-for="(link, index) of footerLinks.slice(0, 3)"
            :key="`Footer Link ${index}`"
            class="underline underline-offset-4"
            :href="link.link"
          >
            {{ link.name }}
          </a>
        </div>

        <button
          class="trs absolute left-[calc(50%_-_179px)] flex aspect-square w-[358px] items-center justify-center rounded-full bg-darker text-[32px] text-white hover:scale-110"
        >
          Go
        </button>

        <div class="flex items-center gap-[32px]">
          <a
            v-for="(link, index) of footerLinks.slice(3)"
            :key="`Footer Link ${index}`"
            class="underline underline-offset-4"
            :href="link.link"
          >
            {{ link.name }}
          </a>
        </div>
      </div>
    </article>
  </footer>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { indexStore } from '~/store'

  const { footerLinks } = storeToRefs(indexStore())
</script>

<style lang="scss">
  h3 {
  }
</style>
