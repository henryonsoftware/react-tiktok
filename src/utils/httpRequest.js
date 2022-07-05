import axios from 'axios'

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 1000,
})

export const get = async (uri, options = {}) => {
  const response = await httpRequest.get(uri, options)
  return response.data
}

export default httpRequest
