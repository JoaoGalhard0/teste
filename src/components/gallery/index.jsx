import styled from "styled-components"
import Title from "../title"
import Tags from "./tags"
import Popular from "./popular"
import Image from "./image"


const ContainerGallery = styled.div`
    display: flex;
`

const FluidSection = styled.section`
    flex-grow: 1;
`

const ContainerImages = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Gallery = ({ photos = [], toSelectedPhoto }) => {
    return (
        <>
            <Tags />
            <ContainerGallery>
                <FluidSection>
                    <Title>Navegue pela galeria</Title>
                    <ContainerImages>
                        {photos.map(photo =>
                            <Image
                                whenZoomRequested={toSelectedPhoto}
                                key={photo.id}
                                foto={photo} />)
                        }
                    </ContainerImages>
                </FluidSection>
                <Popular />
            </ContainerGallery>
        </>
    )
}

export default Gallery