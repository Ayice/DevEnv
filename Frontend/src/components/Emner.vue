<template>
  <div class="emne">
    {{emne.title}}
    <input type="radio" name="radiobutton" />
  </div>
</template>

<script>
	export default {
		name: 'Emner',
		props: {
			emne: {
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
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5em;
		background-color: rgba(113, 184, 188, 0.452);
		color: #ffffff;
		width: 100%;
	}
</style>
