import { useEffect, useState, createContext } from 'react'
import { Link } from 'react-router-dom'
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
  faArrowUpFromBracket,
} from '@fortawesome/free-solid-svg-icons'

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
import { useContext } from 'react'
import { AuthUserContext } from '~/App'

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

function Header({ wider }) {
  const authUser = useContext(AuthUserContext)

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@profile',
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

    switch (menuItem.to) {
      case '/logout':
        localStorage.removeItem('user')
        window.location.reload()
        break
      case '/@profile':
        window.location.href = `/@${authUser.data.nickname}`
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
        setNavigateBack('login-with-email')
        break
      case 'login-with-phone-and-password':
        setChildren(<PhoneAndPasswordLoginForm />)
        setNavigateBack('login-with-phone')
        break
      case 'login-with-email':
        setChildren(<EmailAndPasswordLoginForm />)
        setNavigateBack('login')
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
    <header
      className={`py-2 bg-white z-50 fixed top-0 left-0 ${
        wider ? 'max-w-full container' : 'flex w-full justify-center'
      }`}
      style={{ boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.12)' }}
    >
      <div className="h-full flex items-center justify-between py-0 px-6" style={{ width: wider ? 'auto' : '1150px' }}>
        <Link to={config.routes.home} className="flex">
          <img src={images.logo} alt="Tiktok" />
        </Link>

        <Search />

        {/* List actions button */}
        <div className="flex items-center">
          {authUser ? (
            <div className="flex items-center">
              <Link to="/upload" className="flex items-center">
                {/* Display on desktop */}
                <Button
                  classes="hidden sm:flex items-center justify-center ml-4 first:ml-0 last:ml-0 font-primary text-base py-2 px-4 rounded cursor-pointer select-none w-28 h-9 text-black/80 font-semibold hover:bg-black/5 border border-solid border-black/10"
                  leftIcon={<FontAwesomeIcon icon={faPlus} />}
                >
                  Upload
                </Button>

                {/* Display on mobile */}
                <FontAwesomeIcon
                  className="sm:hidden cursor-pointer bg-transparent text-black/80 w-6 h-5"
                  icon={faArrowUpFromBracket}
                />
              </Link>

              <Tippy content="Message" touch={false}>
                <button className="relative h-8 cursor-pointer ml-4 bg-transparent text-black/80">
                  <MessageIcon />
                </button>
              </Tippy>

              <Tippy content="Inbox" touch={false}>
                <button className="relative h-8 cursor-pointer ml-4 bg-transparent text-black/80">
                  <InboxIcon />
                </button>
              </Tippy>
            </div>
          ) : (
            <>
              <Button
                classes="hidden sm:flex items-center justify-center ml-4 first:ml-0 last:ml-0 font-primary text-base py-2 px-4 rounded cursor-pointer select-none w-28 h-9 text-black/80 font-semibold hover:bg-black/5 border border-solid border-black/10"
                leftIcon={<FontAwesomeIcon icon={faPlus} className="hidden md:inline-block" />}
                onClick={() => alert('Please login!')}
              >
                Upload
              </Button>

              <Button
                classes="flex items-center justify-center ml-4 first:ml-0 last:ml-0 font-primary text-base py-2 px-4 rounded cursor-pointer select-none w-28 h-9 text-white bg-primary border border-solid border-primary hover:border-primary"
                style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)), #fe2c55' }}
                to="/"
                onClick={(e) => {
                  e.preventDefault()
                  setShowAuthModal(true)
                }}
              >
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

          <Menu items={authUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {authUser ? (
              <div className="w-8 h-8 ml-4">
                <Image
                  src={authUser.data.avatar}
                  alt={authUser.data.nickname}
                  className="w-8 h-8 rounded-full object-cover overflow-hidden cursor-pointer"
                  style={{ maxWidth: '2rem', maxHeight: '2rem' }}
                  fallback="https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg"
                />
              </div>
            ) : (
              <button className="ml-4 p-2 text-lg bg-transparent cursor-pointer">
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
