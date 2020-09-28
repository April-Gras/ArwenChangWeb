<template>
	<div class="outerWrapper">
		<PageHeader class="largeMarge" />
		<PageProjectContext class="hugeMarge pageWrapper" />
		<PageBulletPoints class="makeTeal hugeMarge" />
		<PageRefactor class="mediumMarge pageWrapper" />
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
</style>