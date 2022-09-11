import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './SidebarAccounts.module.scss'
import AccountItem from './AccountItem'

const cx = classNames.bind(styles)

function SidebarAccounts({ label, moreLabel }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>

      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />

      <div className={cx('seeAll')}>
        <p>{moreLabel}</p>
      </div>
    </div>
  )
}

SidebarAccounts.propTypes = {
  label: PropTypes.string.isRequired,
}

export default SidebarAccounts
