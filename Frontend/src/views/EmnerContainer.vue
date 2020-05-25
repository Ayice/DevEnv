<template>
  <section class="section">
    <div class="columns">
      <div class="column has-text-centered">
        <h1 class="title is-2">Kategori titel</h1>
        <h2 class="subtitle is-6">Tilvælg emner du ønsker at modtage nyheder omkring</h2>
      </div>
    </div>

    <section class="emner-container columns is-mobile is-multiline is-1">
      <div class="column is-12" v-for="emne in Liste" :key="emne.id">
        <Emner :emne="emne" />
      </div>
    </section>
    <section class="button-container columns is-mobile is-1">
      <button class="is-light">Annullér</button>
      <button class="is-success">Gem valg</button>
    </section>
  </section>
</template>

<script>
	import Emner from '../components/Emner'

	export default {
		name: 'EmnerContainer',
		components: {
			Emner,
		},
		data() {
			return {
				Liste: [
					{
						title: 'emne 1',
						id: '1235dfsa21243',
					},
					{
						title: 'emne 2',
						id: '1235dfsa21265',
					},
					{
						title: 'emne 3',
						id: '1235dfsa21274',
					},
				],
			}
		},
	}
</script>

<style lang="scss">
	.emner-container {
		width: 90%;
		background-color: #355a93;
		margin: auto;
	}

	.button-container {
		width: 90%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		button {
			min-width: 150px;
		}
	}
</style>
