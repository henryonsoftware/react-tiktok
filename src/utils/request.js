import axios from 'axios'

const request = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
  timeout: 1000,
})

export const get = async (uri, options = {}) => {
  const response = await request.get(uri, options)
  return response.data
}

export default request
