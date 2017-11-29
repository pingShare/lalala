<template>
<div>
     <common-header>
          <h2 slot="title">Movie</h2>
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

</style>
