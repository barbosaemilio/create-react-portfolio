import Paragrafo from '../paragrafo'
import Title from '../Title'

import { Card, LinkBotao } from './styles'

const Projeto = () => {
  return (
    <Card>
      <Title>Projeto Lista de tarefas</Title>
      <Paragrafo tipo="secundario">Lista de Tarefa com VUE JS.</Paragrafo>
      <LinkBotao>Vizualizar</LinkBotao>
    </Card>
  )
}

export default Projeto
