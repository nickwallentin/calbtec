import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import Testimonials from "../components/Testimonials"
import { Section, Wrap, Grid, Flex, Button, Blurb } from "../components/styled"

const KapellPage = () => {
  const data = useStaticQuery(query)
  return (
    <Layout>
      <Section bg="linear-gradient(180deg, #d3e5ee 60%, rgba(255,255,255,1) 60%)">
        <Wrap>
          <Grid cols="1fr 2fr">
            <Flex column justify="center" style={{ textAlign: "center" }}>
              <h1>
                <span>Båtkapell</span>Skräddarsydda båtkapell.
              </h1>
              <p>
                Vi erbjuder reparation av kapell till förmånliga priser. T.ex.
                nya sömmar, fästöglor som lossnat eller delar av sömmar som har
                gått upp
              </p>
              <Button>Kostnadsfri konsultation</Button>
            </Flex>
            <div>
              <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
            </div>
          </Grid>
        </Wrap>
      </Section>
      <Section space="0px">
        <Wrap>
          <Flex style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ textAlign: "center", fontSize: "120%" }}>
              Vi kommer inom en snar framtid kunna erbjuda hela skräddarsydda
              kapell, där du själv väljer nivå på detaljer enligt vad som känns
              bäst för dig idag. Vi kommer aldrig att försöka få dig att köpa
              mer och dyrare.
            </p>
          </Flex>
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <Grid cols="1fr 1fr 1fr">
            <Blurb>
              <h3>Fördel 1</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </Blurb>
            <Blurb>
              <h3>Fördel 2</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </Blurb>
            <Blurb>
              <h3>Fördel 3</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </Blurb>
          </Grid>
        </Wrap>
      </Section>
      <Section bg="var(--c-sub)">
        <Wrap>
          <Grid>
            <div>
              <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
            </div>
            <Flex column justify="center" style={{ textAlign: "center" }}>
              <h2>Hur vi kan hjälpa dig</h2>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <ul style={{ listStyle: "none", padding: "0px", margin: "0px" }}>
                <li>Detta kan CALBTEC göra</li>
                <li>Detta kan CALBTEC göra</li>
                <li>Detta kan CALBTEC göra</li>
                <li>Detta kan CALBTEC göra</li>
                <li>Detta kan CALBTEC göra</li>
                <li>Detta kan CALBTEC göra</li>
              </ul>
            </Flex>
          </Grid>
        </Wrap>
      </Section>
      <Section>
        <Wrap>
          <Testimonials />
        </Wrap>
      </Section>
      <Section space="0px">
        <Wrap>
          <ActionBlock>
            <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
            <Flex
              column
              justify="center"
              style={{ textAlign: "center", padding: "2rem" }}
            >
              <h3>Redo att ta din båt till nästa nivå?</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <div
                style={{
                  padding: "10px 30px",
                  background: "white",
                  color: "var(--c-pri)",
                  cursor: "pointer",
                  margin: "0 auto",
                }}
              >
                Kostnadsfri konsultation
              </div>
            </Flex>
          </ActionBlock>
        </Wrap>
      </Section>
      <Section>
        <Wrap>
          <h2 className="section-title">Hur det fungerar</h2>
          <Grid cols="1fr 1fr 1fr">
            <Blurb>
              <h3>
                <span>1.</span> Kostnadsfri konsultation
              </h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </Blurb>
            <Blurb>
              <h3>
                <span>2.</span> Få en offert
              </h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </Blurb>
            <Blurb>
              <h3>
                <span>3.</span> Utförande/leverans
              </h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </Blurb>
          </Grid>
          <Button>Kostnadsfri konsultation</Button>
        </Wrap>
      </Section>
    </Layout>
  )
}

export default KapellPage

const ActionBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  background: var(--c-pri);
  color: white;
  grid-gap: 2rem;

  h3 {
    color: white;
  }
`

const query = graphql`
  query GetKapellPageImage {
    allFile(
      filter: { relativeDirectory: { eq: "images/front" } }
      sort: { order: ASC, fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
