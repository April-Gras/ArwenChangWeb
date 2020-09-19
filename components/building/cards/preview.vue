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
		<BuildingHeadersBig class="title preWrap">
			<slot name="title"></slot>
		</BuildingHeadersBig>
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
</style>
<style scoped>
	@media screen and (min-width: 600px) {
		.buildingCardPreviewWrapper { height: 580px; }
	}
</style>