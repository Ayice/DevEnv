<template>
  <section class="section">
    <div class="columns">
      <div class="column has-text-centered">
        <h1 class="title is-2">Hovedkategorier</h1>
        <h2
          class="subtitle is-6"
        >Tryk på en Hovedkategori og tilvælg emner du ønsker at få nyheder om</h2>
      </div>
    </div>

    <section class="hovedkategori__container columns is-mobile is-multiline is-1">
      <div class="column is-6" v-for="kategori in categories" :key="kategori.id">
        <Hovedkategori :kategori="kategori" />
      </div>
    </section>
  </section>
</template>

<script>
	import Hovedkategori from '@/components/Hovedkategori'

	export default {
		name: 'HovedkategoriContainer',
		components: {
			Hovedkategori,
		},
		data() {
			return {
				newsList: Array,
				categories: Array,
			}
		},
		methods: {
			fetchNews() {
				fetch(
					// 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.beredskabsinfo.dk%2Fsektion%2Fpoliti%2Ffeed%2F'
					'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.ssi.dk%2Frss'
				)
					.then(response => {
						return response.json()
					})
					.then(response => {
						this.newsList = response.items
						console.log(response)
					})
			},

			fetchCategories() {
				fetch(process.env.VUE_APP_API_URL + 'category')
					.then(response => response.json())
					.then(response => {
						this.categories = response.result
					})
			},
		},
		mounted() {
			this.fetchCategories()
			// this.fetchNews()
		},
	}
</script>

<style lang="scss">
	.hovedkategori__container {
		width: 90%;
		background-color: #355a93;
		margin: auto;
		min-height: 50vh;
		max-height: 55vh;
		overflow-y: auto;
	}
</style>
