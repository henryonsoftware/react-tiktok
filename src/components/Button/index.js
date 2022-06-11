import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({
  to,
  href,
  className,
  primaryBtn = false,
  outlineBtn = false,
  textBtn = false,
  roundedBtn = false,
  disabledBtn = false,
  smallSizeBtn = false,
  mediumSizeBtn = false,
  largeSizeBtn = false,
  leftIcon,
  rightIcon,
  children,
  onClick,
  ...passProps
}) {
  let Comp = 'button'

  let props = {
    onClick,
    ...passProps,
  }

  // Remove event listener when the button is being disabled
  if (disabledBtn) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key]
      }
    })
  }

  if (to) {
    props.to = to
    Comp = Link
  } else if (href) {
    props.href = href
    Comp = 'a'
  }

  const classes = cx('wrapper', {
    [className]: className,
    primaryBtn,
    outlineBtn,
    textBtn,
    disabledBtn,
    roundedBtn,
    smallSizeBtn,
    mediumSizeBtn,
    largeSizeBtn,
  })

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('label')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  )
}

export default Button
