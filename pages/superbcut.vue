<template>
	<div class="outerWrap">
		<PageHeader class="largeMarge" />
		<PageProjectContext class="pageWrapper largeMarge"/>
		<PageBulletPoints class="makeWine largeMarge"/>
		<PageRefactor class="pageWrapper largeMarge"/>
		<PageOldVersion class="makeGrey largeMarge"/>
		<PageNewVersion class="pageWrapper largeMarge"/>
		<PageLearnedAndReflected class="pageWrapper largeMarge"/>
		<BuildingSection class="pageWrapper mediumMarge">
			<BuildingSubsectionsCardNavigation />
		</BuildingSection>
	</div>
</template>
<script lang="ts" src="./superbcutControl.ts"></script>
<style scoped>
.makeWineLight, .makeWine, .makeGrey {
	width: 100%;
	overflow: hidden;
}

.makeWine { background: var(--color-wine-80); }
.makeWineLight { background: var(--color-wine-bg); }
.makeGrey { background-color: var(--color-grey); }
.makeWine, .makeGrey { padding: 60px 0px; }
</style>