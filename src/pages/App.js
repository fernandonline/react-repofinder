import logoGit from '../assets/github-mark-white.svg'
import styled from 'styled-components';
import Input from '../components/input';
import ItemRepo from '../components/item-repo';

export default function App() {


  return (
    <Container>
      <img src={logoGit} width={72} height={72} alt='logo do github'/>
      <Input/>
      <ItemRepo/>
    </Container>
  );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 20px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem
`