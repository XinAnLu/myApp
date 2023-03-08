<template>
	<view class="box">
		<movable-area>
			<movable-view class="xzBox" direction="all" @change="onChange"><image id="xz" class="xz" src="../../../static/p2/xz.png" mode="widthFix"></image></movable-view>
			<image id="door" class="door" src="../../../static/p2/door.png" mode="heightFix"></image>
		</movable-area>
		<button type="default" size="mini" class="btn startBtn">
			开启
		</button>
		<button type="default" size="mini" class="btn closeBtn">
			关闭
		</button>
		<view class="tit">
			传递舱外门
		</view>
		<view class="navBox">
			<image @click="handleLeftClick" class="pre" src="../../../static/p2/arrowLeft.png" mode="widthFix"></image>
			<image @click="handleRightClick" class="next" src="../../../static/p2/arrowRight.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	mounted() {
		this._xz = null;
		this._has = false;
		const query = uni.createSelectorQuery().in(this);
		query
			.select('#door')
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
				return false; // 未碰撞
			} else {
				// console.log("碰撞....")
				callback();
				return true; // 碰撞
			}
		},
		onChange: function(e) {
			const query = uni.createSelectorQuery().in(this);
			query
				.select('#xz')
				.boundingClientRect(data => {
					this.coll(this._xz, data, () => {
						if (!this._has) {
							this._has = true;
							console.log('碰撞了..');
						
							setTimeout(() => {
								uni.navigateTo({
									url: '/pages/part2/step3/step3'
								})
							}, 500)
						}
					});
				})
				.exec();
		},
		handleLeftClick() {
			// uni.navigateBack();
			uni.navigateTo({
				url: '/pages/part2/step1/step1'
			});
		},
		handleRightClick() {
			uni.navigateTo({
				url: '/pages/part2/step3/step3'
			})
		},
	}
};
</script>

<style scoped>
@import url('./step2.css');
</style>
