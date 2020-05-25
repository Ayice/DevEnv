<template>
<<<<<<< HEAD
  <div class="columns is-centered">
    <form class="form-container column is-one-quarter box">
      <Input />
      <Input class />
=======
  <section>
    <div class="columns is-centered is-mobile">
      <form action class="form-container is-10 column box">
        <div class="field">
          <label for="username">Username</label>
          <div class="control">
            <input name="username" type="text" required placeholder="Username" class="input" />
          </div>
        </div>
>>>>>>> ab1f6e45920e368bb43a08acd21dc7e37e1b3033

        <div class="field">
          <label for="password">Password</label>
          <div class="control">
            <input name="password" type="password" required placeholder="Password" class="input" />
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
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
