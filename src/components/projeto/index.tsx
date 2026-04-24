import Paragrafo from '../Paragrafo'
import Title from '../Title'

import { Card, LinkBotao } from './styles'

interface ProjetoProps {
  name: string
  description: string | null
  html_url: string
  language: string | null
  stars: number
}

const Projeto = ({
  name,
  description,
  html_url,
  language,
  stars,
 }: ProjetoProps) => {
  return (
    <Card>
      <Title>{name}</Title>
      <Paragrafo tipo="secundario">{description || 'Sem descrição'}</Paragrafo>
      {language && (
        <Paragrafo tipo="secundario">{`🛠 ${language} · ⭐ ${stars}`}</Paragrafo>
      )}
      <LinkBotao href={html_url} target="_blank" rel="noopener noreferrer">
        Visualizar
      </LinkBotao>
    </Card>
  )
}

export default Projeto
