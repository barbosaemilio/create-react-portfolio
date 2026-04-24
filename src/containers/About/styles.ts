import styled from 'styled-components'

export const GitHubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  display: flex;
  width: 100%;
  justify-content: center;

  img {
    height: 210px;
    width: auto;
    object-fit: fill;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;

    img {
      width: 100%;
      height: auto;
      display: block;
      object-fit: contain;
    }
  }
`
