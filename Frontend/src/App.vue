<template>
  <div id="app">
    <Header />
    <div id="content-wrap">
		<router-view />
	</div>
	<Footer />
  </div>
</template>
<script>
	import Header from './components/Header'
		import Footer from './components/Footer'

	export default {
		components: {
			Header,
			Footer
		},
	}
</script>
<style lang="scss">
#content-wrap {
	padding-bottom: 2.5rem;
}
</style>
