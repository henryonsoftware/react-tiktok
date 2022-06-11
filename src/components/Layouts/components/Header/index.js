import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import images from '~/assets/images'
import Tippy from '@tippyjs/react/headless'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
  faPlus,
  faSignIn,
  faDownload,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
} from '@fortawesome/free-solid-svg-icons'
import { Wrapper as PropperWrapper } from '~/components/Layouts/components/Propper'
import AccountItem from '~/components/AccountItem'
import Button from '~/components/Button'
import Menu from '~/components/Layouts/components/Propper/Menu'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    to: '',
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
    to: '',
  },
]

function Header() {
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([])
    }, 0)
  }, [])

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} />
        </div>
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PropperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PropperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search accounts and videos" spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx('action')}>
          <Button textBtn leftIcon={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}>
            Upload
          </Button>
          <Button primaryBtn rightIcon={<FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>}>
            Log in
          </Button>

          <Menu items={MENU_ITEMS}>
            <button className={cx('more-btn')}>
              <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
            </button>
          </Menu>
        </div>
      </div>
    </header>
  )
}

export default Header
