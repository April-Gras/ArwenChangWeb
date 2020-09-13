<template>
	<div class="outerWrapper">
		<div class="makeGrey header">
			<BuildingSection class="pageWrapper topContent">
				<BuildingHeadersBigger class="titleMarge">
					<span>HackMD</span>
					<br/>
					<span>Overview 重新設計</span>
				</BuildingHeadersBigger>
				<img src="/images/HackMD-Overview-MainPic.png">
			</BuildingSection>
		</div>
		<div class="pageWrapper">
			<div class="pills largeMarge">
				<BuildingPill
					v-for="(elem, index) in intro_pill_content"
					:key="index"
					class="pillElement"
				>
					<div class="pillTitle">{{ elem.title }}</div>
					<div class="pillText preWrap">{{ elem.text }}</div>
				</BuildingPill>
			</div>
			<BuildingSubsectionsNeutralTitle class="mediumMarge">
				<template v-slot:title>專案背景</template>
				<template v-slot:content>
					<span>目前的使用者們有不同類型的痛點，我們想知道：</span>
					<b>該如何決定優先解決哪些問題？用什麼方式解決最符合使用者的需要？</b>
					<span>我們希望能有效運用已知的資料，有系統地規劃接下來開發的方向。</span>
				</template>
			</BuildingSubsectionsNeutralTitle>
			<BuildingSubsectionsNeutralTitle class="largeMarge">
				<template v-slot:title>問題及目標</template>
				<template v-slot:content>
					<div>開發者面臨管理多個不同專案資料的問題。在使用過程中，如何快速在文件間切換、管理文件，對講求效率的使用者來說是最重要的事。</div>
					<div>我們的目標是優化筆記清單頁，確保使用者能更快地找到、分類筆記，並且為未來開發新功能、整合其它生產力工具做準備。</div>
				</template>
			</BuildingSubsectionsNeutralTitle>
		</div>
		<div class="makeNeutral">
			<div class="pageWrapper">
				<BuildingSubsectionsWhiteTitle>
					<template v-slot:title>專案重點</template>
					<template v-slot:content>
						<div class="bulletPoints">
							<BuildingBulletPoint
								class="bulletPoint"
								v-for="(elem, index) in main_points_content"
								:key="index"
								:index="index + 1"
							>
								<span v-html="elem"></span>
							</BuildingBulletPoint>
						</div>
					</template>
				</BuildingSubsectionsWhiteTitle>
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./indexControl.ts"></script>
<style scoped src="./index.css"></style>
<style scoped src="./index_gt_1000.css"></style>
