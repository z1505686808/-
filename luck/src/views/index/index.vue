<template>
  <div class="zypage">
     <div class="head">
         <span></span>
         <span>luckin coffee</span>
         <span>…</span>
     </div>
     <div class="main">
         <router-view></router-view>
     </div>
     <div class="foot">
         <router-link to='/sy'>首页</router-link>
         <router-link to='/cd'>菜单</router-link>
         <router-link to='/dd'>订单</router-link>
         <router-link to='/shop'>购物车</router-link>
         <router-link to='/my'>我的</router-link>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.zypage{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.head{
    width: 100%;
    height: 50px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.main{
    flex: 1;
    overflow: auto;
}

.foot{
    width: 100%;
    height: 50px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.router-link-active{
    background-color: red;
}

a {
    text-decoration: none;
    display: inline-block;
    flex: 1;
    line-height: 50px;
    text-align: center;
}
</style>