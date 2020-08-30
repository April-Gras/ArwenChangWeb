<template>
	<nav class="navigatorWrapper" :class="{ expand }">
		<BuildingHeadersRegular
			class="bold"
			v-if="!expand"
		>ARWEN CHANG</BuildingHeadersRegular>
		<div
			class="burger"
			@click="inner_expand = !inner_expand"
			v-if="in_screen_range"
		>
			<transition name="fade" mode="out-in">
				<div
					key="not_expanded"
					class="icon"
					v-if="!expand"
				>a</div>
				<div
					key="expanded"
					class="icon"
					v-else
				>b</div>
			</transition>
		</div>
		<div v-else class="navTable">
			<nuxt-link to="/">作品</nuxt-link>
			<nuxt-link to="/about/">關於</nuxt-link>
			<a href="mailto:placeholder@placeholder.com">聯絡</a>
		</div>
		<transition name="fade">
			<div
				class="dropDown"
				v-if="expand"
			>
				<div class="pageWrapper navigationHolder">
					<BuildingHeadersBig>作品</BuildingHeadersBig>
					<BuildingHeadersBig>聯絡</BuildingHeadersBig>
					<BuildingHeadersBig>關於</BuildingHeadersBig>
				</div>
			</div>
		</transition>
	</nav>
</template>
<script lang="ts" src="./navigationControl.ts"></script>
<style scoped src="./navigation.css"></style>
<style scoped src="./navigation_gt_1000.css"></style>