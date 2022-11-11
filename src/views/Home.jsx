import React from "react"
import { Container } from "@nextui-org/react"
import { Navbar, CardImage_01 } from "./../components"

export const Home = () => {
  const cardStyles = {
    width: '600px',
    height: '100%',
    img: {
      src: 'https://static.nationalgeographicla.com/files/styles/image_3200/public/ng-cosmos-keyart-horizontal2.jpg',
    }
  }

  return (
    <>
      <Navbar/>

      <Container>
        <h1>¡Bienvenido!</h1>

        <CardImage_01 styles={cardStyles}/>
      </Container>
    </>
  )
}
