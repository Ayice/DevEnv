<template>
  <div class="columns is-mobile is-centered">
    <form action class="form-container column is-three-quarters box">
      <input />
      <input />

      <div class="login-form-btns field is-grouped is-grouped-centered">
        <div class="control">
          <button class="is-primary is-normal">Login</button>
        </div>
        <div class="control">
          <button link="/about" class="is-primary is-light">Fortsæt Som Gæst</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

	export default {
		name: 'LoginForm',
		components: {
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
