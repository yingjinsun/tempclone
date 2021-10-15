<template>
    <div class="home">

        <userAddrNav></userAddrNav>
		<productNav></productNav>
		<orderNav></orderNav>
    </div>
</template>
<script>

import userAddrNav from './useraddr.vue'
import productNav from './product.vue'
import orderNav from './order.vue'
export default {
    components: {
        userAddrNav,
		productNav,
		orderNav,
    }
}
</script>

<style type="text/css" scoped>

</style>