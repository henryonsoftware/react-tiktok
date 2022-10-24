import PropTypes from 'prop-types'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="max-w-full flex justify-between py-0 px-6 mt-16" style={{ width: '1150px' }}>
        <Sidebar />
        <div>{children}</div>
      </div>
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
