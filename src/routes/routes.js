import config from '~/config'
import { HeaderOnly } from '~/layouts'
import HomePage from '~/pages/Home'
import Following from '~/pages/Following'
import Live from '~/pages/Live'
import NotFound from '~/pages/NotFound'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/layouts/components/Search'
import WiderLayout from '~/layouts/WiderLayout'

const publicRoutes = [
  { path: config.routes.home, component: HomePage },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile, layout: WiderLayout },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null },
  { path: config.routes.live, component: Live },
  { path: config.routes.notfound, component: NotFound },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
