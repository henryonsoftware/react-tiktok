import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '~/components/Button'

function AccountPreview({ data }) {
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
          classes="flex items-center justify-center ml-4 first:ml-0 last:ml-0 font-primary text-base py-2 px-4 rounded cursor-pointer select-none w-28 h-9 text-white bg-primary border border-solid border-primary hover:border-primary"
          style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)), #fe2c55' }}
        >
          Follow
        </Button>
      </header>
      <div>
        <Link to={`@${data.nickname}`}>
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
