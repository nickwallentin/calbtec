import { Grid, Section, Wrap } from "../components/styled"
import React, { useState } from "react"

import CloseIcon from "../assets/close.svg"
import ImageGallery from "../components/imageGallery"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import rehypeReact from "rehype-react"
import styled from "styled-components"

const CaseTemplate = ({ data }) => {
  const [showLightbox, setShowLightbox] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(null)
  console.log(data)

  const post = data.markdownRemark

  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { "image-gallery": ImageGallery },
  }).Compiler

  const handleLightbox = image => {
    setShowLightbox(!showLightbox)
    if (image) {
      setLightboxImage(image)
    }
  }

  return (
    <Layout>
      <Section
        style={{ paddingBottom: "0px" }}
        bg="linear-gradient(180deg, #d3e5ee 0%, rgba(255,255,255,1) 100%)"
      >
        <Wrap>
          <h1>{post.frontmatter.title}</h1>
          <div className="content">{renderAst(post.htmlAst)}</div>
        </Wrap>
      </Section>

      {showLightbox && (
        <React.Fragment>
          <Overlay onClick={() => handleLightbox()}>
            <CloseIcon />
          </Overlay>
          <Lightbox>
            <img src={lightboxImage.publicURL} />
          </Lightbox>
        </React.Fragment>
      )}
    </Layout>
  )
}

export default CaseTemplate

export const pageQuery = graphql`
  query getCaseBySlug($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      htmlAst
    }
  }
`
const Overlay = styled.div`
  background: #000000e8;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  z-index: 2;
  svg {
    position: fixed;
    top: 2rem;
    right: 2rem;
    path {
      fill: white;
    }
  }
`
const Lightbox = styled.div`
  max-width: 800px;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`
