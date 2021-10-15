<template>
    <div class="full-container">
        <div class="container product-container">
            <div class="inner-container product-inner-container" v-if="products && products.length !== 0">
				<h1 class="headline">Products Management</h1>
                <div v-for="item in products.data"
                     :key="item.product_id"
                     class="items product-items"
                >	
					<ul class="list product-list">
						<li>
							{{  item.product_id  }} - {{  item.product_name  }}  - {{  item.category  }}  - {{  item.price  }}  - {{  item.amount  }}  -  {{  item.image_url  }}

							<button @click='prod_del(item.product_id)'> Delete this product </button>
						</li>
					</ul>
                </div>
				<ul>
					<form class="form modify-form product-form" v-on:submit.prevent="prod_modify">
						<li>"modify information if you want"</li>
						<input type="text" name="product_id" id="change_product_id" required v-model="prod_form2.product_id">
						<input type="text" name="product_name" id="change_product_name" v-model="prod_form2.product_name">
						<input type="text" name="category" id="change_category" v-model="prod_form2.category">
						<input type="text" name="price" id="change_price" v-model="prod_form2.price">
						<input type="text" name="amount" id="change_amount" v-model="prod_form2.amount">
						<input type="text" name="image_url" id="change_image_url" v-model="prod_form2.image_url">
						<p><input type="submit" value="Submit"></p>
					</form>
					<form class="form add-form product-form" v-on:submit.prevent="prod_add">
						<li>"add new product if you want"</li>
						<input type="text" name="product_name" id="change_product_name" v-model="prod_form.product_name">
						<input type="text" name="category" id="change_category" v-model="prod_form.category">
						<input type="text" name="price" id="change_price" v-model="prod_form.price">
						<input type="text" name="amount" id="change_amount" v-model="prod_form.amount">
						<input type="text" name="image_url" id="change_image_url" v-model="prod_form.image_url">
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
            products: [],
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
	},
    async created () {
		let res = await HomeApi.getAllProds()
        //let res = await HomeApi.getIndexCategories()<-->
        this.products = res.data
		


    }
}

</script>
<style type="text/css">


</style>
