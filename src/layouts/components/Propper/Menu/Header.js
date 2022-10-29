import PropTypes from 'prop-types'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header({ title, onBack }) {
  return (
    <header className="relative h-12 flex items-center shrink-0">
      <button className="cursor-pointer w-12 h-full bg-transparent" onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <span className="absolute left-1/2 -translate-x-1/2 text-base font-semibold">{title}</span>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
}

export default Header
