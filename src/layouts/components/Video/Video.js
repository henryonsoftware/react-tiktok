import Tippy from '@tippyjs/react/headless'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCommentDots, faShare, faMusic, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import AccountPreview from '~/components/SidebarAccounts/AccountPreview'
import { Wrapper as PropperWrapper } from '~/layouts/components/Propper'

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

  return (
    <div className="flex items-start py-5 border-b border-solid border-black/10" style={{ maxWidth: '692px' }}>
      <Tippy interactive delay={[200, 200]} offset={[-10, 2]} render={preview} placement="bottom-start">
        <a className="" href="#">
          <img
            className="rounded-full w-14 h-14 object-cover overflow-hidden"
            src={video.user.avatar}
            alt={video.user.nickname}
          />
        </a>
      </Tippy>
      <div className="w-full ml-4">
        <div className="relative">
          <div className="flex items-center mb-1">
            <a href={`/@${video.user.nickname}`}>
              <h3 className="hover:underline inline-block text-base font-bold mr-2">{`${video.user.first_name} ${video.user.last_name}`}</h3>
              {video.user.tick && (
                <FontAwesomeIcon className="mx-1 text-sky-400" icon={faCircleCheck}></FontAwesomeIcon>
              )}
              <h4 className="inline-block text-sm">{video.user.nickname}</h4>
            </a>
          </div>
          <button className="absolute right-0 top-2 rounded-sm border border-solid border-primary bg-white hover:bg-secondary text-primary text-base font-semibold text-center px-6 py-0.5">
            Follow
          </button>
          <div className="text-base mb-2">
            <span>{video.description}</span>
            <a className="font-bold mx-1 hover:underline" href="#">
              #พ่อบ้านใจกล้า
            </a>
            <a className="font-bold mx-1 hover:underline" href="#">
              #yamamotohouse
            </a>
          </div>

          {video.music && (
            <div className="text-base flex items-center mb-2">
              <FontAwesomeIcon icon={faMusic} className="mr-2" size="sm"></FontAwesomeIcon>
              <a className="font-semibold hover:underline" href="#">
                {video.music}
              </a>
            </div>
          )}

          <div className="flex">
            <div className="mr-4">
              <video
                className="w-full rounded-lg overflow-hidden"
                style={{ width: '286px' }}
                controls
                loop={true}
                autoPlay
                muted
                poster={video.thumb_url}
              >
                <source src={video.file_url} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </div>
            <div className="flex flex-col items-center justify-end">
              <button className="w-12 h-12 flex items-center justify-center bg-black/5 rounded-full mb-1">
                <FontAwesomeIcon className="" icon={faHeart} size="xl"></FontAwesomeIcon>
              </button>
              <strong className="text-xs text-black/70 mb-2">{video.likes_count}</strong>
              <button className="w-12 h-12 flex items-center justify-center bg-black/5 rounded-full mb-1">
                <FontAwesomeIcon className="" icon={faCommentDots} size="xl"></FontAwesomeIcon>
              </button>
              <strong className="text-xs text-black/70 mb-2">{video.comments_count}</strong>
              <button className="w-12 h-12 flex items-center justify-center bg-black/5 rounded-full mb-1">
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
