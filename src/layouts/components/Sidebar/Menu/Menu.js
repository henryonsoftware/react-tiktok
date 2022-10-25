import PropTypes from 'prop-types'
function Menu({ children }) {
  return <nav className="mb-2">{children}</nav>
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Menu
