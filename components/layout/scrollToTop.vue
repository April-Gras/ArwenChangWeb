<template>
  <transition name="fade" mode="out-in">
    <div
      class="scrollToTopWrapper"
      v-if="canDisplay"
      @click="goToTop"
      key="container"
    >
      <img src="/images/arrowUp.png" />
    </div>
  </transition>
</template>
<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      pathHasScrollUp: [
				"/youchuan/",
				"/hackmd/",
				"/hackmd/comments/",
				"/superbcut/",
			] as string[],
    }
  },
  computed: {
    canDisplay(): boolean {
      return this.pathHasScrollUp.includes(this.$route.path)
    },
  },
  methods: {
    goToTop(): void {
      if (process.client)
        window.scrollTo(0, 0)
    }
  }
})
</script>
<style scoped>
.scrollToTopWrapper {
  position: fixed;
  height: 40px;
  width: 40px;
  bottom: 40px;
  right: 40px;
  border: 1px solid var(--color-teal);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-white);
  z-index: 9999;
}

img {
  display: block;
  width: 100%;
  height: 100%;
  max-width: 12px;
  object-fit: contain;
  object-position: center;
}
</style>