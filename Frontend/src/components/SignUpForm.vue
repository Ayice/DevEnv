<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered is-mobile">
        <form class="form column is-10 box" @submit.prevent="signupUser(user)">
          <h2 class="is-size-3 has-text-white">Opret Bruger</h2>
          <div class="field">
            <label for="firstname">Fornavn</label>
            <div class="control">
              <input
                type="text"
                name="firstname"
                required
                placeholder="Fornavn"
                class="input"
                v-model="user.firstName"
                pattern="[A-Za-z]{1,32}"
              />
            </div>
          </div>

          <div class="field">
            <label for="lastname">Efternavn</label>
            <div class="control">
              <input
                type="text"
                name="lastname"
                required
                placeholder="Efternavn"
                v-model="user.lastName"
                class="input"
                pattern="[A-Za-z]{1,32}"
              />
            </div>
          </div>

          <div class="field">
            <label for="adress">Addresse</label>
            <div class="control">
              <input
                type="text"
                name="adress"
                required
                placeholder="Adresse"
                v-model="user.address"
                class="input"
              />
            </div>
          </div>

          <div class="field">
            <label for="zip-code">Postnummer</label>
            <div class="control">
              <input
                name="zip-code"
                type="number"
                required
                placeholder="Postnummer"
                v-model="user.zipCode"
                class="input"
                pattern="^[0-9]{1,4}$"
              />
            </div>
          </div>

          <div class="field">
            <label for="city">By</label>
            <div class="control">
              <input
                name="city"
                type="text"
                required
                placeholder="By"
                v-model="user.city"
                class="input"
              />
            </div>
          </div>

          <div class="field">
            <label for="email">E-mail</label>
            <div class="control">
              <input
                name="email"
                type="email"
                required
                placeholder="E-mail"
                v-model="user.email"
                class="input"
              />
            </div>
          </div>

          <div class="field">
            <label for="username">Brugernavn</label>
            <div class="control">
              <input
                type="text"
                required
                name="username"
                placeholder="Brugernavn"
                v-model="user.username"
                class="input"
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
                v-model="user.password"
                class="input"
              />
            </div>
          </div>

          <div class="field">
            <label for="password2">Password</label>
            <div class="control">
              <input
                type="password"
                name="password2"
                required
                placeholder="Gentag Password"
                class="input"
              />
            </div>
          </div>

          <div class="button-grp field">
            <div class="control">
              <button class="button is-light">Annullér</button>
            </div>
            <div class="control">
              <button class="button is-primary" type="submit">Gem</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
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
				fetch(process.env.VUE_APP_API_URL + 'users', {
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

	.form {
		padding: 2.5%;
		background-color: #355a93;

		label {
			color: #fff;
		}
	}

	.button-grp {
		display: flex;
		justify-content: space-between;
	}
</style>
