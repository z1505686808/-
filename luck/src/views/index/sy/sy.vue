<template>
  <div>
      <div v-for="(item,index) in list" :key="index"  @click="fn(item)">
          <span>{{item.name}}</span>
          {{item.age}}
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            list:[]
        }
    },
    mounted(){
        axios.get('/getdata').then(res=>{
            this.list=res.data.data.data
            console.log(this.list)
        })
    },
    methods:{
        fn(item){
            this.$router.push({path:'/xq',query:{item} })
        }
    }
}
</script>

<style>

</style>