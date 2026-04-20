import styled from 'styled-components'

export const GitHubSecao = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 30px;
  margin-bottom: 54px;
  img {
    flex: 1;
    height: 200px;
    max-width: 495px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    img {
      height: 150px;
      width: 100%;
      max-width: 100%;
    }
  }
`
