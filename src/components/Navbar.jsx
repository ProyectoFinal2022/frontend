import { useContext } from "react"
import { Navbar, Text, Dropdown, User, Badge } from "@nextui-org/react"
import { appConfig } from "./../utils"
import { AuthContext } from "./../context/AuthContext"
import { Link as RouterLink } from "react-router-dom"

const {
    Content: NavbarContent,
    Link: NavbarLink,
    Item: NavbarItem,
    Toggle: NavbarToggle,
    Brand: NavbarBrand,
    Collapse: NavbarCollapse,
    CollapseItem: NavbarCollapseItem
} = Navbar

const {
    Menu: DropdownMenu,
    Button: DropdownButton,
    Item: DropdownItem,
} = Dropdown

export const AppNavbar = () => {
    const { user } = useContext(AuthContext)
    const { appName, appLogo } = appConfig
    const { activeColor, navBarVariant, navBarContentVariant, appTheme } = appConfig.style
    const { isDark } = appTheme()
    const { isLogged, username, profilePic } = user

    const navBarRoutes = [
        {
            title: 'Inicio',
            href: '/',
            isActive: true,
        },{
            title: '¿Qué es ' + appName + '?',
            href: '/login',
            isActive: false,
        },{
            title: 'Contacto',
            href: '#',
            isActive: false,
        }
    ]

    return (
        <Navbar isBordered={isDark} variant={navBarVariant}>
            <NavbarToggle showIn="xs" />

            <NavbarBrand css={{ "@xs": { w: "12%" } }}>
                <img src={appLogo} width="120px"/>
                
                <Text b color="inherit" hideIn="xs">
                    { appName }
                </Text>
            </NavbarBrand>

            <NavbarContent
                enableCursorHighlight
                activeColor={activeColor}
                hideIn="xs"
                variant={navBarContentVariant}
            >
                {
                    navBarRoutes.map((item, key) => (
                        <NavbarLink href={item.href} isActive={item.isActive} key={key}>
                            { item.title }
                        </NavbarLink>
                    ))
                }
            </NavbarContent>

            {
                isLogged ? (
                    <NavbarContent>
                        <Dropdown placement="bottom-right">
                            <NavbarItem>
                                <DropdownButton light>
                                    <User
                                        bordered
                                        color={activeColor}
                                        size="md"
                                        src={profilePic}
                                    />
                                </DropdownButton>
                            </NavbarItem>
                            <DropdownMenu color={activeColor}>
                                <DropdownItem key="profile" textValue>
                                    <Text b color="inherit">
                                        { username }
                                    </Text>
                                </DropdownItem>
                                <DropdownItem key="settings" textValue>
                                    Configuraciones
                                </DropdownItem>
                                <DropdownItem key="help" textValue>
                                    Ayuda
                                </DropdownItem>
                                <DropdownItem key="logout2" color="error" withDivider textValue>
                                    Cerrar Sesión
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarContent>
                ) : (
                    <NavbarContent>
                        <RouterLink color="inherit" to="/login">
                            <Text color="white">
                                Ingresar
                            </Text>
                        </RouterLink>

                        <NavbarItem>
                            <RouterLink to="/register">
                                <Badge size="lg" color={activeColor} variant="flat" disableOutline>
                                    Registrarse
                                </Badge>
                            </RouterLink>
                        </NavbarItem>
                    </NavbarContent>
                )
            }

            <NavbarCollapse disableAnimation>
                {
                    navBarRoutes.map((item, key) => (
                        <NavbarCollapseItem activeColor={activeColor} key={key}>
                            <RouterLink to={item.href}>
                                <Text color="inherit">{ item.title }</Text>
                            </RouterLink>
                        </NavbarCollapseItem>
                    ))
                }
            </NavbarCollapse>
        </Navbar>
    )
}
