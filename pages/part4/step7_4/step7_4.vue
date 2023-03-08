<template>
  <view class="question-wrap" :style="{ height: screenHeight }">
    <!-- 顶部导航 -->
    <u-navbar
      :title="null"
      :border-bottom="false"
      :is-fixed="false"
      :background="null"
      back-icon-color="#ffffff"
    >
    </u-navbar>
    <!-- 顶部导航 -->

    <!-- 内容区域 -->
	<image class="ditu" src="../../../static/p4/图片22.png"></image>
	<view class="gongzuotai" @click="gongzuotai()"></view>
	<view class="navBox">
		<image @click="handleLeftClick" class="pre" src="../../../static/p2/arrowLeft.png" mode="widthFix"></image>
		<image @click="handleRightClick" class="next" src="../../../static/p2/arrowRight.png" mode="widthFix"></image>
	</view>
    <!-- 内容区域 -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      //屏幕高度
      screenHeight: 0,
    };
  },
  onLoad() {
    this.screenHeight = uni.getSystemInfoSync().windowHeight;
	plus.screen.lockOrientation("landscape"); 
  },
  methods: {
	  gongzuotai() {
		  uni.navigateTo({
		  	url:'/pages/part4/step7_5/step7_5'
		  })
	  },
	  handleLeftClick() {
	  	// uni.navigateBack();
	  	uni.navigateTo({
	  		url: '/pages/part4/step7_3/step7_3'
	  	});
	  },
	  handleRightClick() {
	  	uni.navigateTo({
	  		url: '/pages/part4/step7_5/step7_5'
	  	})
	  },
  },
};
</script>

<style lang="scss">
@import url('./step7_4.css');
</style>