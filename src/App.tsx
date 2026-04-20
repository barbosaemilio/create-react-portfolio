import Project from './components/Project'
import About from './containers/About'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <About />
          <Project />
        </main>
      </Container>
    </>
  )
}
export default App
