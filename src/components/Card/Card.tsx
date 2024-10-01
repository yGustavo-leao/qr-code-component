import { Container, ContentContainer, Description, Img, ImgContainer, Title } from "./Card.styled"

export const Card = () => {
    return (
        <Container>
            <ImgContainer>
                <Img src={`${process.env.PUBLIC_URL}/assets/images/image-qr-code.png`} />
            </ImgContainer>

            <ContentContainer>
                <Title>Improve your front-end skills by building projects</Title>
                <Description>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</Description>
            </ContentContainer>
        </Container>
    )
}