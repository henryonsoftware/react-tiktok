import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './SidebarAccounts.module.scss'
import AccountItem from './AccountItem'

const cx = classNames.bind(styles)

function SidebarAccounts({ label, moreLabel, data = [] }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>

      {data.map((account) => (
        <AccountItem key={account.id} data={account} />
      ))}

      <div className={cx('seeAll')}>
        <p>{moreLabel}</p>
      </div>
    </div>
  )
}

SidebarAccounts.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.array,
}

export default SidebarAccounts
