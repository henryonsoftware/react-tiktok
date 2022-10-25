import PropTypes from 'prop-types'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="max-w-full flex justify-between py-0 px-0 md:px-6 mt-16" style={{ width: '1150px' }}>
        <div className="md:w-1/4">
          <Sidebar />
        </div>
        <div className="md:w-3/4 md:pl-20 bg-white">{children}</div>
      </div>
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
