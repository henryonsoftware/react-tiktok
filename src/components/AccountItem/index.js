import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img src="https://ui-avatars.com/api/?size=128" className={cx('avatar')} alt="Avatar" />
      <div className={cx('info')}>
        <h4 className={cx('username')}>
          <span>henrybui_io</span>{' '}
          <FontAwesomeIcon className={cx('verifyBadge')} icon={faCircleCheck}></FontAwesomeIcon>
        </h4>
        <p className={cx('fullname')}>Henry Bui</p>
      </div>
    </div>
  )
}

export default AccountItem
