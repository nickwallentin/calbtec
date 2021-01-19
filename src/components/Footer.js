import { Flex, Grid, Wrap } from "../components/styled"

import Logo from "../assets/calbtec-logotyp.svg"
import React from "react"
import styled from "styled-components"

const Footer = () => {
  const date = new Date()
  return (
    <StyledFooter>
      <Wrap>
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <Logo />
            <p style={{ fontSize: "0.7rem", marginTop: "1rem" }}>
              Skräddarsydd båtservice med fokus på kvalitet.
            </p>
          </div>
        </div>
        <p
          style={{ marginTop: "2rem", textAlign: "center", fontSize: "0.7rem" }}
        >
          CALBTEC © Copyright {date.getFullYear()}, alla rättigheter
          förbehållna.
        </p>
      </Wrap>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  padding: 4rem 0 0.5rem 0;
  background: var(--c-sub);
  .container {
    max-width: 500px;
    margin: 0 auto;
  }
  div {
    padding: 0 2rem;
  }
  .mid {
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }
`
