import styled from 'styled-components'

export const GitHubSecao = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 30px;
  margin-bottom: 54px;
  img {
    width: 50%;
    min-width: 0;
    height: 170px;
    object-fit: fill;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    img {
      height: 150px;
      width: 100%;
    }
  }
`
