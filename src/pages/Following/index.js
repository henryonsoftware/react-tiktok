import { useContext } from 'react'
import { useEffect, useState } from 'react'
import { AuthUserContext } from '~/App'
import Video from '~/layouts/components/Video'
import * as timelineService from '~/services/timelineService'

const INIT_PAGE = 1

function Following() {
  const [videos, setVideos] = useState([])
  const [page, setPage] = useState(INIT_PAGE)
  const authUser = useContext(AuthUserContext)
  const accessToken = authUser && authUser.meta.token ? authUser.meta.token : ''

  useEffect(() => {
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
  }, [page, accessToken])

  return (
    <>
      {videos.length > 0 ? (
        <div className="mx-4 py-8">
          {videos.map((video) => (
            <Video key={video.id} video={video} isFollowingTheOwner={true} />
          ))}
        </div>
      ) : (
        <div className="py-2">
          <p className="text-lg">No video from your followers</p>
        </div>
      )}
    </>
  )
}

export default Following
