<template>
	<view class="box">
		<view class="tit">请选择进行操作的工作台</view>
		<image @click="clickCzt1" class="czt1" src="../../../static/p2/czt1.png" mode="widthFix"></image>
		<image @click="clickCzt2" class="czt2" src="../../../static/p2/czt2.png" mode="widthFix"></image>
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
			time: '00:00'
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
				callback();
				return false; // 未碰撞
			} else {
				// console.log("碰撞....")
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
							this._has = true;
							console.log('移出了门...');
						}
					});
				})
				.exec();
		},
		clickCzt1() {
			uni.showToast({
				title: '操作正确！'
			});
			uni.navigateTo({
				url: '/pages/part2/step6/step6'
			});
		},
		clickCzt2() {
			uni.showToast({
				title: '操作错误！',
				icon: 'error'
			});
		},
		handleLeftClick() {
			// uni.navigateBack();
			uni.navigateTo({
				url: '/pages/part2/step4/step4'
			});
		},
		handleRightClick() {
			uni.navigateTo({
				url: '/pages/part2/step6/step6'
			});
		}
	}
};
</script>

<style scoped>
@import url('./step5.css');
</style>
