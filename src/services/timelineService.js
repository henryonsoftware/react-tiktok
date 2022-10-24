import * as httpRequest from '~/utils/httpRequest'

export const getVideos = async (type, page) => {
  try {
    return await httpRequest.get('videos', {
      params: {
        type: type,
        page: page,
      },
    })
  } catch (error) {
    console.log(error)
  }
}
