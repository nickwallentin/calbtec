import React from "react"
import styled from "styled-components"
import Logo from "../assets/calbtec-logotyp.svg"
import { Wrap, Grid, Flex } from "../components/styled"

const Footer = () => {
  const date = new Date()
  return (
    <StyledFooter>
      <Wrap>
        <Grid gap="0px" cols="1fr 1fr 1fr">
          <div></div>
          <div className="mid" style={{ textAlign: "center" }}>
            <Logo />
            <p style={{ fontSize: "0.7rem", marginTop: "1rem" }}>
              Skräddarsydd båtservice med fokus på kvalitet.
            </p>
          </div>
          <div></div>
        </Grid>
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
  div {
    padding: 0 2rem;
  }
  .mid {
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }
`
