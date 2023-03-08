<template>
	<view class="box">
		<movable-area>
			<view class="tit">将实验动物移入笼中</view>
			<image id="xz" class="xz" src="../../../static/p2/gz.png" mode="widthFix"></image>

			<image v-if="!showNzxs && end" id="xs" class="xs" src="../../../static/p2/xs.png" mode="widthFix"></image>

			<movable-view v-if="showNzxs" class="nzxsBox" direction="all" @change="onChange2">
				<image id="nzxs" class="nzxs" src="../../../static/p2/nzxs.png" mode="widthFix"></image>
			</movable-view>

			<movable-view v-if="!showNzxs && end" class="pzBox" direction="all" @change="onChange">
				<image id="pz" class="pz" src="../../../static/p2/nz.png" mode="heightFix"></image>
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
			showNzxs: false,
			end: true,
		};
	},
	mounted() {
		this._xz = null;
		this._xs = null;
		this._has = false;
		this._hasXs = false;
		const query = uni.createSelectorQuery().in(this);
		query
			.select('#xz')
			.boundingClientRect(data => {
				console.log('data1 = ', data);
				this._xz = data;
			})
			.exec();
		query
			.select('#xs')
			.boundingClientRect(data => {
				// console.log('xs data1 = ', data);
				this._xs = data;
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
					this.coll(this._xs, data, () => {
						if (!this._hasXs) {
							this._hasXs = true;
							// console.log('碰撞了..');
							this.showNzxs = true;
						}
					});
				})
				.exec();
		},
		onChange2: function(e) {
			const query = uni.createSelectorQuery().in(this);
			query
				.select('#nzxs')
				.boundingClientRect(data => {
					this.coll(this._xz, data, () => {
						if (!this._has) {
							this._has = true;
							// console.log('碰撞了..');
							this.showNzxs = false;
							this.end = false;
							uni.navigateTo({
								url: '/pages/part2/step9/step9'
							});
						}
					});
				})
				.exec();
		},
		handleLeftClick() {
			// uni.navigateBack();
			uni.navigateTo({
				url: '/pages/part2/step7/step7'
			});
		},
		handleRightClick() {
			uni.navigateTo({
				url: '/pages/part2/step9/step9'
			});
		}
	}
};
</script>

<style scoped>
@import url('./step8.css');
</style>
