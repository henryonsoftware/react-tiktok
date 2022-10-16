import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Wrapper as PropperWrapper } from '~/layouts/components/Propper'
import styles from './SidebarAccounts.module.scss'
import AccountPreview from './AccountPreview'

const cx = classNames.bind(styles)

function AccountItem({ data }) {
  const preview = () => {
    return (
      <div tabIndex="-1">
        <PropperWrapper>
          <AccountPreview data={data} />
        </PropperWrapper>
      </div>
    )
  }

  return (
    <div>
      <Tippy interactive delay={[200, 200]} offset={[-10, 2]} render={preview} placement="bottom-start">
        <Link to={`/@${data.nickname}`}>
          <div className={cx('accountItem')}>
            <img src={data.avatar} alt={data.nickname} />
            <div className={cx('itemInfo')}>
              <h4 className={cx('username')}>
                <span>{data.nickname}</span>
                {data.tick && <FontAwesomeIcon className={cx('verifyBadge')} icon={faCircleCheck}></FontAwesomeIcon>}
              </h4>
              <p className={cx('fullname')}>{`${data.first_name} ${data.last_name}`}</p>
            </div>
          </div>
        </Link>
      </Tippy>
    </div>
  )
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AccountItem
