import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PrivateRoute } from "./PrivateRoute"
import { AuthRoute } from "./AuthRoute"
import { routes } from "./routes"
import { appConfig } from "./../utils"

const AppRouter = () => {
  const { authRoute } = appConfig.style

  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <div style={{ width: '100%', height: '100%' }}>
                  <div style={{ height: '100vh' }}>
                  {
                    route.authRoute ? (
                      <div style={authRoute}>
                        <AuthRoute>{ route.component }</AuthRoute>
                      </div>
                    ) : route.private ? (
                      <PrivateRoute>{ route.component }</PrivateRoute>
                    ) : (route.component)
                  }
                  </div>
                </div>
              }
            />
          ))
        }
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter