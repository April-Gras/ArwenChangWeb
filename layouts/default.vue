<template>
	<div class="layoutWrapper">
		<navigation/>
		<Nuxt/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { mapMutations } from 'vuex';

	import navigation from '@/components/layout/navigation.vue';

	export default Vue.extend({
		components: { navigation },
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
						x_size: window.outerHeight,
						y_size: window.outerWidth
					});
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
	.lmao {
		height: 9000px;
		background-color: green;
	}
</style>
