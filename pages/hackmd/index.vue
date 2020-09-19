<template>
	<div class="outerWrapper">
		<PageHeader class="header" />
		<PageProjectContext class="pageWrapper" />
		<PageBulletPoints class="makeNeutral largeMarge" />
		<PageProblemDefinition class="pageWrapper mediumMarge" />
		<PageRedesign class="pageWrapper largeMarge" />
		<PageComparaison class="largeMarge makeGrey" />
		<PageReflexions class="mediumMarge pageWrapper" />
		<BuildingSection class="pageWrapper">
			<BuildingSubsectionsCardNavigation />
		</BuildingSection>
	</div>
</template>
<script lang="ts" src="./indexControl.ts"></script>
<style scoped src="./index.css"></style>