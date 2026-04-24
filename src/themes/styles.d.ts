import 'styled-components'
import temaLight from './light'

type Tema = typeof temaLight

declare module 'styled-components' {
  export interface DefaultTheme extends Tema {}
}
