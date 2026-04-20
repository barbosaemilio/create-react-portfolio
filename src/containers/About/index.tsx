import Title from '../../components/Title'
import Paragrafo from '../../components/paragrafo'
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
      <img src="https://github-readme-stats.vercel.app/api?username=barbosaemilio&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=barbosaemilio&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSecao>
  </section>
)

export default About
