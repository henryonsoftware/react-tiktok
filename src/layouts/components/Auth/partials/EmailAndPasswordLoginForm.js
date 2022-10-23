import { useContext } from 'react'
import classNames from 'classnames/bind'
import styles from '../AuthModal.module.scss'
import { ModalBodyNameContext } from '~/layouts/components/Header/Header'

const cx = classNames.bind(styles)

function EmailAndPasswordLoginForm() {
  const value = useContext(ModalBodyNameContext)

  return (
    <>
      <div className="overflow-auto" style={{ flex: '1 1 0%' }}>
        <div className="m-auto" style={{ width: '375px' }}>
          <h3 className="text-center text-4xl font-bold my-4 mx-auto">Log in</h3>
          <div>
            <div>
              <form>
                <div className="text-base font-semibold flex justify-between mb-2">
                  <label>Email or username</label>
                  <a
                    href="#"
                    className="font-semibold text-xs hover:underline text-black/60"
                    onClick={(event) => {
                      event.preventDefault()
                      value.handleModalBodyName('login-with-phone')
                    }}
                  >
                    Log in with phone
                  </a>
                </div>
                <div className="mb-2">
                  <input
                    className="rounded text-base h-11 w-full border border-solid border-black/10 bg-black/5 caret-primary"
                    style={{ paddingInlineStart: '12px', paddingInlineEnd: '12px' }}
                    name="email"
                    type="text"
                    placeholder="Username or email"
                  />
                </div>
                <div className="mb-2">
                  <input
                    className="rounded text-base h-11 w-full border border-solid border-black/10 bg-black/5 caret-primary"
                    style={{ paddingInlineStart: '12px', paddingInlineEnd: '12px' }}
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <a
                  href="#"
                  className="font-semibold text-xs hover:underline text-black/60"
                  onClick={(event) => {
                    event.preventDefault()
                    value.handleModalBodyName('reset-password-with-email')
                  }}
                >
                  Forget password?
                </a>
                <button className={cx('submit-btn')}>Log in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmailAndPasswordLoginForm
