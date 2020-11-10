import { Link } from "gatsby"
import styled from "styled-components"

export const Wrap = styled.div`
  max-width: 1080px;
  width: 90%;
  margin: 0 auto;
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => (props.cols ? props.cols : "1fr 1fr")};
  grid-gap: ${props => (props.gap ? props.gap : "2rem")};

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`
export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? "column" : "row")};
  align-content: ${props => (props.align ? props.align : "initial")};
  justify-content: ${props => (props.justify ? props.justify : "initial")};
`
export const Section = styled.section`
  padding: ${props => (props.space ? props.space : "4rem 0")};
  background: ${props => (props.bg ? props.bg : "transparent")};

  h1:first-of-type,
  h2:first-of-type,
  h3:first-of-type,
  h4:first-of-type {
    margin-top: 0px;
  }
  h1:first-of-type {
    span {
      display: block;
      font-size: 60%;
      margin-bottom: 0.5rem;
      color: black;
    }
  }
`

export const Button = styled(Link)`
  color: var(--c-pri);
  font-weight: 700;
  background: var(--c-pri);
  padding: 15px 20px;
  color: white;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
  position: relative;
  display: inline-block;

  text-align: center;
  max-width: 300px;
  margin: 0 auto;
  margin-top: 1rem;

  cursor: pointer;
  &.line:before {
    width: 1px;
    height: 50px;
    background: black;
    content: " ";
    position: absolute;
    display: block;
    top: -140%;
    left: 50%;
  }
`

export const Blurb = styled.div`
  text-align: center;
  .gatsby-image-wrapper {
    margin-bottom: 1.5rem;
  }
  span {
    display: block;
    color: var(--c-pri);
    font-size: 200%;
    font-style: italic;
    font-weight: 300;
    margin-bottom: 1rem;
  }
`
