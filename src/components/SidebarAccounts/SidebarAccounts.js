import PropTypes from 'prop-types'
import AccountItem from './AccountItem'
function SidebarAccounts({ label, moreLabel, data = [], moreFunc }) {
  return (
    <div className="py-4 relative before:content-[''] before:absolute before:left-2 before:right-2 before:top-0 before:h-px before:bg-black/10 before:scale-y-50">
      <p className="hidden md:block py-0 px-2 text-sm font-primary text-black/70">{label}</p>

      {data.map((account) => (
        <AccountItem key={account.id} data={account} />
      ))}

      <div
        className="hidden md:flex flex-row items-center py-0 px-2 mt-2 text-primary cursor-pointer hover:underline"
        onClick={moreFunc}
      >
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
