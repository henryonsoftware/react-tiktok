import { useContext } from 'react'
import classNames from 'classnames/bind'
import styles from './AuthModal.module.scss'
import { CloseButtonIcon } from '~/components/Icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { ModalBodyNameContext } from '~/layouts/components/Header/Header'

const cx = classNames.bind(styles)

function Modal({ children, onClose }) {
  const value = useContext(ModalBodyNameContext)

  return (
    <div className="z-50 fixed overflow-auto outline-none flex" style={{ inset: 0 }}>
      <div className="fixed inset-0" style={{ background: 'rgba(0, 0, 0, 0.5)' }}></div>
      <div className="rounded-lg m-auto relative h-4/5 bg-white overflow-hidden" style={{ maxHeight: '693px' }}>
        <div className="relative h-full pt-12 flex flex-col" style={{ width: '483px' }}>
          {value.navigateBack && (
            <div
              className="absolute top-5 left-5 text-xl cursor-pointer"
              onClick={(event) => {
                event.preventDefault()
                value.handleModalBodyName(value.navigateBack)
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
          )}
          <div
            className="absolute top-5 right-5 rounded-full cursor-pointer flex justify-center items-center bg-black/5 w-10 h-10"
            onClick={onClose}
          >
            <CloseButtonIcon width={25} height={25} />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
