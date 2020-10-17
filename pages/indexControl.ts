import Vue from 'vue';
import { mapState } from 'vuex';

import BuildingSection from '@/components/building/section.vue';
import BuildingButtonTeal from '@/components/building/buttons/teal.vue';
import BuildingCardsPreview from '@/components/building/cards/preview.vue';
import BuildingHeadersBiggest from '@/components/building/headers/biggest.vue';

export default Vue.extend({
	components: {
		BuildingSection,
		BuildingButtonTeal,
		BuildingCardsPreview,
		BuildingHeadersBiggest,
	},
	computed: {
		...mapState({
			SCREEN_X: (state: any) => state.resize.screen_x,
		}),
		hackmd_comments_add_style: function (): object {
			if (this.SCREEN_X <= 400 || this.SCREEN_X >= 600) {
				return ({
					backgroundSize: 'contain',
					backgroundPosition: 'bottom center',
				});
			}
			else if (this.SCREEN_X < 480) return ({});
			else return ({ backgroundSize: '100%' });
		},
		shared_bottom_styles: function (): object {
			if (this.SCREEN_X <= 380 || this.SCREEN_X >= 600) {
				return ({
					backgroundSize: 'calc(100% - 74px)',
					backgroundPosition: 'bottom center',
				});
			}
			else return ({
				backgroundSize: '280px',
				backgroundPosition: 'bottom center',
			});
		},
		preview_cards_config: function (): object {
			return [{
				date: 2019,
				title: 'HackMD\nOverview 重新設計',
				subtitle: '搜集使用者的回饋以優化介面，提升產品的易用性',
				props: {
					color: 'grey',
					background_img_url: '/images/hackmdpreview-bg.png',
					to: '/hackmd/',
					add_style: {
						backgroundPositionX: this.SCREEN_X < 1000 ? 'right' : '113px',
						backgroundPositionY: 'bottom',
						backgroundSize: this.SCREEN_X < 600 ? '232px' : this.SCREEN_X < 1000 ? 'calc(100% - 56px)' : '340px',
					},
				}
			}, {
				date: 2020,
				title: 'HackMD\n團隊協作留言功能',
				subtitle: '打造一個即時、操作簡單的文件留言功能',
				props: {
					color: 'teal-bg',
					background_img_url: '/images/hackmd-bg.png',
					to: '/hackmd/comments/',
					add_style: this.hackmd_comments_add_style,
				}
			}, {
				date: 2020,
				title: '好剪才職能訓練所\n課程購買流程',
				subtitle: '改善既有的購買流程，讓使用者更容易找到課程並付費購買',
				props: {
					color: 'wine-bg',
					background_img_url: '/images/project3-bg.png',
					to: '/superbcut/',
					add_style: this.shared_bottom_styles,
				}
			}, {
				date: 2017,
				title: '祐全貿易\n形象網站設計',
				subtitle: '透過明亮的色調和乾淨的設計，傳遞出年輕、快速的品牌理念',
				props: {
					color: 'brown-bg',
					background_img_url: '/images/project4-bg.png',
					to: '/youchuan/',
					add_style: this.shared_bottom_styles,
				}
			}];
		},
	}
});
