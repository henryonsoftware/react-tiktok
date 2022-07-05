import axios from 'axios'

const httpRequest = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
  timeout: 1000,
})

export const get = async (uri, options = {}) => {
  const response = await httpRequest.get(uri, options)
  return response.data
}

export default httpRequest
