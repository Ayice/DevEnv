<template>
  <div class="home">
    <img alt="COVID-19 logo" src="../assets/covid-logo.png" class="is-centered" />
    <LoginForm />
    <Button btntext="Opret Bruger" link="/signup" class="is-primary" />
  </div>
</template>

<script>
	// @ is an alias to /src

	import LoginForm from '@/components/login/LoginForm.vue'

	export default {
		name: 'Home',
		components: {
			LoginForm,
		},
	}
</script>
