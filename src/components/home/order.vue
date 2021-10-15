<template>
    <div class="full-container">
        <div class="container order-container">
            <div class="inner-container order-inner-container" v-if="orders && orders.length !== 0">
				<h1 class="headline">Orders Management</h1>
                <div v-for="item in orders.data"
                     :key="item.orderID"
                     class="items order-items"
                >	
					<ul class="list order-list">
						<li>
							{{  item.orderID  }} - {{  item.userID  }}  - {{  item.productID  }}  - {{  item.quantity  }}  - {{  item.createDate  }}  -  {{  item.status  }}

							<button @click='ord_del(item.orderID)'> Delete this order </button>
						</li>
					</ul>
                </div>
				<ul>
					<form class="form modify-form order-form" v-on:submit.prevent="ord_modify">
						<li>"modify information if you want"</li>
						<input type="text" name="orderID" id="change_orderID" required v-model="ord_form2.orderID">
						<input type="text" name="userID" id="change_userID" v-model="ord_form2.userID">
						<input type="text" name="productID" id="change_productID" v-model="ord_form2.productID">
						<input type="text" name="quantity" id="change_quantity" v-model="ord_form2.quantity">
						<input type="text" name="createDate" id="change_createDate" v-model="ord_form2.createDate">
						<input type="text" name="status" id="change_status" v-model="ord_form2.status">
						<p><input type="submit" value="Submit"></p>
					</form>
					<form class="form add-form order-form" v-on:submit.prevent="ord_add">
						<li>"add new order if you want"</li>
						<input type="text" name="userID" id="change_userID" v-model="ord_form.userID">
						<input type="text" name="productID" id="change_productID" v-model="ord_form.productID">
						<input type="text" name="quantity" id="change_quantity" v-model="ord_form.quantity">
						<input type="text" name="createDate" id="change_createDate" v-model="ord_form.createDate">
						<input type="text" name="status" id="change_status" v-model="ord_form.status">
						<p><input type="submit" value="Submit"></p>
					</form>
				</ul>
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
	},
    async created () {
		let res = await HomeApi.getAllOrds()
        //let res = await HomeApi.getIndexCategories()<-->
        this.orders = res.data
		


    }
}

</script>
<style type="text/css">


</style>
