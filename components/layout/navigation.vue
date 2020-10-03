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
			<BuildingButtonsBurger :expanded="inner_expand" />
		</div>
		<div v-else class="navTable">
			<nuxt-link to="/">作品</nuxt-link>
			<nuxt-link to="/about/">關於</nuxt-link>
			<a href="mailto:placeholder@placeholder.com">聯絡</a>
		</div>
		<Transition name="fade">
			<div
				class="dropDown"
				v-if="expand"
			>
				<div class="pageWrapper navigationHolder" @click="inner_expand = false">
					<NuxtLink to="/">
						<BuildingHeadersBig>作品</BuildingHeadersBig>
					</NuxtLink>
					<NuxtLink to="/">
						<BuildingHeadersBig>聯絡</BuildingHeadersBig>
					</NuxtLink>
					<NuxtLink to="/about/">
						<BuildingHeadersBig>關於</BuildingHeadersBig>
					</NuxtLink>
				</div>
			</div>
		</Transition>
	</nav>
</template>
<script lang="ts" src="./navigationControl.ts"></script>
<style scoped src="./navigation.css"></style>
<style scoped src="./navigation_gt_1000.css"></style>