import { useState } from "react"
import { Row, Card, Text, Input, Spacer, Checkbox, Button } from "@nextui-org/react";

const { Body: CardBody } = Card
const { Password: InputPassword } = Input

export const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')

  return (
    <Card variant="bordered" css={{ mw: '400px', width: '400px' }}>
      <CardBody>
        <Row justify="center">
          <Text b size={30}>
            Registrar Usuario
          </Text>
        </Row>

        <Spacer y={1.6} />

        <Input clearable bordered labelPlaceholder="Email" onChange={setEmail}/>

        <Spacer y={1.8} />

        <InputPassword clearable bordered labelPlaceholder="Contraseña" onChange={setPassword}/>

        <Spacer y={1.8} />

        <InputPassword clearable bordered labelPlaceholder="Repetir contraseña" onChange={setRePassword}/>

        <Spacer y={1} />

        <Button>Registrarse</Button>

        <Spacer y={1} />

        <Row justify="center">
          <Text size={14}>¿Ya tiene una cuenta?</Text>
        </Row>
      </CardBody>
    </Card>
  )
}
