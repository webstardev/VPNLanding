<template>
	<div :class="`${wrapperClass} component-container`">
		<a 
			class="btn-app google-play"
			href="https://play.google.com/store/apps/details?id=com.blindcut.dsdefender.vpn"
			target="_new"
		>
			<img src="../assets/btn-google-play.png" alt="Google Play"/>
			<div class="btn-text">
				<p>ANDROID APP ON</p>
				<h6>Google Play</h6>
			</div>
		</a>
		<a 
			class="btn-app apple"
			href="https://apps.apple.com/us/app/id1501838199" 
			target="_new"
		>
			<img src="../assets/btn-apple.png" alt="Apple"/>
			<div class="btn-text">
				<p>DOWNLOAD ON THE</p>
				<h6>App Store</h6>
			</div>
		</a>
	</div>
</template>

<script>
	export default {
		name: 'app-buttons',
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
		@media screen and (max-width: 479px) {
			flex-direction: column;
		}
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
		text-decoration: none;

		&.apple {
			margin: 0 0 0 20px;

			@media screen and (max-width: 479px) {
				margin: 0;
			}
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

		@media screen and (max-width: 479px) {
			margin-bottom: 20px;
		}
	}		
</style>