<template>
	<nav class="navigatorWrapper" :class="{ expand }">
		<NuxtLink to="/">
			<BuildingHeadersRegular
				class="bold"
				v-if="!expand"
			>ARWEN CHANG</BuildingHeadersRegular>
		</NuxtLink>
		<div
			class="burger"
			@click="inner_expand = !inner_expand"
			v-if="in_screen_range"
		>
			<BuildingButtonsBurger :expanded="inner_expand" />
		</div>
		<div v-else class="navTable">
			<NuxtLink
				v-for="config in links"
				:key="config.link"
				:to="config.link"
				:class="config.class"
			>{{ config.text }}</NuxtLink>
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
					<a href="mailto:placeholder@placeholder.com">
						<BuildingHeadersBig>聯絡</BuildingHeadersBig>
					</a>
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