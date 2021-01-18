import React from "react"
import styled from "styled-components"

const ImageGallery = ({ children }) => {
  return <GalleryStyles>{children}</GalleryStyles>
}

export default ImageGallery

const GalleryStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
`
