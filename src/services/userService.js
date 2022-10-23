import * as httpRequest from '~/utils/httpRequest'

export const getSuggestedUsers = async (page, perPage) => {
  try {
    const res = await httpRequest.get('users/suggested', {
      params: {
        page,
        per_page: perPage,
      },
    })

    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const getFollowingUsers = async (page) => {
  try {
    const res = await httpRequest.get('me/followings', {
      headers: {
        Authorization: `Bearer ${process.env.REACT_AUTH_TOKEN}`,
      },
      params: {
        page: page,
      },
    })
    return res.data
  } catch (error) {
    console.log(error)
  }
}
