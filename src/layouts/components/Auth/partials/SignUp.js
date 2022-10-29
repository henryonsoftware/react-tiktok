import { useContext } from 'react'
import { ModalBodyNameContext } from '~/layouts/components/Header/Header'
import { PeopleIcon, FacebookIcon, GoogleIcon, LineIcon, KakaoTalkIcon, TwitterIcon } from '~/components/Icons'

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
          <div className="font-primary font-semibold text-sm border border-solid border-black/10 text-black/80 py-0 px-3 flex items-center justify-center h-11 relative cursor-pointer mb-4 break-keep space-nowrap bg-white">
            <div className="flex absolute text-lg left-3">{button.icon}</div>
            {button.text}
          </div>
        </a>
      ) : (
        <div>
          <div className="font-primary font-semibold text-sm border border-solid border-black/10 text-black/80 py-0 px-3 flex items-center justify-center h-11 relative cursor-pointer mb-4 break-keep space-nowrap bg-white">
            <div className="flex absolute text-lg left-3">{button.icon}</div>
            {button.text}
          </div>
        </div>
      )
    })
  }

  return (
    <>
      <div className="overflow-auto" style={{ flex: '1 1 0%' }}>
        <div className="m-auto w-4/5">
          <h3 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold my-4 mx-auto">Sign up for TikTok</h3>
          {renderButtons()}
        </div>
      </div>

      <div className="w-full flex items-center justify-center bg-white py-4 px-7.5">
        <p className="font-primary text-black/50 text-xs px-4 md:w-72 lg:w-96 md:text-center">
          By continuing, you agree to TikTok's{' '}
          <a
            className="text-black/80 hover:underline"
            href="https://www.tiktok.com/legal/terms-of-service-row"
            target="_blank"
          >
            Terms of Service
          </a>{' '}
          and confirm that you have read TikTok's{' '}
          <a
            className="text-black/80 hover:underline"
            href="https://www.tiktok.com/legal/page/row/privacy-policy"
            target="_blank"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>

      <div className="font-primary flex items-center justify-center text-base h-16 border-t border-solid border-bg-black/40">
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
