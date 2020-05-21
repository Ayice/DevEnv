<template>
  <footer id="footer" class="columns is-12 text-is-centered">
      <span>
          © 2020 All Rights Reserved | Reactive Angulers
      </span>
  </footer>
</template>

<script>
export default {
  name: 'Header',
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#footer {
  background-color: #355a93;
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  width: 100%;
  height: 2.5rem; 
  color: #fff;
  display: flex;
  align-content: center;
  justify-content: center;
  span {
     padding-top: 0.5rem;;
  }
}
</style>