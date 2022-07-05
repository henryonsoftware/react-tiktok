import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function MenuItem({ title, to, icon, activeIcon }) {
  return (
    <NavLink to={to} className={(navData) => cx('menu-item', { active: navData.isActive })}>
      <span className={cx('icon')}>{icon}</span>
      <span className={cx('active-icon')}>{activeIcon}</span>
      <h2 className={cx('title')}>{title}</h2>
    </NavLink>
  )
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
}

export default MenuItem
