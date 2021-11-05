<template>
    <div class="full-container">
        <div class="container product-container">
            <div class="inner-container product-inner-container" v-if="products && products.length !== 0">
				<h1 class="headline">Products Management</h1>
				<table class="table table-dark">
                <tbody v-for="item in products.data"
                     :key="item.product_id"
                     class="items product-items"
                >	
							<td>{{  item.product_id  }}</td>  <td>{{  item.product_name  }}</td>   <td>{{  item.category  }}</td>   <td>{{  item.price  }}</td>   <td>{{  item.amount  }}</td>    <td>{{  item.image_url  }}</td>

							<button class="btn btn-secondary" @click='prod_del(item.product_id)'> Delete this product </button>
                </tbody>
				<div display:inline>
				<button class="btn btn-secondary" @click='pro_get(pro_idx-10)'> prev_page </button>
				<button class="btn btn-secondary" @click='pro_get(pro_idx+10)'> next_page </button>
				</div>
				</table>
				<ul>
					<form class="form modify-form product-form" v-on:submit.prevent="prod_modify">
						<li>"modify information if you want"</li>
						<input   class="form-control"   type="text"  name="product_id" id="change_product_id" required v-model="prod_form2.product_id">
						<input   class="form-control"   type="text"  name="product_name" id="change_product_name" v-model="prod_form2.product_name">
						<input   class="form-control"   type="text"  name="category" id="change_category" v-model="prod_form2.category">
						<input   class="form-control"   type="text"  name="price" id="change_price" v-model="prod_form2.price">
						<input   class="form-control"   type="text"  name="amount" id="change_amount" v-model="prod_form2.amount">
						<input   class="form-control"   type="text"  name="image_url" id="change_image_url" v-model="prod_form2.image_url">
						<p><input class= "btn btn-primary" type="submit" value="Submit"></p>
					</form>
					<form class="form add-form product-form" v-on:submit.prevent="prod_add">
						<li>"add new product if you want"</li>
						<input   class="form-control"   type="text"  name="product_name" id="change_product_name" v-model="prod_form.product_name">
						<input   class="form-control"   type="text"  name="category" id="change_category" v-model="prod_form.category">
						<input   class="form-control"   type="text"  name="price" id="change_price" v-model="prod_form.price">
						<input   class="form-control"   type="text"  name="amount" id="change_amount" v-model="prod_form.amount">
						<input   class="form-control"   type="text"  name="image_url" id="change_image_url" v-model="prod_form.image_url">
						<p><input class= "btn btn-primary" type="submit" value="Submit"></p>
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
            products: [],
			pro_idx: 0,
			prod_form:{ // for adding purpose
				
				product_name:"",
				category:"",
				price:"",
				amount:"",
				image_url:"",
			},
			prod_form2:{// for modifying purpose
				product_id:"",
				product_name:"",
				category:"",
				price:"",
				amount:"",
				image_url:"",
			},
        }
    },
	methods:{
		prod_add: async function(){
			let response= await HomeApi.postNewProd({
				'product_name': this.prod_form.product_name,
				'category': this.prod_form.category,
				'price': this.prod_form.price,
				'amount': this.prod_form.amount,
				'image_url': this.prod_form.image_url,
			})
			window.location.reload()
			//await axios.post("http://34.239.130.98:8000/infos/users",form)
		},
		prod_modify: async function(){
			let response= await HomeApi.putUpdateProd(this.prod_form2.product_id,{
				'product_name': this.prod_form2.product_name,
				'category': this.prod_form2.category,
				'price': this.prod_form2.price,
				'amount': this.prod_form2.amount,
				'image_url': this.prod_form2.image_url,
			})
			window.location.reload()
			//await axios.post("http://34.239.130.98:8000/infos/users/"+key,form2)
		},
		prod_del: async function(id){
			let response= await HomeApi.deleteProd(id)
			window.location.reload()
		},
		pro_get:async function(idx){
			let res2 = await HomeApi.getProds(idx)
			this.pro_idx=idx
			this.products = res2.data
		},
	},
    async created () {
		let res = await HomeApi.getAllProds()
        //let res = await HomeApi.getIndexCategories()<-->
        this.products = res.data
		


    }
}

</script>
<style type="text/css">
.form-control {
	background-color: #6c757d;
}


</style>
