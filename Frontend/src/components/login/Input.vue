<template>
  <div class="field">
    <div class="control">
      <input class="input" :placeholder="placeholderValue" :type="typeValue" />
    </div>
  </div>
</template>

<script>
	export default {
		name: 'Input',
		props: {
			placeholderValue: String,
			typeValue: String,
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
