<template>
  <div class="app" id="app">
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
			Footer,
		},

		data() {
			return {
				user: {
					fName: null,
					lName: null,
					adresse: null,
				},
			}
		},
		methods: {
			test() {
				console.log(this.user)
			},
		},
	}
</script>
<style lang="scss">
	#content-wrap {
			min-height: calc(100vh - 40px);
		padding: 0 10px;
		padding-top: 55px;
	}
</style>
