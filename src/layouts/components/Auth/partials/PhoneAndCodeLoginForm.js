import { useContext } from 'react'
import classNames from 'classnames/bind'
import styles from '../AuthModal.module.scss'
import { ModalBodyNameContext } from '~/layouts/components/Header/Header'

const cx = classNames.bind(styles)

function PhoneAndCodeLoginForm() {
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
                  <label>Phone</label>
                  <a
                    href="#"
                    className="font-semibold text-xs hover:underline text-black/60"
                    onClick={(event) => {
                      event.preventDefault()
                      value.handleModalBodyName('login-with-email')
                    }}
                  >
                    Log in with email or username
                  </a>
                </div>
                <div className="flex items-center rounded border border-solid border-black/10 mb-2 bg-black/5">
                  <div className="relative h-11 p-3 flex items-center text-base leading-none cursor-pointer after:content-[''] after:w-px after:h-7 after:bg-black/10 after:absolute after:right-0 after:left-unset">
                    <span style={{ marginInlineEnd: '12px' }}>TH +66</span>
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 48 48"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M25.5187 35.2284C24.7205 36.1596 23.2798 36.1596 22.4816 35.2284L8.83008 19.3016C7.71807 18.0042 8.63988 16 10.3486 16H37.6517C39.3604 16 40.2822 18.0042 39.1702 19.3016L25.5187 35.2284Z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    className="h-11 grow bg-transparent text-base outline-none caret-primary"
                    style={{ paddingInlineStart: '12px', paddingInlineEnd: '12px' }}
                    name="phoneNumber"
                    type="text"
                    placeholder="Phone number"
                  />
                </div>
                <div className="flex items-center justify-between rounded mb-2 bg-black/5">
                  <input
                    className="bg-transparent grow h-11 rounded-l border text-base border-solid border-black/10 caret-primary"
                    style={{ paddingInlineStart: '12px', paddingInlineEnd: '12px' }}
                    name="confirmCode"
                    type="text"
                    placeholder="Enter 6-digit number"
                  />
                  <button className="border border-solid border-black/10 h-11 rounded-r text-black/20 cursor-pointer text-base font-semibold font-primary px-4">
                    Send code
                  </button>
                </div>

                <a
                  href="#"
                  className="font-semibold text-xs hover:underline text-black/60"
                  onClick={(event) => {
                    event.preventDefault()
                    value.handleModalBodyName('login-with-phone-and-password')
                  }}
                >
                  Log in with password
                </a>
                <button
                  className="mt-8 border-none bg-primary text-white text-base leading-5 font-bold font-primary rounded flex items-center justify-center w-full cursor-pointer py-1.5 px-2"
                  style={{
                    minWidth: '120px',
                    minHeight: '46px',
                  }}
                >
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PhoneAndCodeLoginForm
