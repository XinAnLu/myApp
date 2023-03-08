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
	<image class="ditu" src="../../../static/p4/18.png"></image>
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
	  weitaochu() {
		  uni.navigateTo({
		  	url:''
		  })
	  },
	  handleLeftClick() {
	  	// uni.navigateBack();
	  	uni.navigateTo({
	  		url: '/pages/part4/step6/step6'
	  	});
	  },
	  handleRightClick() {
	  	uni.navigateTo({
	  		url: ''
	  	})
	  },
  },
};
</script>

<style lang="scss">
@import url('./step6_3.css');
</style>