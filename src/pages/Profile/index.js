import { LockIcon } from '~/components/Icons'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Tippy from '@tippyjs/react'
import * as userService from '~/services/userService'
import { FollowedIcon } from '~/components/Icons'

function Profile() {
  const { nickname } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (nickname) {
      const currentUser = JSON.parse(localStorage.getItem('user'))
      const accessToken = currentUser && currentUser.meta.token ? currentUser.meta.token : ''

      userService
        .getUserProfile({ nickname, accessToken })
        .then((data) => {
          setUser(data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [nickname])

  function handleOnMouseOver(e) {
    e.target.play()
  }

  function handleOnMouseLeave(e) {
    e.target.pause()
  }

  return user ? (
    <div className="py-6 px-4">
      <div className="flex items-start">
        <div className="flex items-center mr-6 cursor-pointer">
          <img
            src={user.avatar}
            alt={user.nickname}
            className="w-12 h-12 sm:w-20 sm:h-20 lg:w-28 lg:h-28 rounded-full object-cover overflow-hidden"
          />
        </div>
        <div className="flex flex-col">
          <div className="font-bold text-xl md:text-2xl lg:text-3xl cursor-pointer mb-2">{user.nickname}</div>
          <div className="font-semibold text-base lg:text-lg cursor-pointer">{`${user.first_name} ${user.last_name}`}</div>
          <div className="flex items-center mt-4">
            <button
              className={`text-lg font-semibold rounded-md cursor-pointer py-1 px-3 w-44 ${
                user.is_followed
                  ? 'bg-white text-primary border border-solid border-primary hover:bg-secondary'
                  : 'bg-primary text-white'
              }`}
            >
              {user.is_followed ? 'Message' : 'Follow'}
            </button>
            <Tippy content="Unfollow">
              <button className="flex items-center justify-center ml-2 rounded border border-solid border-black/30 p-2 cursor-pointer bg-transparent text-black/80">
                <FollowedIcon width={20} height={20} />
              </button>
            </Tippy>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center my-6">
        <div className="flex items-center text-black/50 mr-4">
          <span className="font-secondary font-bold text-black mr-2 text-lg">{user.followings_count}</span>
          <span className="font-primary text-base">Following</span>
        </div>
        <div className="flex items-center text-black/50 mr-4">
          <span className="font-secondary font-bold text-black mr-2 text-lg">{user.followers_count}</span>
          <span className="font-primary text-base">Followers</span>
        </div>
        <div className="flex items-center text-black/50 mr-4">
          <span className="font-secondary font-bold text-black mr-2 text-lg">{user.likes_count}</span>
          <span className="font-primary text-base">{user.likes_count > 1 ? 'Likes' : 'Like'}</span>
        </div>
      </div>
      <div className="mt-2 mb-6 text-base">
        <p>{user.bio}</p>
      </div>

      <div className="w-full lg:w-2/5 flex flex-row items-stretch justify-stretch mb-2 text-lg font-semibold relative after:absolute after:content-[''] after:bottom-0 after:w-full after:h-px after:bg-black/20">
        <div className="peer/videos flex flex-1 items-center justify-center h-11 cursor-pointer">
          <p className="flex">
            <span>Videos</span>
          </p>
        </div>
        <div className="peer/liked flex flex-1 items-center justify-center h-11 cursor-pointer text-black/40">
          <p className="flex items-center">
            <LockIcon width="18" height="18" classes="mr-2" />
            Liked
          </p>
        </div>
        <div className="peer-hover/videos:translate-x-0 peer-hover/liked:translate-x-full transition-transform ease-in-out duration-200 absolute left-0 bottom-0 w-1/2 h-0.5 bg-black/80"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
        {user.videos.map((video, key) => (
          <div key={key}>
            <video
              className="rounded-lg overflow-hidden cursor-pointer"
              controls
              loop
              muted
              playsInline
              poster={video.thumb_url}
              onMouseOver={(e) => handleOnMouseOver(e)}
              onMouseLeave={(e) => handleOnMouseLeave(e)}
            >
              <source src={video.file_url} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
            <p className="text-base w-full truncate my-2">{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div>Cannot fetch user profile. Try again later!</div>
  )
}

export default Profile
