// Layouts
import { HeaderOnly } from '~/components/Layouts'

import HomePage from '~/pages/Home'
import FollowingPage from '~/pages/Following'
import ProfilePage from '~/pages/Profile'
import UploadPage from '~/pages/Upload'

const publicRoutes = [
  { path: '/', component: HomePage },
  { path: '/following', component: FollowingPage },
  { path: '/@:nickname', component: ProfilePage },
  { path: '/upload', component: UploadPage, layout: HeaderOnly },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
