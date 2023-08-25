import axios from 'axios'

const baseUrl = 'http://localhost:3020/posts'

const postAPI = axios.create({
    baseURL: baseUrl,
    'Content-Type': 'application/json',
    'Accept': "application/json , text/html"
})

export default postAPI