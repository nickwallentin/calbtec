import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import Layout from "../components/Layout"
import { Grid, Section, Wrap } from "../components/styled"

import CloseIcon from "../assets/close.svg"

const CaseTemplate = ({ data }) => {
  const [showLightbox, setShowLightbox] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(null)

  const { Title, Description, ImagesBefore, ImagesAfter } = data.airtable.data

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
          <h1>{Title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: Description.childMarkdownRemark.html,
            }}
          />
        </Wrap>
      </Section>
      <Section>
        <Wrap>
          <h2>Före</h2>
          <Grid cols="1fr 1fr 1fr 1fr" gap="1rem">
            {ImagesBefore.localFiles.map(image => {
              return (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => handleLightbox(image)}
                  className="image"
                >
                  <Img fluid={image.childImageSharp.fluid} />
                </div>
              )
            })}
          </Grid>
        </Wrap>
      </Section>
      <Section style={{ paddingTop: "0px" }}>
        <Wrap>
          <h2>Efter</h2>
          <Grid cols="1fr 1fr 1fr 1fr" gap="1rem">
            {ImagesAfter.localFiles.map(image => {
              return (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => handleLightbox(image)}
                  className="image"
                >
                  <Img fluid={image.childImageSharp.fluid} />
                </div>
              )
            })}
          </Grid>
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
  query getCaseByID($id: String!) {
    airtable(id: { eq: $id }) {
      data {
        Title
        Description {
          childMarkdownRemark {
            html
          }
        }
        ImagesBefore {
          localFiles {
            publicURL
            childImageSharp {
              fluid(maxWidth: 500, maxHeight: 400) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        ImagesAfter {
          localFiles {
            publicURL
            childImageSharp {
              fluid(maxWidth: 500, maxHeight: 400) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
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
