import {css, Global} from "@emotion/react";
import emotionNormalize from 'emotion-normalize';
import styled from "@emotion/styled";

type ImageContainerProps = {
  variant?: string;
}

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
      
      ::-webkit-scrollbar {
        width: 15px;
      }
      
      ::-webkit-scrollbar-track {
        background: transparent;
      }
      
      ::-webkit-scrollbar-thumb {
        background: rgba(255,255,255,.3);
        min-height: 30px;
        
        &:hover {
          background: rgba(255,255,255,.5);
        }
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
      
      ul {
      margin: 0;
      }
      
      .rhap_time, .rhap_main-controls-button, .rhap_button-clear, .rhap_volume-button {
        color: #fff !important;
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
  font-weight: 700;
  
  @media (min-width: 510px) {
    font-size: 24px;
    line-height: 35px;
  }

  @media (min-width: 0px) {
    font-size: 18px;
    line-height: 24px;
  }

`
export const CardContainer = styled.div`
  cursor: pointer;
  background: rgb(38,38,38);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.2s background ease-in-out;
  border-radius: 8px;
  padding: 30px 20px;
  height: 100%;

  &:hover {
    background: ${props => props.theme.colors['black-hover']};
  }
`

export const ImageContainer = styled.div<ImageContainerProps>`
  position: relative;
  overflow: hidden;
  max-width: 215px;
  margin-bottom: 30px;
  
  ${props => props.variant === 'circle' && `
    & img {
    border-radius: 50%;
  }
  `}
`

export const CardName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`

