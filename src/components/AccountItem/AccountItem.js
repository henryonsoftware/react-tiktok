import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import Image from '../Image'

function AccountItem({ data, className }) {
  return (
    <Link to={`/@${data.nickname}`} className={className}>
      <Image
        src={data.avatar}
        alt={data.full_name}
        className="w-10 h-10 rounded-full object-cover mr-3"
        fallback="https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg"
      />
      <div className="flex-1">
        <h4 className="text-base font-semibold overflow-hidden text-ellipsis whitespace-nowrap text-black/80">
          <span>{data.nickname}</span>{' '}
          {data.tick && <FontAwesomeIcon className="mx-1 text-sky-400" icon={faCircleCheck}></FontAwesomeIcon>}
        </h4>
        <p className="text-sm overflow-hidden text-ellipsis text-black/50">{data.full_name}</p>
      </div>
    </Link>
  )
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AccountItem
