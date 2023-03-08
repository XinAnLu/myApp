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
	<image class="ditu" src="../../../static/p1/5.png"></image>
	<view class="jianyijian" @click="jianyijian()"></view>
	<view class="huanchongjian" @click="huanchongjian()"></view>
	<view class="xixiaojian" @click="xixiaojian()"></view>
	<view class="ergeng" @click="ergeng()"></view>
	<view class="yigeng" @click="yigeng()"></view>
	<view class="qianshi" @click="qianshi()"></view>
	<view class="shiguyingjichuli" @click="shiguyingjichuli()"></view>
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
	  jianyijian() {
		  uni.navigateTo({
		  	url:'/pages/part2/step1/step1'
		  })
	  },
	  huanchongjian() {
		  uni.navigateTo({
		  	url:'/pages/part3/step1/step1'
		  })
	  },
	  xixiaojian() {
		  uni.navigateTo({
		  	url:'/pages/part3/step1/step1'
		  })
	  },
	  ergeng() {
		  uni.navigateTo({
		  	url:'/pages/part3/step1/step1'
		  })
	  },
	  yigeng() {
		  uni.navigateTo({
		  	url:'/pages/part3/step1/step1'
		  })
	  },
	  qianshi() {
		  uni.navigateTo({
		  	url:'/pages/part3/step1/step1'
		  })
	  },
	  shiguyingjichuli() {
		  uni.navigateTo({
			url:'/pages/part4/step1/step1'
		  })
	  }
  },
};
</script>

<style lang="scss">
@import url('./step3.css');
</style>