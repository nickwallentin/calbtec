import React from "react"
import Layout from "../components/Layout"
import { Section, Wrap, Grid } from "../components/styled"

const ContactPage = () => {
  return (
    <Layout>
      <Section>
        <Wrap style={{ textAlign: "center" }}>
          <div>
            <h1>Kontakt</h1>
            <p>Kontakta Calbtec och få en kostnadsfri konsultation.</p>
          </div>
          <div>
            <strong>Telefon</strong>
            <p>+46 070 70 070</p>

            <strong>Epost</strong>
            <p>kontakt@calbtec.se</p>
          </div>
        </Wrap>
      </Section>
    </Layout>
  )
}

export default ContactPage
