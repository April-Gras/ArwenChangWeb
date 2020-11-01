<template>
	<DoubleContent class="doublePictureContainer">
		<img
			v-for="(image_url, index) in url_set"
			:key="index"
			:src="image_url"
		/>
	</DoubleContent>
</template>
<script lang="ts">
import Vue from 'vue'

import DoubleContent from './doubleContent.vue';

export default Vue.extend({
	components: { DoubleContent },
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
	img {
		width: 100%;
		object-fit: contain;
		object-position: center;
		display: block;
	}
</style>