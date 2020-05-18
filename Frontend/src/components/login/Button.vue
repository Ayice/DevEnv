<template>
  <button class="button">{{ btntext }}</button>
</template>

<script>
	export default {
		name: 'Button',
		props: {
			btntext: String,
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	button {
		width: fit-content;
		padding: 0 2em;
	}
</style>
