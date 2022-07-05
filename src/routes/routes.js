import config from '~/config'
import { HeaderOnly } from '~/layouts'

import HomePage from '~/pages/Home'
import FollowingPage from '~/pages/Following'
import Live from '~/pages/Live'
import ProfilePage from '~/pages/Profile'
import UploadPage from '~/pages/Upload'
import Search from '~/layouts/components/Search'

const publicRoutes = [
  { path: config.routes.home, component: HomePage },
  { path: config.routes.following, component: FollowingPage },
  { path: config.routes.profile, component: ProfilePage },
  { path: config.routes.upload, component: UploadPage, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null },
  { path: config.routes.live, component: Live },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
