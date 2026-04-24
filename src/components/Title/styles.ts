import styled from 'styled-components'

import { Props } from './types'

export const Title = styled.h3<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) => props.theme.corPrincipal};
  font-weight: bold;
  margin-bottom: 16px;
`
