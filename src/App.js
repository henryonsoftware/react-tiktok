import { Fragment, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '~/routes'
import { DefaultLayout } from '~/layouts'

export const AuthUserContext = createContext()

function App() {
  const authUser = JSON.parse(localStorage.getItem('user'))

  return (
    <AuthUserContext.Provider value={authUser}>
      <Router>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, key) => {
              let Layout = DefaultLayout

              if (route.layout) {
                Layout = route.layout
              } else if (route.layout === null) {
                Layout = Fragment
              }

              const Page = route.component
              return (
                <Route
                  key={key}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              )
            })}
          </Routes>
        </div>
      </Router>
    </AuthUserContext.Provider>
  )
}

export default App
