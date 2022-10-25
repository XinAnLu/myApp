<template>
	<view class="box">
		<view class="tit">内门</view>
		<movable-area>
			<movable-view @change="onChange" direction="all" class="hzBox"><image id="hz" class="hz" src="../../../static/p2/xz.png" mode="widthFix"></image></movable-view>
			<image id="door3" class="door3" src="../../../static/p2/door3.png" mode="widthFix"></image>
		</movable-area>
		<image @click="playVoice" class="ml" src="../../../static/p2/ml.png" mode="widthFix"></image>
		<view class="navBox">
			<image @click="handleLeftClick" class="pre" src="../../../static/p2/arrowLeft.png" mode="widthFix"></image>
			<image @click="handleRightClick" class="next" src="../../../static/p2/arrowRight.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
import mlMp3 from '../../../static/ml.mp3';
export default {
	data() {
		return {
			time: '00:00',
			mlMp3
		};
	},
	mounted() {
		this._xz = null;
		this._has = false;
		// 查询元素的坐标位置
		const query = uni.createSelectorQuery().in(this);
		query
			.select('#door3')
			.boundingClientRect(data => {
				console.log('data1 = ', data);
				this._xz = data;
			})
			.exec();
	},
	methods: {
		// 碰撞检测, target目标坐标 drag拖拽的目标
		coll(domA, domB, callback) {
			if (domA.left > domB.right || domA.top > domB.bottom || domA.right < domB.left || domA.bottom < domB.top) {
				// console.log("未碰撞")

				return false; // 未碰撞
			} else {
				// console.log("碰撞....")
				callback();
				return true; // 碰撞
			}
		},
		onChange: function(e) {
			// console.log("移动了...")
			const query = uni.createSelectorQuery().in(this);
			query
				.select('#hz')
				.boundingClientRect(data => {
					this.coll(this._xz, data, () => {
						if (!this._has) {
							uni.navigateTo({
								url: '/pages/part2/step10/step10'
							});
						}
					});
				})
				.exec();
		},
		handleLeftClick() {
			// uni.navigateBack();
			uni.navigateTo({
				url: '/pages/part2/step8/step8'
			});
		},
		handleRightClick() {
			uni.navigateTo({
				url: '/pages/part2/step10/step10'
			});
		},
		playVoice() {
			const innerAudioContext = uni.createInnerAudioContext();
			innerAudioContext.autoplay = true;
			innerAudioContext.src = mlMp3;
		}
	}
};
</script>

<style scoped>
@import url('./step9.css');
</style>
