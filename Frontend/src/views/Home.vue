<template>
  <div class="home columns is-centered">
    <img alt="COVID-19 logo" src="../assets/covid-logo.png" class="is-centered" />
    <LoginForm />
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
