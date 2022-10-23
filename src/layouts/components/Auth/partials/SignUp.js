import { useContext } from 'react'
import classNames from 'classnames/bind'
import styles from '~/layouts/components/Auth/AuthModal.module.scss'
import { ModalBodyNameContext } from '~/layouts/components/Header/Header'
import { PeopleIcon, FacebookIcon, GoogleIcon, LineIcon, KakaoTalkIcon, TwitterIcon } from '~/components/Icons'

const cx = classNames.bind(styles)

function SignUp() {
  const buttons = [
    {
      href: '/signup/phone-or-email/phone',
      icon: <PeopleIcon width={20} height={20} />,
      text: 'Use phone or email',
    },
    {
      icon: <FacebookIcon width={20} height={20} />,
      text: 'Continue with Facebook',
    },
    {
      icon: <GoogleIcon width={20} height={20} />,
      text: 'Continue with Google',
    },
    {
      icon: <LineIcon width={20} height={20} />,
      text: 'Continue with Line',
    },
    {
      icon: <TwitterIcon width={20} height={20} />,
      text: 'Continue with Twitter',
    },
    {
      icon: <KakaoTalkIcon width={20} height={20} />,
      text: 'Continue with KakaoTalk',
    },
  ]

  const value = useContext(ModalBodyNameContext)

  const renderButtons = () => {
    return buttons.map((button, key) => {
      return button.href ? (
        <a href={button.href} key={key}>
          <div className={cx('channel-item')}>
            <div className={cx('icon')}>{button.icon}</div>
            {button.text}
          </div>
        </a>
      ) : (
        <div>
          <div className={cx('channel-item')}>
            <div className={cx('icon')}>{button.icon}</div>
            {button.text}
          </div>
        </div>
      )
    })
  }

  return (
    <>
      <div className="overflow-auto" style={{ flex: '1 1 0%' }}>
        <div className="m-auto" style={{ width: '375px' }}>
          <h3 className="text-center text-4xl font-bold my-4 mx-auto">Sign up for TikTok</h3>
          {renderButtons()}
        </div>
      </div>

      <div className={cx('term-and-condition')}>
        <p>
          By continuing, you agree to TikTok's{' '}
          <a className={cx('link')} href="https://www.tiktok.com/legal/terms-of-service-row" target="_blank">
            Terms of Service
          </a>{' '}
          and confirm that you have read TikTok's{' '}
          <a className={cx('link')} href="https://www.tiktok.com/legal/page/row/privacy-policy" target="_blank">
            Privacy Policy
          </a>
          .
        </p>
      </div>

      <div className={cx('modal-footer')}>
        <div>Already have an account?</div>
        <a
          className="hover:underline font-semibold ml-2 text-primary"
          href="/login"
          onClick={(event) => {
            event.preventDefault()
            value.handleModalBodyName('login')
          }}
        >
          Login
        </a>
      </div>
    </>
  )
}

export default SignUp
