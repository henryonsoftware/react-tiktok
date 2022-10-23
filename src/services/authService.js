import * as httpRequest from '~/utils/httpRequest'

export const login = async (email, password) => {
  try {
    return httpRequest.post('auth/login', {
      email: email,
      password: password,
    })
  } catch (error) {
    console.log(error)
  }
}
