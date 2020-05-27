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
	.app {
		min-height: 100vh;
	}
	#content-wrap {
		padding-bottom: 2.5rem;
	}
</style>
