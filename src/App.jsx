import styled from "styled-components"
import GlobalStyle from "./components/globalStyles"
import Header from "./components/header"
import SideBar from "./components/sideBar"
import Banner from "./components/banner"
import bannerBackground from '../src/assets/banner.png'
import Gallery from "./components/gallery"
import photos from "./photos.json"
import { useState } from "react"
import ModalZoom from "./components/modalZoom"


const GradientBackground = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`
const ContainerApp = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`
const ContainerMain = styled.main`
  display: flex;
  gap: 24px;
`

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  const [photosFromGallery, setPhotosFromGallery] = useState(photos)
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <GradientBackground>
      <GlobalStyle />
      <ContainerApp>
        <Header />
        <ContainerMain>
          <SideBar />
          <GalleryContent>
            <Banner
              text="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Gallery
              aoFotoSelecionada={photo => setSelectedPhoto(photo)}
              photos={photosFromGallery} />
          </GalleryContent>
        </ContainerMain>
      </ContainerApp>
      <ModalZoom
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </GradientBackground>
  )
}

export default App
