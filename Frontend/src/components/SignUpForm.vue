<template>
  <div class="form-wrapper columns is-centered">
    <form class="form-container column is-one-quarter box" @submit.prevent="signupUser(this.user)">
      <h2 class="is-size-3 has-text-white">Opret Bruger</h2>
      <input type="text" required placeholder="Fornavn" v-model="user.firstName" />
      <input type="text" required placeholder="Efternavn" v-model="user.lastName" />
      <input type="text" required placeholder="Adresse" v-model="user.address" />
      <input type="number" required placeholder="Postnummer" v-model="user.zipCode" />
      <input type="text" required placeholder="By" v-model="user.city" />
      <input type="email" required placeholder="E-mail" v-model="user.email" />
      <input type="text" required placeholder="Brugernavn" v-model="user.username" />
      <input type="password" required placeholder="Adgangskode" v-model="user.password" />
      <input type="password" required placeholder="Gentag Adgangskode" />

      <div class="button-grp field">
        <div class="control">
          <button class="is-light">Annullér</button>
        </div>
        <div class="control">
          <button type="submit">Gem</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
	export default {
		name: 'SignUpForm',
		components: {},
		props: {},
		data() {
			return {
				user: {
					firstName: null,
					lastName: null,
					address: null,
					zipCode: null,
					city: null,
					email: null,
					username: null,
					password: null,
				},
			}
		},
		methods: {
			signupUser(data) {
				fetch('http://localhost:3000/users', {
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
<style scoped lang="scss">
	h2 {
		margin-bottom: 5%;
	}
	.form-wrapper {
		display: flex;
		align-items: center;
		height: 95vh;
		padding: 5%;
	}
	.form-container {
		padding: 2.5%;
		background-color: #355a93;
	}

	.button-grp {
		display: flex;
		justify-content: space-between;
	}
</style>
