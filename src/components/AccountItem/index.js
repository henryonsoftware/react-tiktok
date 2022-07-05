import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import styles from './AccountItem.module.scss'
import Image from '../Image'

const cx = classNames.bind(styles)

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <Image src={data.avatar} className={cx('avatar')} alt={data.full_name} />
      <div className={cx('info')}>
        <h4 className={cx('username')}>
          <span>{data.nickname}</span>{' '}
          {data.tick && <FontAwesomeIcon className={cx('verifyBadge')} icon={faCircleCheck}></FontAwesomeIcon>}
        </h4>
        <p className={cx('fullname')}>{data.full_name}</p>
      </div>
    </Link>
  )
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AccountItem
