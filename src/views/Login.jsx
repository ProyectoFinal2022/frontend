import { useState } from "react"
import { Row, Card, Text, Input, Spacer, Checkbox, Button } from "@nextui-org/react"

const { Body: CardBody } = Card
const { Password: InputPassword } = Input

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Card variant="bordered" css={{ mw: '400px', width: '400px' }}>
      <CardBody>
        <Row justify="center">
          <Text b size={30}>
            Iniciar Sesión
          </Text>
        </Row>

        <Spacer y={1.6} />

        <Input clearable bordered labelPlaceholder="Email" onChange={setEmail}/>

        <Spacer y={1.8} />

        <InputPassword clearable bordered labelPlaceholder="Contraseña" onChange={setPassword}/>

        <Spacer y={1} />

        <Row justify="space-between">
          <Checkbox>
            <Text size={14}>Recordarme</Text>
          </Checkbox>
          <Text size={14}>¿Olvidó su contraseña?</Text>
        </Row>

        <Spacer y={1} />

        <Button>Ingresar</Button>
      </CardBody>
    </Card>
  )
}
