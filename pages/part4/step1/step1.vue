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
	<image class="ditu" src="../../../static/p4/图片6.png"></image>
	<view class="tingdian" @click="tingdian()"></view>
	<view class="tingshui" @click="tingshui()"></view>
	<view class="huozai" @click="huozai()"></view>
	<view class="tongfeng" @click="tongfeng()"></view>
	<view class="dongwutaoyi" @click="dongwutaoyi()"></view>
	<view class="chuanran" @click="chuanran()"></view>
	<view class="yaoshang" @click="yaoshang()"></view>
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
	  dongwutaoyi() {
		  uni.navigateTo({
		  	url:'/pages/part4/step2/step2'
		  })
	  },
	  chuanran() {
		uni.navigateTo({
			url:'/pages/part4/step6/step6'
		})  
	  },
	  yaoshang() {
		 uni.navigateTo({
		 	url:'/pages/part4/step7/step7'
		 }) 
	  },
	  handleLeftClick() {
	  	// uni.navigateBack();
	  	uni.navigateTo({
	  		url: '/pages/part1/step1_1/step1_1'
	  	})
	  },
  },
};
</script>

<style lang="scss">
@import url('./step1.css');
</style>