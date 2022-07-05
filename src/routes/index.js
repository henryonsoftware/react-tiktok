import routesConfig from '~/config/route'
import { HeaderOnly } from '~/layouts'

import HomePage from '~/pages/Home'
import FollowingPage from '~/pages/Following'
import ProfilePage from '~/pages/Profile'
import UploadPage from '~/pages/Upload'
import Search from '~/layouts/components/Search'

const publicRoutes = [
  { path: routesConfig.home, component: HomePage },
  { path: routesConfig.following, component: FollowingPage },
  { path: routesConfig.profile, component: ProfilePage },
  { path: routesConfig.upload, component: UploadPage, layout: HeaderOnly },
  { path: routesConfig.search, component: Search, layout: null },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
