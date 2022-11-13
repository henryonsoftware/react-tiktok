import { lazy, Suspense, useState, useEffect } from 'react'
import config from '~/config'
import Menu, { MenuItem } from './Menu'
import { HomeIcon, PeopleIcon, CameraIcon } from '~/components/Icons'
import * as userService from '~/services/userService'
import SidebarAccountSpinner from './SidebarAccountSpinner'
import { useContext } from 'react'
import { AuthUserContext } from '~/App'
const SidebarAccounts = lazy(() => import('~/components/SidebarAccounts'))

const INIT_PAGE = 1
const PER_PAGE = 5

function Sidebar({ collapse }) {
  const [sPerPage, setSPerPage] = useState(PER_PAGE)
  const [sUsers, setSUsers] = useState([])
  const [fPerPage, setFPerPage] = useState(INIT_PAGE)
  const [fUsers, setFUser] = useState([])
  const authUser = useContext(AuthUserContext)
  const accessToken = authUser && authUser.meta.token ? authUser.meta.token : ''

  // Get suggested users
  useEffect(() => {
    userService
      .getSuggestedUsers({ page: 1, perPage: sPerPage, accessToken: accessToken })
      .then((data) => {
        if (Array.isArray(data)) {
          setSUsers(data)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [accessToken, sPerPage])

  // Get following users
  useEffect(() => {
    if (accessToken) {
      userService
        .getFollowingUsers({ page: fPerPage, accessToken: accessToken })
        .then((data) => {
          if (Array.isArray(data)) {
            if (fPerPage === INIT_PAGE) {
              setFUser(data)
            } else {
              setFUser((prev) => [...prev, ...data])
            }
          }
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      setFUser([])
    }
  }, [accessToken, fPerPage])

  function moreSUsers() {
    if (sUsers.length === PER_PAGE) {
      // Get 20 users
      setSPerPage(PER_PAGE * 4)
    } else {
      setSPerPage(PER_PAGE)
    }
  }

  function moreFUsers() {
    // Stop call API if last page has < PER_PAGE users (no more users)
    // Or has reached 6th page
    if (fUsers.length === PER_PAGE * 6 || fUsers.length < fPerPage * PER_PAGE) {
      setFPerPage(INIT_PAGE)
    } else {
      setFPerPage((prevPage) => prevPage + 1)
    }
  }

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
        <SidebarAccounts
          label="Suggested accounts"
          moreLabel={sUsers.length === PER_PAGE ? 'See all' : 'See less'}
          data={sUsers}
          moreFunc={moreSUsers}
        />
        <SidebarAccounts
          label="Following accounts"
          moreLabel={fUsers.length === PER_PAGE * 6 || fUsers.length < PER_PAGE * fPerPage ? 'See less' : 'See more'}
          data={fUsers}
          moreFunc={moreFUsers}
        />
      </Suspense>
    </aside>
  )
}

export default Sidebar
