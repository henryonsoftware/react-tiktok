import { useEffect, useState } from 'react'
import Video from '~/layouts/components/Video'
import * as timelineService from '~/services/timelineService'

const INIT_PAGE = 1

function Following() {
  const [videos, setVideos] = useState([])
  const [page, setPage] = useState(INIT_PAGE)

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('user'))
    const accessToken = currentUser && currentUser.meta.token ? currentUser.meta.token : ''

    if (accessToken) {
      timelineService
        .getVideos({ type: 'following', page: page, accessToken: accessToken })
        .then((res) => {
          if (Array.isArray(res.data)) {
            setVideos((prev) => [...prev, ...res.data])
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [page])

  return (
    <div className="mx-4 py-8">
      {videos.map((video) => (
        <Video key={video.id} video={video} isFollowingTheOwner={true} />
      ))}
      {videos.length == 0 && <p className="text-lg">No video from your followers</p>}
    </div>
  )
}

export default Following
