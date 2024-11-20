import { useQuery } from '@tanstack/react-query'
import { getPokemon } from 'src/api'
import Page from 'src/components/ui/page'

export default function Test() {
  const query = useQuery({
    queryKey: ['pokemon'],
    queryFn: async () => {
      const response = await getPokemon('ditto')
      return response
    },
  })

  if (query.isLoading) {
    return <div>Loading...</div>
  }
  if (query.error || !query.data) {
    return <div>Pokemon doesnt exist</div>
  }
  return (
    <Page>
      <h1>Test</h1>
      {query.data.name}
      <img src={query.data?.sprites.front_default} />
    </Page>
  )
}
