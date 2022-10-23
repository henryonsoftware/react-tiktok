import { useState } from 'react'
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
import * as userService from '~/services/userService'
import { useEffect } from 'react'

const cx = classNames.bind(styles)

const INIT_PAGE = 1
const PER_PAGE = 5

function Sidebar() {
  const [page, setPage] = useState(INIT_PAGE)
  const [suggestedUsers, setSuggestedUsers] = useState([])

  const [followingUsersPage, setFollowingUsersPage] = useState(INIT_PAGE)
  const [followingUsers, setFollowingUsers] = useState([])

  useEffect(() => {
    // userService
    //   .getSuggestedUsers({ page, perPage: PER_PAGE })
    //   .then((data) => {
    //     setSuggestedUsers((prevUsers) => [...prevUsers, ...data])
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // userService
    //   .getFollowingUsers(followingUsersPage)
    //   .then((data) => {
    //     setFollowingUsersPage((prev) => [...prev, ...data])
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  }, [])

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
      <SidebarAccounts label="Suggested accounts" moreLabel="See all" data={suggestedUsers} />
      <SidebarAccounts label="Following accounts" moreLabel="See more" data={followingUsers} />
    </aside>
  )
}

export default Sidebar
