<template>
  <a :href="emne.id" class="emne">{{emne.title}}</a>
</template>

<script>
	export default {
		name: 'Emner',
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
	.emne {
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
