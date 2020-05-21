<template>
  <div class="columns is-centered">
    <form action class="form-container column is-one-quarter box">
      <Input />
      <Input class />

      <div class="field is-grouped is-grouped-centered">
        <div class="control">
          <Button btntext="Log Ind" class="is-primary is-normal" />
        </div>
        <div class="control">
          <Button btntext="Fortsæt Som Gæst" link="/about" class="is-primary is-light" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
	import Button from '@/components/login/Button.vue'
	import Input from '@/components/login/Input.vue'

	export default {
		name: 'LoginForm',
		components: {
			Button: Button,
			Input: Input,
		},
		props: {},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	h3 {
		margin: 40px 0 0;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
	a {
		color: #42b983;
	}
</style>
