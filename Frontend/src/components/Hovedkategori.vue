<template>
  <router-link :to="kategori._id" class="kategori" tag="button">{{kategori.title}}</router-link>
</template>

<script>
	export default {
		name: 'Hovedkategori',
		props: {
			kategori: {
				title: {
					type: String,
					required: true,
				},
				link: {
					type: String,
					required: true,
				},
			},
		},
	}
</script>

<style lang="scss">
	.kategori {
		cursor: pointer;
		font-weight: 600;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100px;
		background-color: rgba(113, 184, 188, 0.452);
		color: #ffffff;
		border: none;
		width: 100%;
		font-size: 1em;
	}
</style>
