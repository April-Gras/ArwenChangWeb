<template>
	<div class="trippleCardWrapper">
		<div class="slideContainer">
			<div class="slider">
				<div
					class="element"
					v-for="(element, index) in config"
					:key="index"
				>
					<BuildingPill class="bigGapMarge pillOuterWrap">
						<img :src="element.url" />
					</BuildingPill>
					<div class="title gapMarge">{{ element.title }}</div>
					<div class="text preWrap gapMarge">{{ element.text }}</div>
					<div class="text preWrap">{{ element.subtext }}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue';

	import BuildingPill from '@/components/building/pill.vue';

	export default Vue.extend({
		components: {
			BuildingPill,
		},
		props: {
			config: {
				type: Array,
				required: true,
				validator: function(value) {
					return [
						{ key: 'title', type: 'string' },
						{ key : 'text', type: 'string' },
						{ key : 'subtext', type: 'string' },
						{ key : 'url', type: 'string' }
					].every((check) => {
						const check_key: any = check.key;
						const checked_type: string = typeof value[check_key];

						return check.type === typeof checked_type;
					}) && value.length === 3;
				},
			}
		}
	})
</script>
<style scoped>
	.element { overflow: hidden; }

	.title {
		font-weight: 600;
		color: var(--color-darker);
	}

	.trippleCardWrapper {
		position: relative;
	}

	.pillOuterWrap {
		position: relative;
		width: 100%;
		overflow: hidden;
	}

	.pillOuterWrap > img {
		width: 100%;
		object-fit: contain;
		object-position: center;
	}

	.text {
		font-size: var(--font-size-small);
		color: var(--color-darker);
		opacity: 0.8;
	}

	.slideContainer {
		position: relative;
		overflow-y: auto;
	}


	.slider {
		display: grid;
		grid-gap: 20px;
		grid-template-columns: repeat(3, 240px);
	}

</style>
<style scoped>
	@media screen and (min-width: 1000px) {
		.trippleCardWrapper { width: 100%; }

		.slider { grid-gap: 30px; }
	}
</style>