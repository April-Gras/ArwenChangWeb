<template>
	<div class="pageWrapper">
		<BuildingSection>
			<BuildingHeadersBiggest class="mainTitle">
				<span>我是 Arwen，</span>
				<span>一名產品設計師。</span>
			</BuildingHeadersBiggest>
			<BuildingHeadersRegular class="subtitle">我喜歡提供讓人感到愉悅的設計方案，並解決使用者的問題。</BuildingHeadersRegular>
			<BuildingButtonTeal>下載履歷</BuildingButtonTeal>
		</BuildingSection>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue';

	import BuildingSection			from '@/components/building/section.vue';
	import BuildingButtonTeal		from '@/components/building/buttons/teal.vue';
	import BuildingHeadersRegular	from '@/components/building/headers/regular.vue';

	import BuildingHeadersBig		from '@/components/building/headers/big.vue';
	import BuildingHeadersBigger	from '@/components/building/headers/bigger.vue';
	import BuildingHeadersBiggest	from '@/components/building/headers/biggest.vue';

	export default Vue.extend({
		components	: {
			BuildingSection,
			BuildingHeadersBiggest,
			BuildingHeadersRegular,
			BuildingButtonTeal,

			BuildingHeadersBig,
			BuildingHeadersBigger,
		},
	});
</script>
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
</style>