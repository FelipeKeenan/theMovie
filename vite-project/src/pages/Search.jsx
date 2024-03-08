import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import MovieCard from "../components/MovieCard"

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

const Search = () => {
  const [searchParams] = useSearchParams()
  const [movies, setMovies] = useState([])
  //Pegando a query do parâmetro através do "Get" com a URL
  const query = searchParams.get("q");

  //Fazendo o fetch para os filmes buscados
  const getSearchedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setMovies(data.results) //Nesse caso, o results é onde fica os resultado dos filmes da API
  };
  //Chamando a função getTopMovies:
  useEffect(() => {
    //Pegando a URL de cada filme buscado
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`
    getSearchedMovies(searchWithQueryURL)
  }, [query])
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full text-center mb-3">
          <h2 className="text-2xl font-bold min-1000:text-4xl">Buscas relacionadas a: <span className="text-yellow-400">{query}</span></h2>
        </div >
        <div className="min-500:flex min-500:flex-wrap min-500:justify-between min-500:max-w[1200px] min-500:w-5/6 min-768:w-5/6  min-1000:w-5/6">
          {/* Imprimindo o componente de MovieCard, passando o movie (melhores filmes) para a função dentro de MovieCard */}
          {movies.length > 0 && movies.map((movie) => <MovieCard  movie={movie} key={movie.id} />)}
        </div>
      </div>
    </div>
  )
}

export default Search
