<template>
	<div class="pageWrapper">
		<BuildingSection class="introSection">
			<div class="textWrap">
				<BuildingHeadersBiggest class="mainTitle">
					<span>我是 Arwen，</span>
					<br class="desktopOnly"/>
					<span>一名產品設計師。</span>
				</BuildingHeadersBiggest>
				<div class="subtitle">
					<span>我喜歡提供讓人感到愉悅的設計方案，</span>
					<br class="desktopOnly"/>
					<span>並解決使用者的問題。</span>
				</div>
				<div class="resumeButton">
					<a href="/images/ArwenChang-Resume.pdf" target="_blank">
						<BuildingButtonTeal>
							<span class="btnText">下載履歷</span>
						</BuildingButtonTeal>
					</a>
				</div>
			</div>
			<div class="additionalPicture">
				<img src="/images/Home-pic_1.png"/>
			</div>
		</BuildingSection>
		<BuildingSection class="gridSection">
			<BuildingCardsPreview
				class="previewCard"
				v-for="(card, index) in preview_cards_config"
				:key="index"
				v-bind="card.props"
			>
				<template v-slot:date>{{ card.date }}</template>
				<template v-slot:title>{{ card.title }}</template>
				<template v-slot:subtitle>{{ card.subtitle }}</template>
			</BuildingCardsPreview>
		</BuildingSection>
	</div>
</template>
<script lang="ts" src="./indexControl.ts"></script>
<style scoped>
	.mainTitle {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-bottom: 16px;
	}

	.subtitle {
		text-align: center;
		margin-bottom: 40px;
	}

	.button { margin: 0px auto; }

	.gridSection {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-gap: var(--grid-gap);
	}

	.additionalPicture { display: none; }

</style>
<style scoped>
@media screen and (min-width: 600px) {
	.gridSection {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: var(--grid-gap);
	}
}
</style>
<style scoped>
@media screen and (min-width: 1000px) {
	.introSection {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: var(--grid-gap);
	}

	.mainTitle { display: block; }

	.additionalPicture {
		display: block;
		height: 375px;
		width: 100%;
		overflow: hidden;
	}

	.resumeButton {
		display: inline;
	}

	.gridSection {
		padding-top: 120px;
		padding-bottom: 120px;
	}

	.subtitle {
		text-align: left;
		font-style: normal;
		font-weight: normal;
		font-size: 20px;
		line-height: 130%;
	}

	.button { margin: 0px; }

	.resumeButton {
		display: block;
		margin-right: auto;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
	}

	.resumeButton > a {
		display: block;
	}

	.additionalPicture > img {
		width: 100%;
		height: 100%;
		position: relative;
		object-fit: contain;
		object-position: center;
		display: block;
	}
}
</style>