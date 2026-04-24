// hooks/useGithubRepos.ts
import { useState, useEffect } from 'react'

interface Repo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  language: string | null
  topics: string[]
  fork: boolean
}

export const useGithubRepos = (username: string) => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=30`
        )
        if (!response.ok) throw new Error('Erro ao buscar repositórios')
        const data: Repo[] = await response.json()
        // Filtra forks se quiser apenas projetos próprios
        setRepos(data.filter((repo) => !repo.fork))
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido')
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [username])

  return { repos, loading, error }
}
