<template>
<<<<<<< HEAD
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
=======
  <section>
    <div class="columns is-centered is-mobile">
      <form action class="form-container is-10 column box">
        <Input />
        <Input class />

        <div class="field is-grouped is-grouped-centered">
          <div class="control">
            <Button btntext="Log Ind" class="is-primary is-normal" />
          </div>
          <div class="control"></div>
        </div>
      </form>
    </div>

    <div class="login-options columns is-mobile is-centered">
      <div class="column is-5">
        <Button btntext="Opret Bruger" class="is-primary" />
      </div>

      <div class="column is-5">
        <Button btntext="Fortsæt Som Gæst" class="is-primary is-light" />
      </div>
    </div>
  </section>
>>>>>>> login
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
<<<<<<< HEAD
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
=======
<style scoped lang="scss"></style>
>>>>>>> login
