import { useEffect, useState } from 'react'
import Video from '~/layouts/components/Video'
import * as timelineService from '~/services/timelineService'

const INIT_PAGE = 1

function HomePage() {
  const [videos, setVideos] = useState([])
  const [page, setPage] = useState(INIT_PAGE)
  const [noMoreVideo, setNoMoreVideo] = useState(false)

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('user'))
    const accessToken = currentUser && currentUser.meta.token ? currentUser.meta.token : ''

    timelineService
      .getVideos({ type: 'for-you', page: page, accessToken: accessToken })
      .then((res) => {
        if (Array.isArray(res.data)) {
          setVideos((prev) => [...prev, ...res.data])
        }

        if (res.data.length === 0 || page === res.meta.pagination.total) {
          setNoMoreVideo(true)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [page])

  return (
    <div className="mx-4 py-8">
      {videos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
      {noMoreVideo && <p className="text-center">No more video to load</p>}
    </div>
  )
}

export default HomePage
