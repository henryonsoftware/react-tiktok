import { useEffect, useState, createContext } from 'react'
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
import AuthModal from '~/layouts/components/Auth/Modal'
import Login from '~/layouts/components/Auth/partials/Login'
import SignUp from '~/layouts/components/Auth/partials/SignUp'
import PhoneAndCodeLoginForm from '~/layouts/components/Auth/partials/PhoneAndCodeLoginForm'
import PhoneAndPasswordLoginForm from '~/layouts/components/Auth/partials/PhoneAndPasswordLoginForm'
import EmailAndPasswordLoginForm from '~/layouts/components/Auth/partials/EmailAndPasswordLoginForm'
import ResetPasswordWithPhone from '~/layouts/components/Auth/partials/ResetPasswordWithPhone'
import ResetPasswordWithEmail from '~/layouts/components/Auth/partials/ResetPasswordWithEmail'

const cx = classNames.bind(styles)

export const ModalBodyNameContext = createContext()

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

  const currentUser = JSON.parse(localStorage.getItem('user'))
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [children, setChildren] = useState(<Login />)
  const [navigateBack, setNavigateBack] = useState(null)
  const [modalBodyName, setModalBodyName] = useState('login')

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

  const handleModalBodyName = (value) => {
    setModalBodyName(value ?? 'login')
  }

  const value = {
    modalBodyName,
    navigateBack,
    handleModalBodyName,
  }

  useEffect(() => {
    switch (modalBodyName) {
      case 'login':
        setChildren(<Login />)
        setNavigateBack(null)
        break
      case 'signup':
        setChildren(<SignUp />)
        setNavigateBack(null)
        break
      case 'login-with-phone':
        setChildren(<PhoneAndCodeLoginForm />)
        setNavigateBack('login')
        break
      case 'login-with-phone-and-password':
        setChildren(<PhoneAndPasswordLoginForm />)
        setNavigateBack('login-with-phone')
        break
      case 'login-with-email':
        setChildren(<EmailAndPasswordLoginForm />)
        setNavigateBack('login-with-phone')
        break
      case 'reset-password-with-phone':
        setChildren(<ResetPasswordWithPhone />)
        setNavigateBack('login-with-phone-and-password')
        break
      case 'reset-password-with-email':
        setChildren(<ResetPasswordWithEmail />)
        setNavigateBack('reset-password-with-phone')
        break
      default:
        setChildren(<Login />)
        break
    }
  }, [modalBodyName])

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
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy content="Inbox">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button textBtn leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Button>
              <Button primaryBtn to="/" onClick={() => setShowAuthModal(true)}>
                Log in
              </Button>
            </>
          )}

          <ModalBodyNameContext.Provider value={value}>
            {showAuthModal && (
              <AuthModal
                children={children}
                onClose={() => {
                  setShowAuthModal(false)
                  setModalBodyName('')
                }}
              />
            )}
          </ModalBodyNameContext.Provider>

          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className="ml-4 h-8 w-8 object-cover rounded-full cursor-pointer"
                src={currentUser.data.avatar}
                alt={currentUser.data.nickname}
                fallback="https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg"
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
