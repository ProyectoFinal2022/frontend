import { Card, Grid, Text, Link } from "@nextui-org/react"

const { Container: GridContainer } = Grid
const {
    Header: CardHeader,
    Body: CardBody,
    Footer: CardFooter,
} = Card

export const CardImage_01 = (props) => {
    const { width, height, img } = props.styles

    return (
        <Card css={{ p: "$2", mw: width }}>
            <CardHeader>
                <img
                    alt={img.alt ? img.alt : 'image'}
                    src={img.src}
                    width={img.width ? img.width : 'auto'}
                    height={img.height ? img.height : 'auto'}
                />
                <GridContainer css={{ pl: "$6" }}>
                    <Grid xs={12}>
                        <Text h4 css={{ lineHeight: "$xs" }}>
                            Next UI
                        </Text>
                    </Grid>
                    <Grid xs={12}>
                        <Text css={{ color: "$accents8" }}>nextui.org</Text>
                    </Grid>
                </GridContainer>
            </CardHeader>
            <CardBody css={{ py: "$2" }}>
                <Text>
                    Make beautiful websites regardless of your design experience.
                </Text>
            </CardBody>
            <CardFooter>
                <Link
                    color="primary"
                    target="_blank"
                    href="https://github.com/nextui-org/nextui"
                >
                    Visit source code on GitHub.
                </Link>
            </CardFooter>
        </Card>
    )
}