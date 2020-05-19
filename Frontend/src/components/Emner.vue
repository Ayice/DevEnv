<template>
  <a :href="kategori.id" class="kategori">{{kategori.title}}</a>
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
				id: {
					type: String,
					required: true,
				},
			},
		},
	}
</script>

<style lang="scss">
	.kategori {
		font-weight: 600;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100px;
		background-color: rgba(113, 184, 188, 0.452);
		color: #ffffff;
		width: 100%;
	}
</style>
