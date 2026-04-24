import { useGithubRepos } from '../../hooks/useGithubRepos'
import Projeto from '../projeto'
import Title from '../Title'
import { Lista } from './styles'

const Project = () => {
  const { repos, loading, error } = useGithubRepos('barbosaemilio')

  if (loading) return <p>Carregando projetos...</p>
  if (error) return <p>Erro: {error}</p>

  return (
    <section>
      <Title fontSize={16}>Projetos</Title>
      <Lista>
        {repos.map((repo) => (
          <li key={repo.id}>
            <Projeto
              name={repo.name}
              description={repo.description}
              html_url={repo.html_url}
              language={repo.language}
              stars={repo.stargazers_count}
            />
          </li>
        ))}
      </Lista>
    </section>
  )
}

export default Project
