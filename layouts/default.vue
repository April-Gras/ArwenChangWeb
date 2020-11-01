<template>
	<div class="layoutWrapper">
		<ScrollToTop />
		<Navigation />
		<Nuxt/>
		<div class="footer">© Arwen Chang 2020</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { mapMutations } from 'vuex';

	import Navigation from '@/components/layout/navigation.vue';
	import ScrollToTop from "@/components/layout/scrollToTop.vue";

	export default Vue.extend({
		components: {
			Navigation,
			ScrollToTop
		},
		data: function() {
			return ({
				resizeEventHolder : null as any,
			})
		},
		mounted: function() {
			if (process.client)
			{
				const vm = this;

				this.resizeEventHolder = window.addEventListener('resize', function() {
					vm.SET_SCREEN_SIZE({
						x_size: window.outerWidth,
						y_size: window.outerHeight
					});
				});
				vm.SET_SCREEN_SIZE({
					x_size: window.outerWidth,
					y_size: window.outerHeight
				});
			}
		},
		beforeDestroy: function() {
			if (process.client && this.resizeEventHolder !== null)
				window.removeEventListener('resize', this.resizeEventHolder, {});
		},
		methods: {
			...mapMutations({
				SET_SCREEN_SIZE: 'resize/SET_SCREEN_SIZE',
			}),
		},
	});
</script>

<style scoped>
	.footer {
		padding: 60px;
		text-align: center;
		font-size: var(--font-size-small);
		color: var(--color-darkest);
	}

	.layoutWrapper { overflow: hidden; }
</style>
