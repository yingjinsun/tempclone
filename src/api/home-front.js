
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
        return http.get('http://34.239.130.98:8000/infos/users')
    },
	postNewUser(form){
		return http.post('http://34.239.130.98:8000/infos/users', form)
	},

	putUpdateUser(userId, form){
		print(userId)
		return http.put(`http://34.239.130.98:8000/infos/users/${userId}`, form )
	},
	deleteUser(userId){
		return http.delete(`http://34.239.130.98:8000/infos/users/${userId}` )
	},
    getAllAddrs () {
        return http.get('http://34.239.130.98:8000/infos/addresses')
    },
	postNewAddr(form){
		return http.post('http://34.239.130.98:8000/infos/addresses', form)
	},

	putUpdateAddr(id, form){
		print(id)
		return http.put(`http://34.239.130.98:8000/infos/addresses/${id}`, form )
	},
	deleteAddr(id){
		return http.delete(`http://34.239.130.98:8000/infos/addresses/${id}` )
	},
    getAllProds () {
        return http2.get('http://ccsprint1product-env.eba-uiimqmpa.us-east-1.elasticbeanstalk.com/infos/products')
    },
	postNewProd(form){
		return http2.post('http://ccsprint1product-env.eba-uiimqmpa.us-east-1.elasticbeanstalk.com/infos/products', form)
	},

	putUpdateProd(id, form){
		print(id)
		return http2.put(`http://ccsprint1product-env.eba-uiimqmpa.us-east-1.elasticbeanstalk.com/infos/products/${id}`, form )
	},
	deleteProd(id){
		return http2.delete(`http://ccsprint1product-env.eba-uiimqmpa.us-east-1.elasticbeanstalk.com/infos/products/${id}` )
	},
    getAllOrds () {
        return http3.get('http://3.92.255.170:8000/infos/orders')
    },
	postNewOrd(form){
		return http3.post('http://3.92.255.170:8000/infos/orders', form)
	},

	putUpdateOrd(id, form){
		print(id)
		return http3.put(`http://3.92.255.170:8000/infos/orders/${id}`, form )
	},
	deleteOrd(id){
		return http3.delete(`http://3.92.255.170:8000/infos/orders/${id}` )
	},
}