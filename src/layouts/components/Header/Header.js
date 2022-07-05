import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import 'tippy.js/dist/tippy.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlus,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faGear,
  faArrowRightFromBracket,
  faCoins,
} from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.scss'
import images from '~/assets/images'
import Button from '~/components/Button'
import Menu from '~/layouts/components/Propper/Menu'
import Image from '~/components/Image'
import { InboxIcon, MessageIcon } from '~/components/Icons'
import Search from '../Search'
import config from '~/config'
import Tippy from '@tippyjs/react'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    to: '',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en_US',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi_VN',
          title: 'Tiếng Việt',
        },
      ],
    },
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
  const currentUser = true

  // Handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.language) {
      case 'language':
        // Handle logic
        break
      default:
        break
    }
  }

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@henrybui',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/setting',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ]

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo')}>
          <img src={images.logo} />
        </Link>

        <Search />

        {/* List actions button */}
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Button textBtn leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Button>
              <Tippy content="Message">
                <button className={cx('action-btn')}>
                  <MessageIcon classNames="tiktok-9oofjg-StyledIcon e1nx07zo1" />
                </button>
              </Tippy>
              <Tippy content="Inbox">
                <button className={cx('action-btn')}>
                  <InboxIcon classNames="tiktok-1g0p6jv-StyledInboxIcon e18kkhh41" />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button textBtn leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Button>
              <Button primaryBtn to="/">
                Log in
              </Button>
            </>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={cx('avatar')}
                src="https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg"
                alt="User avatar"
                fallback="https://static.fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  )
}

export default Header
