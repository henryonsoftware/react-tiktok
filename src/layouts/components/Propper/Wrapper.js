import PropTypes from 'prop-types'

function Wrapper({ children }) {
  return (
    <div
      className="w-full py-2 px-0 bg-white rounded-lg flex flex-col"
      style={{ boxShadow: 'rgb(0 0 0 /12%) 0px 2px 12px', maxHeight: 'min((100vh - 96px) - 60px, 734px)' }}
    >
      {children}
    </div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Wrapper
