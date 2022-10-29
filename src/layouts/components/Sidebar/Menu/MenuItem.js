import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

function MenuItem({ title, to, icon, activeIcon }) {
  return (
    <NavLink
      to={to}
      className={(nav) => {
        if (nav.isActive) {
          return 'flex items-center p-2 hover:bg-black/5 rounded text-primary'
        } else {
          return 'flex items-center p-2 hover:bg-black/5 rounded'
        }
      }}
    >
      <span className="flex">{icon}</span>
      <span className="hidden">{activeIcon}</span>
      <h2 className="hidden md:block text-lg font-bold ml-2">{title}</h2>
    </NavLink>
  )
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
}

export default MenuItem
