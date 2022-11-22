import PropTypes from 'prop-types'
import Header from '../components/Header'
import Sidebar from '~/layouts/components/Sidebar'

function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="max-w-full py-0 px-0 md:px-6 mt-16" style={{ width: '1150px' }}>
        <div>
          <Sidebar />
        </div>
        <div className="ml-16 md:ml-60 lg:ml-96 md:w-3/4">{children}</div>
      </div>
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
