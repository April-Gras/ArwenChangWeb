<template>
	<nuxt-link
		:to="to"
		:style="style"
	>
		<slot></slot>
	</nuxt-link>
</template>
<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		computed: {
			style: function() {
				return ({ backgroundColor: `var(--color-${ this.color })` });
			}
		},
		props: {
			to		: {
				type		: String,
				required	: false,
				default		: '/',
			},
			color	: {
				type		: String,
				required	: true,
				validator	: function(color) {
					return [
						'grey',
						'teal-bg',
						'wine-bg',
						'brown-bg',
					].includes(color);
				}
			},
		}
	});
</script>