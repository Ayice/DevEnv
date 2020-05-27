<template>
  <section class="section">
    <div class="columns">
      <div class="column has-text-centered">
        <h1 class="title is-2">Hovedkategorier</h1>
        <h2 class="subtitle is-6">Tryk på en hovedkategori og tilvælg emner du ønsker at få nyheder om</h2>
      </div>
    </div>

    <section class="hovedkategori__container columns is-mobile is-multiline is-1">
      <div class="column is-6" v-for="kategori in Liste" :key="kategori.id">
        <Hovedkategori :kategori="kategori" />
      </div>
    </section>

  </section>
</template>

<script>
	import Hovedkategori from '../components/Hovedkategori'

	export default {
		name: 'HovedkategoriContainer',
		components: {
			Hovedkategori,
		},
		data() {
			return {
				Liste: [
					{
						title: 'kategori 1',
						id: '1235dfsa',
					},
					{
						title: 'kategori 2',
						id: '1235dfsa21231',
					},
					{
						title: 'kategori 3',
						id: '1235f123423r',
					},
				],
			}
		},
		// methods: {
		// 	fetchmeBitch() {
		// 		fetch(
		// 			// 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.beredskabsinfo.dk%2Fsektion%2Fpoliti%2Ffeed%2F'
		// 			'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.ssi.dk%2Frss'
		// 		)
		// 			.then(response => {
		// 				return response.json()
		// 			})
		// 			.then(response => {
		// 				console.log(response)
		// 			})
		// 	},
		// },
		// mounted() {
		// 	this.fetchmeBitch()
		// },
	}
</script>

<style lang="scss">
	.hovedkategori__container {
		width: 90%;
		background-color: #355a93;
		margin: auto;
	}
</style>
