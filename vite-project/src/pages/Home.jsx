import { data } from "autoprefixer";
import { useState, useEffect } from "react";

import MovieCard from '../components/MovieCard'

//Variáveis que vão armazenar os valores da URL do filme e a API Key do TMDB
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState();

  //Fazendo o fetch para os filmes mais bem avaliados
  const getTopMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    //Atribuindo ao state setTopMovies os dados da API
    setTopMovies(data.results) //Nesse caso, o results é onde fica os resultado dos filmes da API
  };
  //Chamando a função getTopMovies:
  useEffect(() => {
    //Pegando a URL de cada filme top rated
    const topMoviesURL = `${moviesURL}top_rated?${apiKey}`
    getTopMovies(topMoviesURL)
  }, []) //Aqui é vazio porque vai ser executado quando tirar uma alteração na página inteira, por exemplo quando a página for recarregada.


  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full text-center mb-3">
        <h2 className="text-2xl font-bold min-1000:text-4xl">Melhores filmes:</h2>
      </div >
      <div className="min-500:flex min-500:flex-wrap min-500:justify-between min-500:max-w[1200px]  min-500:w-5/6 min-768:w-5/6  min-1000:w-5/6">
        {topMovies === 0 && <p>Carregando...</p>}
        {/* Imprimindo o componente de MovieCard, passando o movie (melhores filmes) para a função dentro de MovieCard */}
        {topMovies && topMovies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};

export default Home;
