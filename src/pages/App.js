import logoGit from '../assets/github-mark-white.svg'
import styled from 'styled-components';
import Input from '../components/input';
import ItemRepo from '../components/item-repo';
import { useState } from 'react';
import Button from '../components/button';
import {api} from '../services/api'

export default function App() {

  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`)

    if (data.id) {

      const isExist = repos.find(repo => repo.id === data.id)

      if (!isExist) {
        setRepos(prev => [...prev, data])
        setCurrentRepo('')
        return
      }
    }
    alert('repositorio não encontrado')
  }

  return (
    <Container>
      <img src={logoGit} width={72} height={72} alt='logo do github'/>
      <Input value={currentRepo} onChange={(evento) => setCurrentRepo(evento.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map (repo => <ItemRepo repo={repo}/>)}
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