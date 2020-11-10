import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Wrap } from "../components/styled"

import Logo from "../assets/calbtec-logotyp.svg"

export default function Header(props) {
  return (
    <StyledHeader>
      <Wrap>
        <nav role="navigation" aria-label="main navigation">
          <Link to="/">
            <Logo style={{ maxWidth: "150px" }} />
          </Link>

          <div id="contact">
            <span>Kostnadsfri konsultation</span>+46 (0) 707-70 07 70
          </div>
        </nav>
      </Wrap>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  padding: 1.5rem 0;
  background: #d3e5ee;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      color: black;
      text-decoration: none;
      &:hover {
        text-decoration: none;
        box-shadow: none;
      }
    }
    #nav-links {
      flex: 1;
      margin: 0 2rem;
      list-style: none;
      padding: 0;
      display: flex;
      align-items: flex-start;
      li {
        margin: 0px 10px;
      }
    }
    #contact {
      text-align: right;
      font-size: 1.5rem;
      color: var(--c-pri);
      font-weight: 700;
      line-height: 1.5rem;
      span {
        display: block;
        color: #666;
        font-size: 1rem;
        font-weight: 300;
      }

      @media (max-width: 980px) {
        font-size: 1em;
        span {
          font-size: 0.8rem;
        }
      }
    }
  }
`
