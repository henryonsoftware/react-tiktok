import classNames from 'classnames/bind'
import config from '~/config'
import Menu, { MenuItem } from './Menu'
import styles from './Sidebar.module.scss'
import {
  HomeIcon,
  HomeActiveIcon,
  PeopleIcon,
  PeopleActiveIcon,
  CameraIcon,
  CameraActiveIcon,
} from '~/components/Icons'
import SidebarAccounts from '~/components/SidebarAccounts'

const cx = classNames.bind(styles)

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<PeopleIcon />}
          activeIcon={<PeopleActiveIcon />}
        />
        <MenuItem title="Live" to={config.routes.live} icon={<CameraIcon />} activeIcon={<CameraActiveIcon />} />
      </Menu>
      <SidebarAccounts label="Suggested accounts" moreLabel="See all" />
      <SidebarAccounts label="Following accounts" moreLabel="See more" />
    </aside>
  )
}

export default Sidebar
