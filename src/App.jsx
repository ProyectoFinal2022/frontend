import { NextUIProvider } from "@nextui-org/react"
import { appConfig } from "./utils/appConfig"
import { AuthContext } from "./context/AuthContext"
import AppRouter from "./routes/AppRouter"

const { Provider } = AuthContext

const App = () => {
  const { light, dark, background } = appConfig.style

  const user = {
    isLogged: false,
    username: 'Jung Eun-bi',
    profilePic: 'https://i.pinimg.com/originals/09/12/82/091282a7be6f9bc38ce18744383c04a6.jpg',
  }

  const objectProvider = { user }

  return (
    <NextUIProvider theme={dark}>
      <Provider value={objectProvider}>
        <div style={background}>
          <AppRouter />
        </div>
      </Provider>
    </NextUIProvider>
  )
}

export default App
