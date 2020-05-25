<template>
  <section>
    <div class="columns is-centered is-mobile">
      <form
        method="post"
        class="form-container is-10 column box"
        @submit.prevent="loginUser(login)"
      >
        <div class="field">
          <label for="username">Username</label>
          <div class="control">
            <input
              name="username"
              type="text"
              required
              placeholder="Username"
              class="input"
              v-model="login.username"
            />
          </div>
        </div>

        <div class="field">
          <label for="password">Password</label>
          <div class="control">
            <input
              name="password"
              type="password"
              required
              placeholder="Password"
              class="input"
              v-model="login.password"
            />
          </div>
        </div>

        <div class="field is-grouped is-grouped-centered">
          <div class="control">
            <button to="/login" class="button is-primary is-normal">Login</button>
          </div>
          <div class="control"></div>
        </div>
      </form>
    </div>

    <div class="login-options columns is-mobile is-centered">
      <div class="column is-5">
        <router-link to="/signup" class="button is-primary">Opret Bruger</router-link>
      </div>

      <div class="column is-5">
        <button class="button is-primary is-light">Fortsæt Som Gæst</button>
      </div>
    </div>
  </section>
</template>

<script>
	export default {
		name: 'LoginForm',
		data() {
			return {
				login: {
					username: null,
					password: null,
				},
			}
		},
		methods: {
			loginUser(data) {
				fetch(process.env.VUE_APP_API_URL + 'users/login', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				})
					.then(data => {
						console.log('Request succeeded with JSON response', data)
					})
					.catch(error => {
						console.log('Request failed', error)
					})
			},
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
