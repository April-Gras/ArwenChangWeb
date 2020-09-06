<template>
	<div class="outerWrapper">
		<BuildingSection class="pageWrapper topContent">
			<BuildingHeadersBigger>
				<span>HackMD</span>
				<br/>
				<span>Overview 重新設計</span>
			</BuildingHeadersBigger>
			<img src="/images/HackMD-Overview-MainPic.png">
		</BuildingSection>
		<div class="pageWrapper">
			
		</div>
	</div>
</template>
<script lang="ts" src="./indexControl.ts"></script>
<style scoped>
	.topContent, .outerWrapper {
		background-color: var(--color-grey);
	}

	.topContent {
		text-align: center;
		padding-top: 64px;
		padding-bottom: 0px;
		margin-bottom: 0px;
		display: flex;
		flex-direction: column;
	}

	.topContent > h2 {
		margin-bottom: 34px;
	}

	.topContent > img {
		width: 100%;
		max-width: 787px;
		position: relative;
		object-position: center;
		object-fit: contain;
		margin: 0px auto;
	}
</style>