import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Project from './components/Project'
import About from './containers/About'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [estaUsandotemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandotemaDark)
  }
  return (
    <ThemeProvider theme={estaUsandotemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <About />
          <Project />
        </main>
      </Container>
    </ThemeProvider>
  )
}
export default App
