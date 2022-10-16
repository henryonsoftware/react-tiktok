import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import Button from '~/components/Button'
import styles from './AccountPreview.module.scss'

const cx = classNames.bind(styles)

function AccountPreview({ data }) {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <img src={data.avatar} alt={data.nickname} />
        <Button primaryBtn>Follow</Button>
      </header>
      <div>
        <Link to={`@${data.nickname}`}>
          <h4 className={cx('username')}>
            <span>{data.nickname}</span>
            {data.tick && <FontAwesomeIcon className={cx('verifyBadge')} icon={faCircleCheck}></FontAwesomeIcon>}
          </h4>
          <p className={cx('fullname')}>{`${data.first_name} ${data.last_name}`}</p>
        </Link>
      </div>
      <div className={cx('meta')}>
        <div className={cx('followers')}>
          <span className={cx('count')}>{data.followers_count}</span>
          <span className={cx('label')}>Followers</span>
        </div>
        <div>
          <span className={cx('count')}>{data.likes_count}</span>
          <span className={cx('label')}>Likes</span>
        </div>
      </div>
    </div>
  )
}

AccountPreview.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AccountPreview
