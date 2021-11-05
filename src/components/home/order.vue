<template>
    <div class="full-container">
        <div class="container order-container">
            <div class="inner-container order-inner-container" v-if="orders && orders.length !== 0">
				<h1 class="headline">Orders Management</h1>
				<table class="table table-dark">
                <tbody v-for="item in orders.data"
                     :key="item.orderID"
                     class="items order-items"
                >	
							<td>{{  item.orderID  }}</td>  <td>{{  item.userID  }}</td>   <td>{{  item.productID  }}</td>   <td>{{  item.quantity  }}</td>   <td>{{  item.createDate  }}</td>    <td>{{  item.status  }}</td>
							<button class="btn btn-secondary" @click='ord_del(item.orderID)'> Delete this order </button>
                </tbody>
				<div display:inline>
				<button class="btn btn-secondary" @click='ord_get(ord_idx-10)'> prev_page </button>
				<button class="btn btn-secondary" @click='ord_get(ord_idx+10)'> next_page </button>
				</div>
				</table>
					<form class="form modify-form order-form" v-on:submit.prevent="ord_modify">
						<li>"modify information if you want"</li>
						<input   class="form-control"   type="text"  name="orderID" id="change_orderID" required v-model="ord_form2.orderID">
						<input   class="form-control"   type="text"  name="userID" id="change_userID" v-model="ord_form2.userID">
						<input   class="form-control"   type="text"  name="productID" id="change_productID" v-model="ord_form2.productID">
						<input   class="form-control"   type="text"  name="quantity" id="change_quantity" v-model="ord_form2.quantity">
						<input   class="form-control"   type="text"  name="createDate" id="change_createDate" v-model="ord_form2.createDate">
						<input   class="form-control"   type="text"  name="status" id="change_status" v-model="ord_form2.status">
						<p><input class= "btn btn-primary" type="submit" value="Submit"></p>
					</form>
					<form class="form add-form order-form" v-on:submit.prevent="ord_add">
						<li>"add new order if you want"</li>
						<input   class="form-control"   type="text"  name="userID" id="change_userID" v-model="ord_form.userID">
						<input   class="form-control"   type="text"  name="productID" id="change_productID" v-model="ord_form.productID">
						<input   class="form-control"   type="text"  name="quantity" id="change_quantity" v-model="ord_form.quantity">
						<input   class="form-control"   type="text"  name="createDate" id="change_createDate" v-model="ord_form.createDate">
						<input   class="form-control"   type="text"  name="status" id="change_status" v-model="ord_form.status">
						<p><input class= "btn btn-primary"  type="submit" value="Submit"></p>
					</form>
            </div> 
        </div>
		<!-- now one segement over -->
    </div>    
</template>
<script type="text/javascript">
import HomeApi from '@/api/home.js'
export default {
    data() {
        return {
            orders: [],
			ord_idx: 0,
			ord_form:{ // for adding purpose
				
				userID:"",
				productID:"",
				quantity:"",
				createDate:"",
				status:"",
			},
			ord_form2:{// for modifying purpose
				orderID:"",
				userID:"",
				productID:"",
				quantity:"",
				createDate:"",
				status:"",
			},
        }
    },
	methods:{
		ord_add: async function(){
			let response= await HomeApi.postNewOrd({
				'userID': this.ord_form.userID,
				'productID': this.ord_form.productID,
				'quantity': this.ord_form.quantity,
				'createDate': this.ord_form.createDate,
				'status': this.ord_form.status,
			})
			window.location.reload()
			//await axios.post("http://34.239.130.98:8000/infos/users",form)
		},
		ord_modify: async function(){
			let response= await HomeApi.putUpdateOrd(this.ord_form2.orderID,{
				'userID': this.ord_form2.userID,
				'productID': this.ord_form2.productID,
				'quantity': this.ord_form2.quantity,
				'createDate': this.ord_form2.createDate,
				'status': this.ord_form2.status,
			})
			window.location.reload()
			//await axios.post("http://34.239.130.98:8000/infos/users/"+key,form2)
		},
		ord_del: async function(id){
			let response= await HomeApi.deleteOrd(id)
			window.location.reload()
		},
		ord_get:async function(idx){
			let res2 = await HomeApi.getOrds(idx)
			this.ord_idx=idx
			this.orders = res2.data
		},
	},
    async created () {
		let res = await HomeApi.getAllOrds()
        //let res = await HomeApi.getIndexCategories()<-->
        this.orders = res.data
		


    }
}

</script>
.form-control {
	background-color: #6c757d;
}

<style type="text/css">


</style>
