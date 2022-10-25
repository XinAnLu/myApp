<template>
	<view class="box">

		<movable-area>
			<image id="xz" class="xz" src="../../../static/p2/shou.png" mode="widthFix"></image>
			<movable-view class="pzBox" direction="all" @change="onChange"><image id="pz" class="pz" src="../../../static/p2/pz.png" mode="heightFix"></image></movable-view>
		</movable-area>
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
			.select('#xz')
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
				.select('#pz')
				.boundingClientRect(data => {
					this.coll(this._xz, data, () => {
						if (!this._has) {
							this._has = true;
							console.log('碰撞了..');
							uni.navigateTo({
								url: '/pages/part2/step8/step8'
							})
						}
					});
				})
				.exec();
		},
		handleLeftClick() {
			// uni.navigateBack();
			uni.navigateTo({
				url: '/pages/part2/step6/step6'
			});
		},
		handleRightClick() {
			uni.navigateTo({
				url: '/pages/part2/step8/step8'
			})
		},
	}
};
</script>

<style scoped>
@import url('./step7.css');
</style>
