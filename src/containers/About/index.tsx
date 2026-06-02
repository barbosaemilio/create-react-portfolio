import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GitHubSecao } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre Mim:</Title>
    <Paragrafo tipo="secundario">
      Desenvolvedor Front-end, apaixonado por tecnologia e inovação. Com
      experiência em React, TypeScript e desenvolvimento de interfaces
      responsivas, busco criar experiências digitais envolventes e intuitivas.
      Estou sempre em busca de novos desafios e oportunidades para crescer
      profissionalmente.
    </Paragrafo>
    <GitHubSecao>
      <img
        src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=barbosaemilio&theme=dracula"
        alt="GitHub Stats"
      />

      <img
        src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=barbosaemilio&theme=dracula"
        alt="Linguagens mais usadas"
      />
    </GitHubSecao>
  </section>
)

export default About
