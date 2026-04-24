import Avatar from '../../components/Avatar'
import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Emílio Barbosa</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        barbosaemilio
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Front-end.
      </Descricao>
      <BotaoTema onClick={props.trocaTema}> trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
