import PropTypes from 'prop-types'
import Tippy from '@tippyjs/react/headless'
import { Wrapper as PropperWrapper } from '~/layouts/components/Propper'
import MenuItem from './MenuItem'
import Header from './Header'
import { useState } from 'react'

const defaultFn = () => {}

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }])
  const currentMenu = history[history.length - 1]

  const renderItems = () => {
    return currentMenu.data.map((item, index) => {
      const isParent = !!item.children
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children])
            } else {
              onChange(item)
            }
          }}
        />
      )
    })
  }

  // Reset to first page
  const handleResetMenu = () => setHistory((prev) => prev.slice(0, 1))

  return (
    <Tippy
      hideOnClick={hideOnClick}
      interactive
      delay={[0, 500]}
      offset={[12, 10]}
      placement="bottom-end"
      render={(attrs) => (
        <div className="justify-start" style={{ width: '224px' }} tabIndex="-1" {...attrs}>
          <PropperWrapper className="pb-2">
            {history.length > 1 && (
              <Header
                title={currentMenu.title}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1))
                }}
              />
            )}
            <div className="overflow-auto">{renderItems()}</div>
          </PropperWrapper>
        </div>
      )}
      onHide={handleResetMenu}
    >
      {children}
    </Tippy>
  )
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
}

export default Menu
