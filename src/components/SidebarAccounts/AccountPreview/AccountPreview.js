import { Link } from 'react-router-dom'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import Button from '~/components/Button'
import styles from './AccountPreview.module.scss'

const cx = classNames.bind(styles)

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <img src="https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg" alt="Avatar" />
        <Button primaryBtn>Follow</Button>
      </header>
      <div>
        <Link to="@henrybui_io">
          <h4 className={cx('username')}>
            <span>henrybui_io</span>
            <FontAwesomeIcon className={cx('verifyBadge')} icon={faCircleCheck}></FontAwesomeIcon>
          </h4>
          <p className={cx('fullname')}>Bui Viet Huong</p>
        </Link>
      </div>
      <div className={cx('meta')}>
        <div className={cx('followers')}>
          <span className={cx('count')}>6.5M</span>
          <span className={cx('label')}>Followers</span>
        </div>
        <div>
          <span className={cx('count')}>115M</span>
          <span className={cx('label')}>Likes</span>
        </div>
      </div>
    </div>
  )
}

export default AccountPreview
