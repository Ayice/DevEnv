<template>
  <section>
    <div class="columns is-centered is-mobile">
      <form action class="form-container is-10 column box">
        <Input />
        <Input class />

        <div class="field is-grouped is-grouped-centered">
          <div class="control">
            <Button btntext="Log Ind"  link="/login" class="is-primary is-normal" />
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
<style scoped lang="scss"></style>
