import { useTheme, createTheme } from "@nextui-org/react"
import BackgroundIMG from "./../assets/images/background.jpg"

export const appConfig = {
    appName: 'FinalProject v1',
    appLogo: 'https://www.ipf.edu.ar/img/logo.png',
    style: {
        appTheme: () => useTheme(),
        activeColor: 'secondary',
        navBarVariant: 'floating',
        navBarContentVariant: 'highlight-solid-rounded',
        light: createTheme({
            type: 'light',
            theme: {
                colors: {
                    color: '#333',
                    backgoundColor: '#fff',
                },
            },
        }),
        dark: createTheme({
            type: 'dark',
            theme: {
                colors: {
                    color: '#999',
                    backgoundColor: '#1a1919',
                },
            },
        }),
        background: {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BackgroundIMG})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            heigth: '100%',
            with: '100%'
        },
        authRoute: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }
    },
}
