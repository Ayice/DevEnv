<template>
  <div class="columns is-centered">
    <form action="" class="form-container column is-one-quarter box">
      <h2 class="is-size-3 has-text-white">Opret Bruger</h2>
        <Input placeholderValue="Fornavn"/>
        <Input placeholderValue="Efternavn"/>
        <Input placeholderValue="Adresse"/>
        <Input class="is-half" placeholderValue="Postnummer"/>
        <Input class="is-half" placeholderValue="By"/>
        <Input placeholderValue="E-mail" typeValue="email"/>
        <Input placeholderValue="Brugernavn"/>
        <Input placeholderValue="Adgangskode" typeValue="password"/>
        <Input placeholderValue="Gentag Adgangskode" typeValue="password"/>
        
          <div class="button-grp field is-grouped">
            <div class="control">
              <Button btntext="Annullér" class="is-light"/> 
            </div>
            <div class="control">
              <Button btntext="Gem" class="is-primary is-normal"/>
            </div>
            
          </div>
        
    </form>
  </div>
</template>

<script>
import Button from '@/components/login/Button.vue'
import Input from '@/components/login/Input.vue'

export default {
  name: "SignUpForm",
  components: {
    'Button': Button,
    'Input': Input
  },
  props: {
   
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h2 {
  margin-bottom: 5%;
}
.form-container {
  position: absolute;
  bottom: 25%;
  padding: 2.5%;
  background-color: #355A93;

.button-grp {
  justify-content: space-between;
}
}
</style>