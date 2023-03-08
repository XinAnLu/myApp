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
	<image class="ditu" src="../../../static/p4/图片7.png"></image>
	<view class="weitaochu" @click="weitaochu()"></view>
	<view class="yitaochu" @click="yitaochu()"></view>
	<view class="navBox">
		<image @click="handleLeftClick" class="pre" src="../../../static/p2/arrowLeft.png" mode="widthFix"></image>
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
	  weitaochu() {
		  uni.navigateTo({
		  	url:'/pages/part4/step3/step3'
		  })
	  },
	  yitaochu() {
		uni.navigateTo({
			url:'/pages/part4/step5/step5'
		})  
	  },
	  handleLeftClick() {
	  	// uni.navigateBack();
	  	uni.navigateTo({
	  		url: '/pages/part4/step1/step1'
	  	})
	  },
  },
};
</script>

<style lang="scss">
@import url('./step2.css');
</style>