<template>
    <div class="home container-fluid p-5 my-5 bg-dark text-white">
		<AuthNav></AuthNav>
        <userAddrNav></userAddrNav>
		<productNav></productNav>
		<orderNav></orderNav>
    </div>
</template>
<script>

import userAddrNav from './useraddr.vue'
import productNav from './product.vue'
import orderNav from './order.vue'
import AuthNav from '@/components/AuthNav';
export default {
    components: {
        userAddrNav,
		productNav,
		orderNav,
		AuthNav,
    }
}
</script>

<style type="text/css" scoped>


.form-control {
	background-color: #6c757d;
}

</style>