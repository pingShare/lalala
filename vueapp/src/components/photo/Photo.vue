<template>
  <div class="photo">
     <common-header>
          <h2 slot="title">Photo</h2>
     </common-header>
     <router-view></router-view>
     <common-footer></common-footer>
  </div>
</template>
<script>
import CommonHeader from '../common/Header'
import CommonFooter from '../common/Footer'
export default {
    components: {
        CommonHeader,
        CommonFooter
    }
}  
</script>
<style>
.photo{
    margin:1rem 0;
}
</style>