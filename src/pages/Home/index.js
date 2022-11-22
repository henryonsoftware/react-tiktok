import { useEffect, useState, useContext, useCallback } from 'react'
import { Virtuoso } from 'react-virtuoso'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { AuthUserContext } from '~/App'
import Video from '~/layouts/components/Video'
import * as timelineService from '~/services/timelineService'

const INIT_PAGE = 1

function HomePage() {
  const [videos, setVideos] = useState([])
  const [page, setPage] = useState(INIT_PAGE)
  const [noMoreVideo, setNoMoreVideo] = useState(false)
  const authUser = useContext(AuthUserContext)
  const accessToken = authUser && authUser.meta.token ? authUser.meta.token : ''

  const loadMore = useCallback(() => {
    return setTimeout(() => {
      timelineService
        .getVideos({ type: 'for-you', page: page, accessToken: accessToken })
        .then((res) => {
          if (Array.isArray(res.data)) {
            setVideos((prev) => [...prev, ...res.data])
            setPage((prev) => prev + 1)
          }

          if (res.data.length === 0 || page === res.meta.pagination.total) {
            setNoMoreVideo(true)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }, 300)
  }, [page, accessToken, setVideos])

  useEffect(() => {
    const timeout = loadMore()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="mx-4 py-8">
      <Virtuoso
        data={videos}
        useWindowScroll
        endReached={() => {
          if (!noMoreVideo) {
            loadMore()
          }
        }}
        itemContent={(index, video) => <Video key={index} video={video} />}
        components={{
          Footer: () => {
            return (
              <div className="flex justify-center p-8">
                {noMoreVideo ? (
                  <p>No more video</p>
                ) : (
                  <FontAwesomeIcon
                    className="text-black/30 text-sm bg-transparent cursor-pointer animate-spin w-4 h-4 md:w-6 md:h-6"
                    icon={faSpinner}
                  />
                )}
              </div>
            )
          },
        }}
      />
    </div>
  )
}

export default HomePage
