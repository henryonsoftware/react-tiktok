import { useEffect, useState } from 'react'
import Video from '~/layouts/components/Video'
import * as timelineService from '~/services/timelineService'

const INIT_PAGE = 1

function HomePage() {
  const [videos, setVideos] = useState([])
  const [page, setPage] = useState(INIT_PAGE)
  const [noMoreVideo, setNoMoreVideo] = useState(false)

  useEffect(() => {
    timelineService
      .getVideos('for-you', page)
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
    </div>
  )
}

export default HomePage
