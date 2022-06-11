import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4f52c0ed57eb81332ea86b4f1e878e80~c5_300x300.webp?x-expires=1655089200&x-signature=%2BoZTUEJbF2Ls7ImXeZbAIpC%2BkWg%3D"
        className={cx('avatar')}
        alt=""
      />
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
