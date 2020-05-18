<template>
    <div id="app">
     <Header />
        <router-view />
    </div>
</template>
<script>
import Header from './components/Header'
export default {
    components: {
        Header
    }
}
</script>
<style lang="scss">
#app {
    width:100%; 
    max-width: 1080px; 
    margin: 0 auto
}
</style>
