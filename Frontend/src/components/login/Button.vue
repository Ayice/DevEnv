<template>
  <router-link :to="link" class="button" tag="button">{{ btntext }}</router-link>
</template>

<script>
	export default {
		name: 'Button',
		props: {
			link: { type: String, default: '' },
			btntext: String,
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
