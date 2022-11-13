import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Tippy from '@tippyjs/react/headless'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Wrapper as PropperWrapper } from '~/layouts/components/Propper'
import AccountPreview from './AccountPreview'

function AccountItem({ data }) {
  const preview = () => {
    // Don't render preview with the account has been followed
    if (data.is_followed) {
      return <></>
    }

    return (
      <div className="hidden lg:block" tabIndex="-1">
        <PropperWrapper>
          <AccountPreview data={data} />
        </PropperWrapper>
      </div>
    )
  }

  return (
    <div>
      <Tippy
        interactive
        popperOptions={{
          strategy: 'fixed',
        }}
        delay={[700, 200]}
        offset={[0, 2]}
        render={preview}
        placement="bottom-start"
        touch={false}
      >
        <Link to={`/@${data.nickname}`}>
          <div className="flex items-center p-2 cursor-pointer rounded md:hover:bg-black/5">
            <img
              className="w-8 h-8 rounded-full object-cover m-0 md:mr-3"
              src={data.avatar}
              alt={data.nickname}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null
                currentTarget.src = 'https://avatars.dicebear.com/api/micah/henrybui_io.svg'
              }}
            />
            <div className="hidden md:block">
              <h4 className="flex items-center font-secondary text-base font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                <span>{data.nickname}</span>
                {data.tick && <FontAwesomeIcon className="ml-1 text-badge-blue" icon={faCircleCheck}></FontAwesomeIcon>}
              </h4>
              <p className="font-primary text-sm font-normal overflow-hidden text-ellipsis text-black/60">{`${data.first_name} ${data.last_name}`}</p>
            </div>
          </div>
        </Link>
      </Tippy>
    </div>
  )
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AccountItem
