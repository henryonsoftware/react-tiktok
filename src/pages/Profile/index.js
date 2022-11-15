import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Tippy from '@tippyjs/react'
import * as userService from '~/services/userService'
import { LockIcon, FollowedIcon, PenIcon } from '~/components/Icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { AuthUserContext } from '~/App'
import Videos from './Videos'
import Liked from './Liked'

function Profile() {
  const { nickname } = useParams()
  const [user, setUser] = useState(null)
  const [followed, setFollowed] = useState(false)
  const authUser = useContext(AuthUserContext)
  const accessToken = authUser && authUser.meta.token ? authUser.meta.token : ''
  const [activeTab, setActiveTab] = useState('videos')

  useEffect(() => {
    userService
      .getUserProfile({ nickname, accessToken })
      .then((data) => {
        setUser(data)
        setFollowed(data.is_followed)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [nickname, accessToken])

  function handleFollow() {
    if (!accessToken) {
      alert('Please login!')
      return
    }

    userService
      .followAnUser({ userId: user.id, accessToken: accessToken })
      .then((res) => {
        if (res.data) {
          setFollowed(res.data.is_followed)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function handleUnfollow() {
    if (!accessToken) {
      alert('Please login!')
      return
    }

    userService
      .unfollowAnUser({ userId: user.id, accessToken: authUser.meta.token })
      .then((res) => {
        if (res.data) {
          setFollowed(res.data.is_followed)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const renderButtons = () => {
    if (authUser && authUser.data.nickname === nickname) {
      return (
        <button
          className="text-base font-semibold rounded-md cursor-pointer py-1 px-3 w-40 h-10 border border-solid border-black/20 bg-white hover:bg-black/5 flex items-center justify-center"
          onClick={handleFollow}
        >
          <PenIcon width={20} height={20} classes="mr-2" /> Edit profile
        </button>
      )
    }

    if (followed) {
      return (
        <>
          <button className="text-base font-semibold rounded-md cursor-pointer py-1 px-3 w-40 h-10 bg-white text-primary border border-solid border-primary hover:bg-secondary">
            Message
          </button>
          <Tippy content="Unfollow" placement="bottom" touch={false}>
            <button
              className="flex items-center justify-center ml-2 rounded border border-solid border-black/30 w-10 h-10 cursor-pointer bg-transparent text-black/80"
              onClick={handleUnfollow}
            >
              <FollowedIcon width={20} height={20} />
            </button>
          </Tippy>
        </>
      )
    }

    return (
      <button
        className="text-base font-semibold rounded-md cursor-pointer py-1 px-3 w-40 h-10 bg-primary text-white"
        onClick={handleFollow}
      >
        Follow
      </button>
    )
  }

  return user ? (
    <div className="py-6 px-4">
      <div className="flex items-start">
        <div className="flex items-center mr-3 md:mr-6 cursor-pointer">
          <img
            src={user.avatar}
            alt={user.nickname}
            className="w-12 h-12 sm:w-20 sm:h-20 lg:w-28 lg:h-28 rounded-full object-cover overflow-hidden"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center font-bold text-xl md:text-2xl lg:text-3xl cursor-pointer mb-2">
            {user.nickname}{' '}
            {user.tick && (
              <FontAwesomeIcon
                className="ml-2 text-badge-blue text-base md:text-lg lg:text-xl"
                icon={faCircleCheck}
              ></FontAwesomeIcon>
            )}
          </div>
          <div className="font-semibold text-base lg:text-lg cursor-pointer">{`${user.first_name} ${user.last_name}`}</div>
          <div className="flex items-center justify-end md:justify-start mt-4">{renderButtons()}</div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between sm:justify-start my-6">
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
        <div
          className="peer/videos flex flex-1 items-center justify-center h-11 cursor-pointer"
          onClick={() => setActiveTab('videos')}
        >
          <p className="flex">
            <span>Videos</span>
          </p>
        </div>
        <div
          className="peer/liked flex flex-1 items-center justify-center h-11 cursor-pointer text-black/40"
          onClick={() => setActiveTab('liked')}
        >
          <p className="flex items-center">
            <LockIcon width="18" height="18" classes="mr-2" />
            Liked
          </p>
        </div>
        <div
          className={`${
            activeTab === 'videos' ? 'translate-x-0' : 'translate-x-full'
          }  peer-hover/videos:translate-x-0 peer-hover/liked:translate-x-full transition-transform ease-in-out duration-200 absolute left-0 bottom-0 w-1/2 h-0.5 bg-black/80`}
        ></div>
      </div>

      {activeTab === 'videos' && <Videos user={user} videos={user.videos} />}
      {activeTab === 'liked' && <Liked user={user} />}
    </div>
  ) : (
    <div>Cannot fetch user profile. Try again later!</div>
  )
}

export default Profile
