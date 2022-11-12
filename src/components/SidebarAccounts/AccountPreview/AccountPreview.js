import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '~/components/Button'
import * as userService from '~/services/userService'
import { useContext } from 'react'
import { AuthUserContext } from '~/App'

function AccountPreview({ data }) {
  const authUser = useContext(AuthUserContext)
  const [followed, setFollowed] = useState(data.is_followed)

  const handleToggleFollow = () => {
    if (!authUser || !authUser.meta.token) {
      alert('Please login!')
      return
    }

    if (followed) {
      userService
        .unfollowAnUser({ userId: data.id, accessToken: authUser.meta.token })
        .then((res) => {
          if (res.data) {
            setFollowed(res.data.is_followed)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      userService
        .followAnUser({ userId: data.id, accessToken: authUser.meta.token })
        .then((res) => {
          if (res.data) {
            setFollowed(res.data.is_followed)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  return (
    <div className="w-72 py-3 px-5">
      <header className="flex items-center justify-between mb-3">
        <img
          className="w-8 h-8 rounded-full object-cover mr-3"
          src={data.avatar}
          alt={data.nickname}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null
            currentTarget.src = 'https://avatars.dicebear.com/api/micah/henrybui_io.svg'
          }}
        />
        <Button
          classes={`flex items-center justify-center ml-4 font-primary font-semibold text-base py-2 px-4 rounded cursor-pointer select-none w-28 h-9 border border-solid ${
            followed ? 'border-black/10 hover:bg-black/5 text-black/70' : 'border-primary bg-primary text-white'
          }`}
          onClick={handleToggleFollow}
        >
          {followed ? 'Following' : 'Follow'}
        </Button>
      </header>
      <div>
        <Link to={`/@${data.nickname}`}>
          <h4 className="font-bold text-lg cursor-pointer">
            <span>{data.nickname}</span>
            {data.tick && <FontAwesomeIcon className="ml-1 text-badge-blue" icon={faCircleCheck}></FontAwesomeIcon>}
          </h4>
          <p className="font-semibold text-sm cursor-pointer">{`${data.first_name} ${data.last_name}`}</p>
        </Link>
      </div>
      <div className="mt-2 text-base flex items-center">
        <div className="mr-3">
          <span className="font-bold mr-1.5">{data.followers_count}</span>
          <span className="text-black/50">Followers</span>
        </div>
        <div>
          <span className="font-bold mr-1.5">{data.likes_count}</span>
          <span className="text-black/50">Likes</span>
        </div>
      </div>
    </div>
  )
}

AccountPreview.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AccountPreview
