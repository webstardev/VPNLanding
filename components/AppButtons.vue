<template>
	<div :class="`${wrapperClass} component-container`">
		<b-button class="btn-app google-play">
			<img src="../assets/btn-google-play.png" alt="Google Play"/>
			<div class="btn-text">
				<p>ANDROID APP ON</p>
				<h6>Google Play</h6>
			</div>
		</b-button>
		<b-button class="btn-app apple">
			<img src="../assets/btn-apple.png" alt="Apple"/>
			<div class="btn-text">
				<p>DOWNLOAD ON THE</p>
				<h6>App Store</h6>
			</div>
		</b-button>
	</div>
</template>

<script>
	export default {
		name: 'AppButtons',
		props: {
			wrapperClass: {
				type: String, default: ''
			}
		}
	}
</script>

<style scoped lang="scss">
	.component-container {
		display: flex;
	}

	.btn-app {
		background: #98CA4E !important;
		border-radius: 25px;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;

		width: 190px;
		height: 50px;
		outline: none;
		border: none;

		&.apple {
			margin: 0 0 0 20px;
		}

		.btn-text {
			display: flex;
			flex-direction: column;			
			margin-left: 15px;
			
			p {
				font-family: Montserrat;
				font-style: normal;
				font-weight: bold;
				font-size: 9px;
				line-height: 9px;
				display: flex;
				align-items: center;
				text-transform: uppercase;
				color: #FFFFFF;
				margin: 0;
			}

			h6 {
				font-family: Montserrat;
				font-style: normal;
				font-weight: bold;
				font-size: 16px;
				line-height: 16px;
				display: flex;
				align-items: center;
				color: #FFFFFF;
				margin: 8px 0 0 0;
			}
		}
	}		
</style>