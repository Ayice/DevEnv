<template>
  <footer id="footer" class="footer">
    <span>© 2020 All Rights Reserved | Reactive Angulers</span>
  </footer>
</template>

<script>
	export default {
		name: 'Header',
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	#footer {
		background-color: #355a93;
		width: 100%;
		height: 10vh;
		color: #fff;
		display: flex;
		align-content: center;
		justify-content: center;
		span {
			padding-top: 0.5rem;
		}
	}
</style>
