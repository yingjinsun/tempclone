<template>
    <div class="full-container">
        <div class="container user-container">
            <div class="inner-container user-inner-container" v-if="users && users.length !== 0">
				<h1 class="headline">Users Management</h1>
				<table class="table table-dark">
                <tbody v-for="item in users.data"
                     :key="item.userID"
                     class="items user-items"
                >	

							<td>{{  item.userID  }}</td>  <td>{{  item.nameLast  }}</td>   <td>{{  item.nameFirst  }}</td>   <td>{{  item.email  }}</td>   <td>{{  item.userAddress  }}</td>

							<button class="btn btn-secondary" @click='user_del(item.userID)'> Delete this user </button>

                </tbody>
				<div display:inline>
				<button class="btn btn-secondary" @click='usr_get(usr_idx-10)'> prev_page </button>
				<button class="btn btn-secondary" @click='usr_get(usr_idx+10)'> next_page </button>
				</div>
				</table>
				<ul>
					<form class="form modify-form user-form" v-on:submit.prevent="user_modify">
						<li>"modify information if you want"</li>
						<input   class="form-control"   type="text" name="UserID" id="change_userID" required v-model="user_form2.user_id">
						<input   class="form-control"   type="text" name="nameLast" id="change_nameLast" v-model="user_form2.name_last">
						<input   class="form-control"   type="text" name="nameFirst" id="change_nameFirst" v-model="user_form2.name_first">
						<input   class="form-control"   type="text" name="email" id="change_email" v-model="user_form2.email">
						<input   class="form-control"   type="text" name="userAddress" id="change_userAddress" v-model="user_form2.user_address">
						<p><input class= "btn btn-primary" type="submit" value="Submit"></p>
					</form>
					<form class="form add-form user-form" v-on:submit.prevent="user_add">
						<li>"add new user if you want"</li>
						<li> <input   class="form-control"   type="text" name="nameLast" id="nameLast" v-model="user_form.name_last"> </li>
						<li> <input   class="form-control"   type="text" name="nameFirst" id="nameFirst" v-model="user_form.name_first"> </li>
						<li> <input   class="form-control"   type="text" name="email" id="email" v-model="user_form.email"> </li>
						<li> <input   class="form-control"   type="text" name="userAddress" id="userAddress" v-model="user_form.user_address"> </li>
						<p><input class= "btn btn-primary" type="submit" value="Submit"></p>
					</form>
				</ul>
            </div> 
        </div>
		<!-- now one segement over -->
		<!-- new segment on address -->
        <div class="container addr-container">
            <div class="inner-container addr-inner-container" v-if="addrs && addrs.length !== 0">
				<h1 class="headline">Address Management</h1>
				<table class="table table-dark">
                <tbody v-for="item in addrs.data"
                     :key="item.address_no"
                     class="items addr-items"
                >	
							<td>{{  item.addressID  }}</td>   <td>{{  item.addressNo  }}</td>  <td>{{  item.streetName1  }}</td>   <td>{{  item.streetName2  }}</td>   <td>{{  item.city  }}</td>   <td>{{  item.region  }}</td>   <td>{{  item.countryCode  }}</td>   <td>{{  item.postalCode  }}</td>   <td>{{  item.userId_fk  }}</td>

							<button class="btn btn-secondary" @click='addr_del(item.addressID)'> Delete this addr </button>
                </tbody>
				<div display:inline>
				<button class="btn btn-secondary" @click='addr_get(addr_idx-10)'> prev_page </button>
				<button class="btn btn-secondary" @click='addr_get(addr_idx+10)'> next_page </button>
				</div>
				</table>
				<ul>
					<form class="form modify-form addr-form" v-on:submit.prevent="addr_modify">
						<li>"modify information if you want"</li>
						<input   class="form-control"   type="text" name="address_id" id="change_address_id" required v-model="addr_form2.address_id">
						<input   class="form-control"   type="text" name="address_no" id="change_address_no" v-model="addr_form2.address_no">
						<input   class="form-control"   type="text" name="street_name_1" id="change_street_name_1" v-model="addr_form2.street_name_1">
						<input   class="form-control"   type="text" name="street_name_2" id="change_street_name_2" v-model="addr_form2.street_name_2">
						<input   class="form-control"   type="text" name="city" id="change_city" v-model="addr_form2.city">
						<input   class="form-control"   type="text" name="region" id="change_region" v-model="addr_form2.region">
						<input   class="form-control"   type="text" name="country_code" id="change_country_code" v-model="addr_form2.country_code">
						<input   class="form-control"   type="text" name="postal_code" id="change_postal_code" v-model="addr_form2.postal_code">
						<input   class="form-control"   type="text" name="user_id_fk" id="change_user_id_fk" v-model="addr_form2.user_id_fk">
						<p><input class= "btn btn-primary" type="submit" value="Submit"></p>
					</form>
					<form class="form add-form addr-form" v-on:submit.prevent="addr_add">
						<li>"add new address if you want"</li>
						<input   class="form-control"   type="text" name="address_no" id="add_address_no" v-model="addr_form.address_no">
						<input   class="form-control"   type="text" name="street_name_1" id="add_street_name_1" v-model="addr_form.street_name_1">
						<input   class="form-control"   type="text" name="street_name_2" id="add_street_name_2" v-model="addr_form.street_name_2">
						<input   class="form-control"   type="text" name="city" id="add_city" v-model="addr_form.city">
						<input   class="form-control"   type="text" name="region" id="add_region" v-model="addr_form.region">
						<input   class="form-control"   type="text" name="country_code" id="add_country_code" v-model="addr_form.country_code">
						<input   class="form-control"   type="text" name="postal_code" id="add_postal_code" v-model="addr_form.postal_code">
						<input   class="form-control"   type="text" name="user_id_fk" id="add_user_id_fk" v-model="addr_form.user_id_fk">
						<p><input  class= "btn btn-primary" type="submit" value="Submit"></p>
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
			usr_idx: 0,
			addr_idx: 0,
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
		usr_get:async function(idx){
			let res = await HomeApi.getUsers(idx)
			this.usr_idx=idx
			this.users = res.data
		},
		addr_get:async function(idx){
			let res2 = await HomeApi.getAddrs(idx)
			this.addr_idx=idx
			this.addrs = res2.data
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
.form-control {
	background-color: #6c757d;
}


</style>
