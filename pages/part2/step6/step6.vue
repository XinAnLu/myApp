<template>
	<view class="box">
		<movable-area>
			<image id="xz" class="xz" src="../../../static/p2/xz.png" mode="widthFix"></image>
			<movable-view class="pzBox" direction="all" @change="onChange">
				<image id="pz" @click="showSsd = true" v-if="!showSsd" class="pz" src="../../../static/p2/ssdhz.png" mode="heightFix"></image>

				<image id="ssd" v-if="showSsd" class="ssd" src="../../../static/p2/ssd.png" mode="heightFix"></image>
			</movable-view>
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
		return {
			showSsd: false
		};
	},
	mounted() {
		this._s1 = false;
		this._s2 = false;
		this._last = null;
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
			callback();
			if (domA.left > domB.right || domA.top > domB.bottom || domA.right < domB.left || domA.bottom < domB.top) {
				if (domA.right < domB.left && this._s2) {
					this._s1 = true;
				}
				return false; // 未碰撞
			} else {
				// console.log("碰撞....")
				if (domB.left > domA.left) {
					this._s2 = true;
				}
				return true; // 碰撞
			}
		},
		onChange: function(e) {
			const query = uni.createSelectorQuery().in(this);
			query
				.select('#ssd')
				.boundingClientRect(data => {
					this.coll(this._xz, data, () => {
						if (!this._has) {
							if (this._s1 && this._s2) {
								this._has = true;
								console.log('切割成功！');
								uni.navigateTo({
									url: '/pages/part2/step7/step7'
								})
							}
						}
					});
				})
				.exec();
		},
		handleLeftClick() {
			// uni.navigateBack();
			uni.navigateTo({
				url: '/pages/part2/step5/step5'
			})
		},
		handleRightClick() {
			uni.navigateTo({
				url: '/pages/part2/step7/step7'
			});
		}
	}
};
</script>

<style scoped>
@import url('./step6.css');
</style>
