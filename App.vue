<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// 锁定横屏
			plus.screen.lockOrientation("landscape-primary");
			// 锁定竖屏
			// plus.screen.lockOrientation("portrait-primary");
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page{
		height: 100%;
	}
</style>
