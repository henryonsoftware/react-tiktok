import PropTypes from 'prop-types'
import AccountItem from './AccountItem'
function SidebarAccounts({ label, moreLabel, data = [] }) {
  return (
    <div className="py-4">
      <p className="hidden md:block py-0 px-2 text-sm font-primary text-black/60">{label}</p>

      {data.map((account) => (
        <AccountItem key={account.id} data={account} />
      ))}

      <div className="hidden md:flex flex-row items-center py-0 px-2 mt-2 text-primary cursor-pointer hover:underline">
        {moreLabel}
      </div>
    </div>
  )
}

SidebarAccounts.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.array,
}

export default SidebarAccounts
