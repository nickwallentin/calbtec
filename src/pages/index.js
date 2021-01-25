import { Button, Flex, Grid, Section, Wrap } from "../components/styled"
import { Link, graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import Layout from "../components/Layout"
import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"

export default function IndexPage() {
  const data = useStaticQuery(query)

  return (
    <Layout page="home" bgColor="inherit">
      <SEO title="Skräddarsydd båtservice" />
      <Section bg="linear-gradient(180deg, #d3e5ee 65%, rgba(255,255,255,1) 65%)">
        <Wrap>
          <Grid cols="1fr 2fr">
            <Flex
              column
              justify="center"
              style={{ alignItems: "center", textAlign: "center" }}
            >
              <h1 style={{ marginTop: "0px" }}>
                Skräddarsydd båtservice med fokus på kvalitet.
              </h1>
              <p>
                CALBTEC erbjuder reparation och renovering av båtar och
                båtkapell. Samt skräddarsydda båtkapell.
              </p>
              <Button to="/kontakt">Kostnadsfri konsultation</Button>
            </Flex>

            <div>
              <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
            </div>
          </Grid>
        </Wrap>
      </Section>
      <Section space="0">
        <Wrap>
          <Flex style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ textAlign: "center", fontSize: "120%" }}>
              På CALBTEC hjälper vi dig som vill ge ett nytt liv till din båt.
              Vi tror på att göra ett bra jobb, där kunden väljer nivå på
              material och arbete. Dyrast är inte alltid rätt. Tillsammans
              bestämmer vi det arbete som ska utföras och det material ni önskar
              använda.
            </p>
          </Flex>
        </Wrap>
      </Section>
      <Section>
        <Wrap>
          <h2 className="section-title">Tjänster</h2>
          <Grid cols="1fr 1fr 1fr">
            <Blurb>
              <Img fluid={data.allFile.edges[2].node.childImageSharp.fluid} />
              <h3>Båtkapell</h3>
              <p>
                Vi erbjuder reparation av kapell till förmånliga priser. T.ex.
                nya sömmar, fästöglor som lossnat eller delar av sömmar som har
                gått upp.
              </p>
            </Blurb>
            <Blurb>
              <Img fluid={data.allFile.edges[4].node.childImageSharp.fluid} />
              <h3>Båtrenovering</h3>
              <p>
                Dags att sätta nytt liv i båten? CALBTEC renoverar din båt och
                kan göra allt från att polera, ta fram nya dynor till en{" "}
                <Link to="/case/totalrenovering-av-bat">totalrenovering</Link>{" "}
                av båten.
              </p>
            </Blurb>
            <Blurb>
              <Img fluid={data.allFile.edges[3].node.childImageSharp.fluid} />
              <h3>Skräddarsydda kapell</h3>
              <p>
                Inom en snar framtid kommer CALBTEC att erbjuda skräddarsydda
                kapell.
              </p>
            </Blurb>
          </Grid>
        </Wrap>
      </Section>
      <Section bg="var(--c-sub)">
        <Wrap>
          <h2 className="section-title">Om CALBTEC</h2>
          <Grid>
            <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
            <Flex style={{ textAlign: "left" }} column justify="center">
              <h2 style={{ margin: 0 }}>Claes Albertson</h2>

              <p>
                Med en bakgrund i flottan, har passionen för båtar alltid
                funnits i bakgrunden. Efter nästan 30 år som anställd, har jag
                nu startat CALBTEC AB. Jag tror på ärliga jobb i öppen dialog
                med kunden.
              </p>
              <ul>
                <li>Kvitton och skatt är självklara</li>
                <li>Inga oskäliga påslag på material.</li>
                <li>
                  Bestäm själv hur mycket du tycker är rätt att lägga ut just nu
                </li>
                <li>
                  Gåt det att komplettera med utrustningsdetaljer typ fönster
                  senare, så erbjuder jag det.
                </li>
              </ul>
              <p>Det värsta jag kan tänka mig är en missnöjd kund.</p>
            </Flex>
          </Grid>
        </Wrap>
      </Section>
      {/*<Section>
        <Wrap>
          <h2 className="section-title">Referenser</h2>
          <h3
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              textAlign: "center",
              fontStyle: "italic",
              lineHeight: "1.8rem",
            }}
            className="testimonial"
          >
            "A small river named Duden flows by their place and supplies it with
            the necessary regelialia."
            <span>Kalle Anka</span>
          </h3>
        </Wrap>
          </Section> 
          */}
      <Section>
        <Wrap>
          <ActionBlock>
            <Img fluid={data.allFile.edges[4].node.childImageSharp.fluid} />
            <Flex
              column
              justify="center"
              style={{ textAlign: "center", padding: "2rem" }}
            >
              <h3>Case: Totalrenovering</h3>
              <p>
                Ta en titt på hur CALBTEC totalrenoverade och gav en gammal båt
                ett helt nytt liv med en polerad exteriör, modern interiör och
                ett skräddarsytt kapell.
              </p>
              <Link
                to="/case/totalrenovering-av-bat"
                style={{
                  padding: "10px 30px",
                  background: "white",
                  color: "var(--c-pri)",
                  cursor: "pointer",
                  margin: "0 auto",
                }}
              >
                Se mer
              </Link>
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
                Du kontaktar CALBTEC, vi får en första kontakt och lyssnar på
                dina behov. Om möjligheten finns så kommer vi även på besök.
              </p>
            </Blurb>
            <Blurb>
              <h3>
                <span>2.</span> Få en offert
              </h3>
              <p>
                Vi tar fram en offert till dig utifrån dina behov. Här får du
                ett pris på det kommande jobbet.
              </p>
            </Blurb>
            <Blurb>
              <h3>
                <span>3.</span> Utförande/leverans
              </h3>
              <p>
                Godkänner du offerten så sätter vi igång med det önskade arbetet
                och håller dig uppdaterad längs med processen.
              </p>
            </Blurb>
          </Grid>
          <div style={{ textAlign: "center" }}>
            <Button to="/kontakt">Kostnadsfri konsultation</Button>
          </div>
        </Wrap>
      </Section>
    </Layout>
  )
}

const ActionBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  background: var(--c-pri);
  color: white;
  grid-gap: 2rem;

  h3 {
    color: white;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const Blurb = styled.div`
  text-align: center;
  .gatsby-image-wrapper {
    margin-bottom: 1.5rem;
  }
  span {
    display: block;
    color: var(--c-pri);
    font-size: 200% !important;
    font-style: italic;
    font-weight: 300;
    margin-bottom: 1rem;
  }
`

const query = graphql`
  query GetFrontPageImage {
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
