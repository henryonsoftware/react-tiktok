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
