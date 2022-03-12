import {css, Global} from "@emotion/react";
import emotionNormalize from 'emotion-normalize';
import styled from "@emotion/styled";

export const GlobalStyles = () => (
  <Global styles={css`
      ${emotionNormalize}
      
      html {
        box-sizing: border-box;
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }
      
      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }
      
      body {
        margin: 0;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.25px;
        font-family: 'Circular Std', sans-serif;
        font-weight: 700;
        color: #fff;
        background-color: #181818;
      }
      
      img {
        max-width: 100%;
        height: auto;
      }
      
      a {
      cursor: pointer;
      color: inherit;
      text-decoration: none;
      
        &:hover {
          text-decoration: underline;
        }
      }
      
      h1,h2,h3,h4,h5,h6 {
      margin: 0;
      }
    `}
  />
)

export const LoginPage = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #070707;
`

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 35px;
  
  @media screen and (max-width: 510px) {
    font-size: 18px;
    line-height: 24px;
  }
`
