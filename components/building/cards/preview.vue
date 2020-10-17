<template>
	<CardColor
		class="buildingCardPreviewWrapper"
		:style="computed_style"
		:to="to"
		:color="color"
		@mouseenter.native="hovered = true"
		@mouseleave.native="hovered = false"
	>
		<div class="date">
			<slot name="date"></slot>
		</div>
		<BuildingHeadersBigger class="title preWrap">
			<slot name="title"></slot>
		</BuildingHeadersBigger>
		<div class="subtitle">
			<slot name="subtitle"></slot>
		</div>
		<transition
			name="fade-up-down"
			mode="out-in"
		>
			<BuildingButtonTeal
				class="btnWrapper"
				v-if="hovered && SCREEN_X >= 1000"
			>了解專案內容</BuildingButtonTeal>
		</transition>
	</CardColor>
</template>
<script lang="ts" src="./previewControl.ts"></script>
<style scoped>
	.buildingCardPreviewWrapper {
		padding: 24px;
		height: 440px;
		display: block;
		position: relative;
		background-repeat: no-repeat;
	}

	.date {
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 8px;
		color: var(--color-secondary);
		line-height: 26px;
	}

	.title {
		margin-bottom: 16px;
	}

	.btnWrapper {
		position: absolute;
		bottom: 40px;
		left: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: calc(100% - 80px);
	}

	.btnWrapper {
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	}
</style>
<style scoped>
	@media screen and (min-width: 600px) {
		.buildingCardPreviewWrapper {
			max-height: 580px;
			height: 580px;
			box-sizing: border-box;
		}
	}
</style>