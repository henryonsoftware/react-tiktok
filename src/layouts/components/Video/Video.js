import { useState, useEffect, useRef } from 'react'
import Tippy from '@tippyjs/react/headless'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCommentDots, faShare, faMusic, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import AccountPreview from '~/components/SidebarAccounts/AccountPreview'
import { Wrapper as PropperWrapper } from '~/layouts/components/Propper'
import Image from '~/components/Image'
import useElementOnScreen from '~/components/hooks/useElementOnScreen'

function Video({ video }) {
  const preview = () => {
    // Don't render preview with the account has been followed
    if (video.user.is_followed) {
      return <></>
    }

    return (
      <div tabIndex="-1">
        <PropperWrapper>
          <AccountPreview data={video.user} />
        </PropperWrapper>
      </div>
    )
  }

  const [description, setDescription] = useState('')
  const [tags, setTags] = useState(['foryourpage', 'foryou', 'hot'])
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)
  const options = { root: null, rootMargin: '0px', threshold: 0.7 }
  const isVisible = useElementOnScreen(options, videoRef)

  useEffect(() => {
    const videoDesc = video.description

    if (videoDesc.includes('#')) {
      const explodedDesc = videoDesc.split('#')

      setDescription(explodedDesc[0])

      // Remove first item, it is description
      explodedDesc.shift()

      setTags(explodedDesc)
    } else {
      setDescription(videoDesc)
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      if (!playing) {
        videoRef.current.play()
        setPlaying(true)
      }
    } else {
      if (playing) {
        videoRef.current.pause()
        setPlaying(false)
      }
    }
  }, [isVisible])

  return (
    <div className="flex items-start py-6 border-b border-solid border-black/5" style={{ maxWidth: '692px' }}>
      <Tippy interactive delay={[200, 200]} offset={[-10, 2]} render={preview} placement="bottom-start">
        <a href={`@${video.user.nickname}`} className="hidden sm:block">
          <div className="w-14 h-14">
            <Image
              src={video.user.avatar}
              alt={video.user.nickname}
              className="w-14 h-14 rounded-full object-cover overflow-hidden"
              fallback="https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg"
            />
          </div>
        </a>
      </Tippy>
      <div className="w-full ml-0 sm:ml-4">
        <div className="relative">
          <div className="flex items-start mb-1 mr-24">
            <div className="w-10 h-10 mr-3 sm:hidden">
              <Image
                src={video.user.avatar}
                alt={video.user.nickname}
                className="w-10 h-10 rounded-full object-cover overflow-hidden"
                style={{ maxWidth: '2.5rem', maxHeight: '2.5rem' }}
                fallback="https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg"
              />
            </div>
            <a href={`/@${video.user.nickname}`}>
              <h3 className="hover:underline block md:inline-block text-base font-bold mr-2">{`${video.user.first_name} ${video.user.last_name}`}</h3>
              {video.user.tick && (
                <FontAwesomeIcon className="mx-1 text-sky-400" icon={faCircleCheck}></FontAwesomeIcon>
              )}
              <h4 className="block md:inline-block text-sm">{video.user.nickname}</h4>
            </a>
          </div>
          <button className="absolute right-0 top-2 rounded-sm border border-solid border-primary bg-white hover:bg-secondary text-primary text-base font-semibold text-center px-4 sm:px-6 py-0 sm:py-0.5">
            Follow
          </button>
          <div className="text-base mb-2 mr-24">
            {description}
            <br />
            {tags.map((tag, key) => (
              <a key={key} href={`/tag/${tag}`} className="font-bold mr-1.5 hover:underline">
                #{tag}
              </a>
            ))}
          </div>

          {video.music && (
            <div className="text-base flex items-center mb-3">
              <FontAwesomeIcon icon={faMusic} className="mr-2" size="sm"></FontAwesomeIcon>
              <a className="font-semibold hover:underline" href="#">
                {video.music}
              </a>
            </div>
          )}

          <div className="flex">
            <div className="mr-4">
              <video
                ref={videoRef}
                className="w-full rounded-lg overflow-hidden"
                style={{ width: '286px' }}
                controls
                loop={true}
                playsInline
                muted
                poster={video.thumb_url}
              >
                <source src={video.file_url} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </div>
            <div className="flex flex-col items-center justify-end">
              <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/5 rounded-full mb-1">
                <FontAwesomeIcon className="" icon={faHeart} size="xl"></FontAwesomeIcon>
              </button>
              <strong className="text-xs text-black/70 mb-2">{video.likes_count}</strong>
              <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/5 rounded-full mb-1">
                <FontAwesomeIcon className="" icon={faCommentDots} size="xl"></FontAwesomeIcon>
              </button>
              <strong className="text-xs text-black/70 mb-2">{video.comments_count}</strong>
              <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/5 rounded-full mb-1">
                <FontAwesomeIcon className="" icon={faShare} size="xl"></FontAwesomeIcon>
              </button>
              <strong className="text-xs text-black/70">{video.shares_count}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
