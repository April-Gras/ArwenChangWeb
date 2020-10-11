<template>
	<div class="outerWrap">
		<PageHeader class="largeMarge" />
		<PageProjectContext class="largeMarge pageWrapper" />
		<PagePreview class="largeMarge"/>
		<BuildingSection class="pageWrapper mediumMarge">
			<BuildingSubsectionsCardNavigation />
		</BuildingSection>
	</div>
</template>
<script lang="ts" src="./youchuanControl.ts"></script>
<style scoped>
.makeBrownLight, .makeBrown, .makeGrey {
	width: 100%;
	overflow: hidden;
}

.makeBrown { background: var(--color-brown-bg); }
.makeBrownLight { background: var(--color-brown-light); }
.makeGrey { background-color: var(--color-grey); }
.makeGrey { padding: 60px 0px; }
</style>