<template>
	<view class="box">
		<image class="zhujiemian" src="../../../static/p1/图片1.png"></image>
		<view @click="ShiJian" class="ShiJian"></view>
		<view @click="PingGu" class="PingGu"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	mounted() {

	},
	onLoad() {
		// #ifdef APP-PLUS
		   plus.screen.lockOrientation('default'); 
		// #endif
	},
	onUnload() {
		// #ifdef APP-PLUS
		   plus.screen.lockOrientation('portrait-primary'); 
		// #endif
	},
	methods: {
		PingGu() {
			uni.navigateTo({
				url:'/pages/part1/step1_1/step1_1'
			})
		},
		ShiJian() {
			uni.navigateTo({
				url:'/pages/part1/step1_2/step1_2'
			})
		}
	}
	
}
</script>

<style scoped>
@import url('./step1.css');
</style>
