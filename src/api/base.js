import axios from 'axios'

const baseUrl = '/api/' // 这里填入我们之前在代理中写好的那个。 

const http = axios.create({
    baseURL: baseUrl
})

export default http
