import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Wrapper as PropperWrapper } from '~/layouts/components/Propper'
import styles from './SidebarAccounts.module.scss'
import AccountPreview from './AccountPreview'

const cx = classNames.bind(styles)

function AccountItem() {
  const preview = () => {
    return (
      <div tabIndex="-1">
        <PropperWrapper>
          <AccountPreview />
        </PropperWrapper>
      </div>
    )
  }

  return (
    <div>
      <Tippy interactive delay={[800, 200]} offset={[-10, 2]} render={preview} placement="bottom-start">
        <Link to="/@henrybui_io">
          <div className={cx('accountItem')}>
            <img src="https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg" alt="Avatar" />
            <div className={cx('itemInfo')}>
              <h4 className={cx('username')}>
                <span>henrybui_io</span>
                <FontAwesomeIcon className={cx('verifyBadge')} icon={faCircleCheck}></FontAwesomeIcon>
              </h4>
              <p className={cx('fullname')}>Bui Viet Huong</p>
            </div>
          </div>
        </Link>
      </Tippy>
    </div>
  )
}

export default AccountItem
