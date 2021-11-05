
import axios from 'axios'
const http = axios.create({
    baseURL: '/api/'
})
const http2 = axios.create({
    baseURL: '/foo/'
})
const http3 = axios.create({
    baseURL: '/ord/'
})
export default {

    getAllUsers () {
        return http.get('/infos/users')
    },
    getUsers (idx) {
		if (idx<0) idx=0
        return http.post(`/infos/users?offset=${idx}`)
    },
	postNewUser(form){
		return http.post('/infos/users', form)
	},

	putUpdateUser(userId, form){
		print(userId)
		return http.put(`/infos/users/${userId}`, form )
	},
	deleteUser(userId){
		return http.delete(`/infos/users/${userId}` )
	},
    getAllAddrs () {
        return http.get('/infos/addresses')
    },
    getAddrs (idx) {
		if (idx<0) idx=0
        return http.post(`/infos/addresses?offset=${idx}`)
    },
	postNewAddr(form){
		return http.post('/infos/addresses', form)
	},

	putUpdateAddr(id, form){
		print(id)
		return http.put(`/infos/addresses/${id}`, form )
	},
	deleteAddr(id){
		return http.delete(`/infos/addresses/${id}` )
	},
    getAllProds () {
        return http2.get('/infos/products')
    },
	postNewProd(form){
		return http2.post('/infos/products', form)
	},
    getProds (idx) {
		if (idx<0) idx=0
        return http2.post(`/infos/products?offset=${idx}`)
    },
	putUpdateProd(id, form){
		print(id)
		return http2.put(`/infos/products/${id}`, form )
	},
	deleteProd(id){
		return http2.delete(`/infos/products/${id}` )
	},
    getAllOrds () {
        return http3.get('/infos/orders')
    },
    getOrds (idx) {
		if (idx<0) idx=0
        return http3.post(`/infos/orders?offset=${idx}`)
    },
	postNewOrd(form){
		return http3.post('/infos/orders', form)
	},

	putUpdateOrd(id, form){
		print(id)
		return http3.put(`/infos/orders/${id}`, form )
	},
	deleteOrd(id){
		return http3.delete(`/infos/orders/${id}` )
	},
}