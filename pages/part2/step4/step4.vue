<template>
	<view class="box">
		<movable-area>
			<movable-view @change="onChange" direction="all" class="hzBox"><image id="hz" class="hz" src="../../../static/p2/xz.png" mode="widthFix"></image></movable-view>
			<image id="door3" class="door3" src="../../../static/p2/door3.png" mode="widthFix"></image>
		</movable-area>
		<!-- <movable-area>
			<movable-view class="xzBox" direction="all" @change="onChange"><image id="xz" class="xz" src="../../../static/p2/zwx.png" mode="widthFix"></image>
			
			<view class="time">
				00:00
			</view>
			<view @click="handleJia" class="jia">
				
			</view>
			<view @click="handleJian" class="jia jian">
				
			</view>
			
			</movable-view>
			<image id="door" class="door" src="../../../static/p2/door2.png" mode="heightFix"></image>
		</movable-area>
		<button @click="handleStart" type="default" size="mini" class="btn startBtn">
			开启
		</button>
		<button @click="handleClose" type="default" size="mini" class="btn closeBtn">
			关闭
		</button>
		<view class="tit">
			{{time}}
		</view>
 -->
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
							uni.navigateTo({
								url: '/pages/part2/step5/step5'
							})
						}
					});
				})
				.exec();
		},
		handleLeftClick() {
			// uni.navigateBack();
			uni.navigateTo({
				url: '/pages/part2/step3/step3'
			});
		},
		handleRightClick() {
			uni.navigateTo({
				url: '/pages/part2/step5/step5'
			})
		},
	}
};
</script>

<style scoped>
@import url('./step4.css');
</style>
