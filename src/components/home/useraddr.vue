<template>
    <div class="full-container">
        <div class="container user-container">
            <div class="inner-container user-inner-container" v-if="users && users.length !== 0">
				<h1 class="headline">Users Management</h1>
                <div v-for="item in users.data"
                     :key="item.userID"
                     class="items user-items"
                >	
					<ul class="list user-list">
						<li>
							{{  item.userID  }} - {{  item.nameLast  }}  - {{  item.nameFirst  }}  - {{  item.email  }}  - {{  item.userAddress  }}

							<button @click='user_del(item.userID)'> Delete this user </button>
						</li>
					</ul>
                </div>
				<ul>
					<form class="form modify-form user-form" v-on:submit.prevent="user_modify">
						<li>"modify information if you want"</li>
						<input type="text" name="UserID" id="change_userID" required v-model="user_form2.user_id">
						<input type="text" name="nameLast" id="change_nameLast" v-model="user_form2.name_last">
						<input type="text" name="nameFirst" id="change_nameFirst" v-model="user_form2.name_first">
						<input type="text" name="email" id="change_email" v-model="user_form2.email">
						<input type="text" name="userAddress" id="change_userAddress" v-model="user_form2.user_address">
						<p><input type="submit" value="Submit"></p>
					</form>
					<form class="form add-form user-form" v-on:submit.prevent="user_add">
						<li>"add new user if you want"</li>
						<li> <input type="text" name="nameLast" id="nameLast" v-model="user_form.name_last"> </li>
						<li> <input type="text" name="nameFirst" id="nameFirst" v-model="user_form.name_first"> </li>
						<li> <input type="text" name="email" id="email" v-model="user_form.email"> </li>
						<li> <input type="text" name="userAddress" id="userAddress" v-model="user_form.user_address"> </li>
						<p><input type="submit" value="Submit"></p>
					</form>
				</ul>
            </div> 
        </div>
		<!-- now one segement over -->
		<!-- new segment on address -->
        <div class="container addr-container">
            <div class="inner-container addr-inner-container" v-if="addrs && addrs.length !== 0">
				<h1 class="headline">Address Management</h1>
                <div v-for="item in addrs.data"
                     :key="item.address_no"
                     class="items addr-items"
                >	
					<ul class="list addr-list">
						<li>
							{{  item.addressID  }}  -  {{  item.addressNo  }} - {{  item.streetName1  }}  - {{  item.streetName2  }}  - {{  item.city  }}  - {{  item.region  }}  - {{  item.countryCode  }}  - {{  item.postalCode  }}  - {{  item.userId_fk  }}

							<button @click='addr_del(item.addressID)'> Delete this addr </button>
						</li>
					</ul>
                </div>
				<ul>
					<form class="form modify-form addr-form" v-on:submit.prevent="addr_modify">
						<li>"modify information if you want"</li>
						<input type="text" name="address_id" id="change_address_id" required v-model="addr_form2.address_id">
						<input type="text" name="address_no" id="change_address_no" v-model="addr_form2.address_no">
						<input type="text" name="street_name_1" id="change_street_name_1" v-model="addr_form2.street_name_1">
						<input type="text" name="street_name_2" id="change_street_name_2" v-model="addr_form2.street_name_2">
						<input type="text" name="city" id="change_city" v-model="addr_form2.city">
						<input type="text" name="region" id="change_region" v-model="addr_form2.region">
						<input type="text" name="country_code" id="change_country_code" v-model="addr_form2.country_code">
						<input type="text" name="postal_code" id="change_postal_code" v-model="addr_form2.postal_code">
						<input type="text" name="user_id_fk" id="change_user_id_fk" v-model="addr_form2.user_id_fk">
						<p><input type="submit" value="Submit"></p>
					</form>
					<form class="form add-form addr-form" v-on:submit.prevent="addr_add">
						<li>"add new address if you want"</li>
						<input type="text" name="address_no" id="add_address_no" v-model="addr_form.address_no">
						<input type="text" name="street_name_1" id="add_street_name_1" v-model="addr_form.street_name_1">
						<input type="text" name="street_name_2" id="add_street_name_2" v-model="addr_form.street_name_2">
						<input type="text" name="city" id="add_city" v-model="addr_form.city">
						<input type="text" name="region" id="add_region" v-model="addr_form.region">
						<input type="text" name="country_code" id="add_country_code" v-model="addr_form.country_code">
						<input type="text" name="postal_code" id="add_postal_code" v-model="addr_form.postal_code">
						<input type="text" name="user_id_fk" id="add_user_id_fk" v-model="addr_form.user_id_fk">
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
            users: [],
			addrs: [],
			user_form:{ // for adding purpose
				
				name_last:"",
				name_first:"",
				email:"",
				user_address:""
			},
			user_form2:{// for modifying purpose
				user_id:"",
				name_last:"",
				name_first:"",
				email:"",
				user_address:""
			},
			addr_form:{ // for adding purpose
				address_no:"",
				street_name_1:"",
				street_name_2:"",
				city:"",
				region:"",
				country_code:"",
				postal_code:"",
				user_id_fk:"",
			},
			addr_form2:{// for modifying purpose
				address_id:"",
				address_no:"",
				street_name_1:"",
				street_name_2:"",
				city:"",
				region:"",
				country_code:"",
				postal_code:"",
				user_id_fk:"",
			},
        }
    },
	methods:{
		user_add: async function(){
			let response= await HomeApi.postNewUser({
				'name_last': this.user_form.name_last,
				'name_first': this.user_form.name_first,
				'email': this.user_form.email,
				'user_address': this.user_form.user_address
			})
			window.location.reload()
			//await axios.post("http://34.239.130.98:8000/infos/users",form)
		},
		user_modify: async function(){
			let response= await HomeApi.putUpdateUser(this.user_form2.user_id,{
				'name_last': this.user_form2.name_last,
				'name_first': this.user_form2.name_first,
				'email': this.user_form2.email,
				'user_address': this.user_form2.user_address
			})
			window.location.reload()
			//await axios.post("http://34.239.130.98:8000/infos/users/"+key,form2)
		},
		user_del: async function(id){
			let response= await HomeApi.deleteUser(id)
			window.location.reload()
		},
		addr_add: async function(){
			let response= await HomeApi.postNewAddr({
				'address_no': this.addr_form.address_no,
				'street_name_1': this.addr_form.street_name_1,
				'street_name_2': this.addr_form.street_name_2,
				'city': this.addr_form.city,
				'region': this.addr_form.region,
				'country_code': this.addr_form.country_code,
				'postal_code': this.addr_form.postal_code,
				'user_id_fk': this.addr_form.user_id_fk
			})
			window.location.reload()
			//await axios.post("http://34.239.130.98:8000/infos/users",form)
		},
		addr_modify: async function(){
			let response= await HomeApi.putUpdateAddr(this.addr_form2.address_id,{
				'address_no': this.addr_form2.address_no,
				'street_name_1': this.addr_form2.street_name_1,
				'street_name_2': this.addr_form2.street_name_2,
				'city': this.addr_form2.city,
				'region': this.addr_form2.region,
				'country_code': this.addr_form2.country_code,
				'postal_code': this.addr_form2.postal_code,
				'user_id_fk': this.addr_form2.user_id_fk
			})
			window.location.reload()
			//await axios.post("http://34.239.130.98:8000/infos/users/"+key,form2)
		},
		addr_del: async function(id){
			let response= await HomeApi.deleteAddr(id)
			window.location.reload()
		},
	},
    async created () {
		let res = await HomeApi.getAllUsers()
        //let res = await HomeApi.getIndexCategories()<-->
		let res2 = await HomeApi.getAllAddrs()
        this.users = res.data
		this.addrs=res2.data
		


    }
}

</script>
<style type="text/css">


</style>
