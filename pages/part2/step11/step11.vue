<template>
	<view class="box">
		<movable-area>
			<movable-view style="z-index: 1;" class="xzBox" direction="all" @change="onChange">
				<image id="xz" class="xz" src="../../../static/p2/zwx2.png" mode="widthFix"></image>
			</movable-view>
			<image id="door" class="door" src="../../../static/p2/door22.png" mode="heightFix"></image>
		</movable-area>
		<button @click="handleStart" type="default" size="mini" class="btn startBtn">开启</button>
		<button @click="handleClose" type="default" size="mini" class="btn closeBtn">关闭</button>

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
			time: '00:00',
			num: 0
		};
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
		handleStart() {
			uni.showToast({
				title: '操作结束！'
			});
		},
		handleClose() {},
		handleJia() {
			this.num += 1;
		},
		handleJian() {
			if (this.num == 0) {
				return;
			}
			this.num -= 1;
		},
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
						}
					});
				})
				.exec();
		},
		handleLeftClick() {
			// uni.navigateBack();
			uni.navigateTo({
				url: '/pages/part1/step10/step10'
			})
		},
		handleRightClick() {
			uni.navigateTo({
				url: '/pages/part1/step2/step2'
			});
		}
	}
};
</script>

<style scoped>
@import url('./step11.css');
</style>
