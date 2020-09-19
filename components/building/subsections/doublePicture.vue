<template>
	<div class="doublePictureContainer">
		<img
			v-for="(image_url, index) in url_set"
			:key="index"
			:src="image_url"
		/>
	</div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	props: {
		url_set: {
			type: Array,
			required: true,
			validator: function(value) {
				return value.every(e => typeof e === 'string') && value.length === 2
			}
		}
	}
})
</script>
<style scoped>
	.doublePictureContainer {
		display: grid;
		position: relative;
		width: 100%;
		grid-template-columns: 1fr;
		grid-gap: 16px;
	}

	img {
		width: 100%;
		object-fit: contain;
		object-position: center;
	}
</style>
<style scoped>
	@media screen and (min-width: 480px) {
		.doublePictureContainer { grid-template-columns: 1fr 1fr; }
	}
</style>
<style scoped>
	@media screen and (min-width: 1000px) {
		.doublePictureContainer { grid-gap: 32px; }
	}
</style>