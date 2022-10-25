<template>
	<view class="box">
		<image class="zhujiemian" src="../../../static/p1/zhujiemian.png"></image>
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
		}
	}
	
}
</script>

<style scoped>
@import url('./step1.css');
</style>
