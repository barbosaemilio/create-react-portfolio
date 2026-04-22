import styled from 'styled-components'

export const GitHubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  display: inline-flex;

  img {
    height: 100px;
    width: 320px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      width: 100%;
      height: 150px;
      display: block;
    }
  }
`
