<template>
	<div class="pageWrapper">
		<div class="introSection">
			<div class="textWrap">
				<BuildingHeadersBigger class="title">Arwen Chang</BuildingHeadersBigger>
				<div>我是張雅雯，一個多方嘗試的產品設計師，擁有設計、使用者研究、網頁切版方面的經驗。</div>
				<div class="preWrap">
					<span>我想加入以使用者為中心的產品團隊，打造能真正解決使用者問題的數位產品。</span>
					<span>能夠讓產品幫助並影響人們的生活，是我工作的成就感來源之一。</span>
				</div>
			</div>
			<div class="pictureWrap">
				<img src="/images/arwenProfile.png" />
			</div>
		</div>
		<BuildingSection class="resumeSectionWrap">
			<BuildingSubsectionsTealTitle>
				<template v-slot:title>工作經驗</template>
				<template v-slot:content>
					<div class="tripleContentWrap">
						<BuildingSubsectionsTripleContent>
							<template v-slot:title>HackMD (嗨筆記股份有限公司)</template>
							<template v-slot:subtitle>
								<span>UI / UX 設計師及專案管理</span>
								<span>2018 Jul. - 迄今</span>
							</template>
							<template v-slot:text>
								<span>身兼產品設計師、使用者經驗研究員及專案管理</span>
								<span>優化並開發全球月活躍用戶 50 萬的開發者協作工具</span>
							</template>
						</BuildingSubsectionsTripleContent>
						<BuildingSubsectionsTripleContent>
							<template v-slot:title>米果數位行銷</template>
							<template v-slot:subtitle>
								<span>網頁設計師</span>
								<span>2016 Nov. - 2018 Jun.</span>
							</template>
							<template v-slot:text>
								<span>與專案經理、工程師合作，設計超過 50 件企業形象網站及活動頁</span>
								<span>從提案、設計到網頁切版(含 RWD)都可以獨立作業完成</span>
							</template>
						</BuildingSubsectionsTripleContent>
						<BuildingSubsectionsTripleContent>
							<template v-slot:title>台灣自由行 g02tw (精銳合威股份有限公司)</template>
							<template v-slot:subtitle>
								<span>平面及網頁設計師</span>
								<span>2016 Mar. - 2016 Oct.</span>
							</template>
							<template v-slot:text>
								<span>負責台灣自由行線上旅遊服務的平面設計、吉祥物設計、網站活動頁設計及介面改版</span>
							</template>
						</BuildingSubsectionsTripleContent>
					</div>
				</template>
			</BuildingSubsectionsTealTitle>
			<BuildingSubsectionsTealTitle>
				<template v-slot:title>專業技能</template>
				<template v-slot:content>
					<div class="tripleContentWrap">
						<BuildingSubsectionsTripleContent>
							<template v-slot:title>設計技能</template>
							<template v-slot:text>
								<div class="pillHolder">
									<BuildingPill
										v-for="(elem, index) in conception_skills"
										:key="index"
									>{{ elem }}</BuildingPill>
								</div>
							</template>
						</BuildingSubsectionsTripleContent>
						<BuildingSubsectionsTripleContent>
							<template v-slot:title>工具</template>
							<template v-slot:text>
								<div class="pillHolder">
									<BuildingPill
										v-for="(elem, index) in tool_skills"
										:key="index"
									>{{ elem }}</BuildingPill>
								</div>
							</template>
						</BuildingSubsectionsTripleContent>
					</div>
				</template>
			</BuildingSubsectionsTealTitle>
			<BuildingSubsectionsTealTitle>
				<template v-slot:title>學歷</template>
				<template v-slot:content>
					<BuildingSubsectionsTripleContent>
						<template v-slot:title>臺北市立大學 視覺藝術學系</template>
						<template v-slot:subtitle>2011 - 2015</template>
					</BuildingSubsectionsTripleContent>
				</template>
			</BuildingSubsectionsTealTitle>
		</BuildingSection>
	</div>
</template>
<script lang="ts" src="./aboutControl.ts"></script>
<style scoped>
	.pageWrapper { padding-top: 60px; }

	.tripleContentWrap {
		display: grid;
		grid-gap: 40px;
		grid-template-columns: 1fr;
	}

	.resumeSectionWrap {
		display: grid;
		grid-gap: 60px;
		grid-template-columns: 1fr;
		padding: 80px 0px;
	}

	.pillHolder {
	    display: flex;
	    justify-content: flex-start;
	    align-items: flex-start;
	    flex-wrap: wrap;
	    margin-bottom: -10px;
	}

	.pillHolder > div {
		margin-bottom: 10px;
		margin-right: 10px;
	}

	.textWrap { text-align: center; }
	.textWrap > * { margin-bottom: 16px; }
	.textWrap > *:last-child { margin-bottom: 0px; }

	.textWrap { margin-bottom: 40px; }

	.pictureWrap {
		position: relative;
		width: 288px;
		height: 281px;
		background-color: #EBEBEB;
		margin: 0px auto;
	}

	.pictureWrap > img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		display: block;
		object-position: center;
	}

	.introSection { padding-bottom: 0px; }
</style>
<style scoped>
	@media screen and (min-width: 1000px) {
		.introSection {
			display: grid;
			flex-direction: row-reverse;
			grid-template-columns: 6fr 5fr;
			grid-auto-flow: dense;
		}

		.pictureWrap {
			width: 450px;
			height: 438px;
			margin: 0px 35px 0px 0px;
			position: relative;
		}

		.textWrap {
			grid-column-start: 2;
			text-align: left;
			margin-bottom: 0px;
			display: flex;
			justify-content: center;
			flex-direction: column;
		}
	}
</style>