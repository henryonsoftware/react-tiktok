import PropTypes from 'prop-types'
import Button from '~/components/Button'

function MenuItem({ data, onClick }) {
  return (
    <Button
      classes="text-left text-base font-primary py-2 px-4 cursor-pointer py-2.5 py-4 w-full hover:bg-black/5"
      style={{
        borderTop: data.separate ? 'border-top: 1px solid rgba(22, 24, 35, 0.12)' : '0',
      }}
      leftIcon={data.icon}
      onClick={onClick}
    >
      {data.title}
    </Button>
  )
}

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
}

export default MenuItem
