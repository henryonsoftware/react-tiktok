import { lazy, Suspense, useState, useEffect } from 'react'
import config from '~/config'
import Menu, { MenuItem } from './Menu'
import {
  HomeIcon,
  HomeActiveIcon,
  PeopleIcon,
  PeopleActiveIcon,
  CameraIcon,
  CameraActiveIcon,
} from '~/components/Icons'
import * as userService from '~/services/userService'
import SidebarAccountSpinner from './SidebarAccountSpinner'
import { useContext } from 'react'
import { AuthUserContext } from '~/App'
const SidebarAccounts = lazy(() => import('~/components/SidebarAccounts'))

const INIT_PAGE = 1
const PER_PAGE = 5

function Sidebar({ collapse }) {
  const [page, setPage] = useState(INIT_PAGE)
  const [suggestedUsers, setSuggestedUsers] = useState([])
  const [followingUsersPage, setFollowingUsersPage] = useState(INIT_PAGE)
  const [followingUsers, setFollowingUsers] = useState([])
  const authUser = useContext(AuthUserContext)
  const accessToken = authUser && authUser.meta.token ? authUser.meta.token : ''

  // Get suggested users
  useEffect(() => {
    userService
      .getSuggestedUsers({ page, perPage: PER_PAGE, accessToken: accessToken })
      .then((data) => {
        if (Array.isArray(data)) {
          setSuggestedUsers((prevUsers) => [...prevUsers, ...data])
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  // Get following users
  useEffect(() => {
    if (accessToken) {
      userService
        .getFollowingUsers({ page: followingUsersPage, accessToken: accessToken })
        .then((data) => {
          if (Array.isArray(data)) {
            setFollowingUsers((prev) => [...prev, ...data])
          }
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      setFollowingUsers([])
    }
  }, [])

  return (
    <aside
      className={`${
        collapse ? 'md:w-60' : 'md:w-60 lg:w-80'
      } z-10 fixed top-16 bottom-0 bg-white overflow-y-hidden md:hover:overflow-y-scroll px-2 md:px-0 py-2 md:py-5 border-r border-solid border-black/5 md:border-none`}
    >
      <Menu>
        <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} />
        <MenuItem title="Following" to={config.routes.following} icon={<PeopleIcon />} />
        <MenuItem title="Live" to={config.routes.live} icon={<CameraIcon />} />
      </Menu>
      <Suspense fallback={<SidebarAccountSpinner label="Suggested accounts" />}>
        <SidebarAccounts label="Suggested accounts" moreLabel="See all" data={suggestedUsers} />
        <SidebarAccounts label="Following accounts" moreLabel="See more" data={followingUsers} />
      </Suspense>
    </aside>
  )
}

export default Sidebar
