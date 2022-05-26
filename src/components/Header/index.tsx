import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactions: () => void
}

export function Header({ onOpenNewTransactions }: HeaderProps) {

  return (
    <Container>
      <Content>
      <img src={logoImg} alt="dt money" />
      <button type="button" onClick={onOpenNewTransactions}>
        Nova transação
      </button>
      </Content>
    </Container>
  )
}