<template>
	<div class="makeGrey">
		<div class="pageWrapper">
			<div class="left">
				<img
					v-for="(src, index) in left_pictures"
					:key="index"
					:src="src"
				/>
			</div>
			<div class="right">
				<img
					v-for="(src, index) in right_pictures"
					:key="index"
					:src="src"
				/>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue'
	export default Vue.extend({
		computed: {
			left_pictures(): string[] {
				return [
					"YouchuanIndex_1.png",
					"YouchuanAbout_1.png",
					"YouchuanProduct3_1.png",
				].map(e => `/images/${e}`)
			},
			right_pictures(): string[] {
				return [
					"YouchuanProduct2_1.png",
					"YouchuanProduct_1.png",
					"YouchuanPopup_1.png",
				].map(e => `/images/${e}`)
			},
		}
	})
</script>
<style scoped>
	.pageWrapper {
		display: grid;
		gap: 32px;
		grid-template-columns: 1fr 1fr;
	}

	.left, .right {
		display: grid;
		gap: 20px;
		position: relative;
		overflow: hidden;
		grid-template-columns: 1fr;
		align-content: flex-start;
	}
</style>