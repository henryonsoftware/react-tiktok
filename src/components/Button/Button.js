import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Button({ to, href, classes, leftIcon, rightIcon, children, onClick, ...passProps }) {
  let Comp = 'button'

  let props = {
    onClick,
    ...passProps,
  }

  if (to) {
    props.to = to
    Comp = Link
  } else if (href) {
    props.href = href
    Comp = 'a'
  }

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className="d-inline-block text-center mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="d-inline-block text-center ml-2">{rightIcon}</span>}
    </Comp>
  )
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  classes: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

export default Button
