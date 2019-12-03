<template>
  <div>
      <p>{{this.$route.query.item.id}}</p>
       <p>{{this.$route.query.item.name}}</p>
        <p>{{this.$route.query.item.age}}</p>
  </div>
</template>

<script>
export default {
    // data(){
        
    // },

    mounted(){
        console.log(this.$route.query.item)

    }
}
</script>

<style>

</style>