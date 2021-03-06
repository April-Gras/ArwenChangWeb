<template>
	<div class="outerWrapper">
		<PageHeader class="largeMarge" />
		<PageProjectContext class="largeMarge pageWrapper" />
		<PageBulletPoints class="makeTeal" />
		<PageOldVersion class="makeGrey largeMarge"/>
		<PageRefactor class="largeMarge pageWrapper" />
		<PageFinalProduct />
		<BuildingSection class="pageWrapper mediumMarge">
			<BuildingSubsectionsCardNavigation />
		</BuildingSection>
	</div>
</template>
<script lang="ts" src="./commentsControl.ts"></script>
<style scoped>
.makeTealLight, .makeTeal {
	width: 100%;
	overflow: hidden;
}

.makeTeal {
	background: var(--color-teal-80);
	padding: 60px 0px;
}
.makeTealLight { background: var(--color-teal-bg); }

.makeGrey {
	padding-top: 60px;
	padding-bottom: 60px;
	background: var(--color-grey);
}
</style>