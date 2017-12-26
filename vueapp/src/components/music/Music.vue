<template>
<div class="music">
    <common-header  color="cadetblue">
        <h2 slot="title">Music</h2>
    </common-header>
    <router-view></router-view>
    <common-footer color="cadetblue"></common-footer>
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

<style scoped>
.music{
    margin: 1rem 0;
}
</style>
