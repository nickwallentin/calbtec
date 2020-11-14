import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Section, Wrap, Grid } from "../components/styled"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Kontakt" />
      <Section>
        <Wrap style={{ textAlign: "center" }}>
          <div>
            <h1>Kontakt</h1>
            <p>Kontakta Calbtec och få en kostnadsfri konsultation.</p>
          </div>
          <div>
            <strong>Telefon</strong>
            <p>+46 (0) 760-167 257</p>

            <strong>Epost</strong>
            <p>kontakt@calbtec.se</p>
          </div>
        </Wrap>
      </Section>
    </Layout>
  )
}

export default ContactPage
