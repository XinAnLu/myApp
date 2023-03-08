<template>
	<view class="box">
		<image class="ShiJian" src="../../../static/p1/图片3.png"></image>
		<view @click="shiyanshi" class="shiyanshi"></view>
		<view @click="SiYuShi" class="siyushi"></view>
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
		SiYuShi() {
			uni.navigateTo({
				url:'/pages/part1/step2/step2'
			})
		},
		shiyanshi() {
			uni.navigateTo({
				url:'/pages/part1/step3/step3'
			})
		}
	}
	
}
</script>

<style scoped>
@import url('./step1_2.css');
</style>
