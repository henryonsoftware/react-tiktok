import PropTypes from 'prop-types'
import Header from '../components/Header'
import Sidebar from '~/layouts/components/Sidebar'

function WiderLayout({ children }) {
  return (
    <div>
      <Header wider={true} />
      <div className="max-w-full container flex py-0 px-0 md:px-2 mt-16">
        <div>
          <Sidebar collapse={true} />
        </div>
        <div className="ml-16 md:ml-60 z-0 flex-1">{children}</div>
      </div>
    </div>
  )
}

WiderLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WiderLayout
