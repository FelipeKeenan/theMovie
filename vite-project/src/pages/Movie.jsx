import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs'

import MovieCard from "../components/MovieCard"
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {

  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setMovie(data)
  }
  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieURL)
  }, [])


  //Convertendo a moeda pra dólar arredondado
  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div>
      <div className="movie-page min-500:text-2xl">
        {movie && (
          <>
            <MovieCard movie={movie} showLink={false} />
            <p className="tagline">{movie.tagline}</p>
            <div className="info-description">
              <h3>
                Descrição: <BsFillFileEarmarkTextFill className="inline-block text-yellow-400" />
              </h3>
            </div>
            <div className="info">
              <h3>
                Orçamento  <BsWallet2 className="inline-block text-yellow-400" /> :
              </h3>
              <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className="info">
              <h3>
                Receita: <BsGraphUp className="inline-block text-yellow-400" />
              </h3>
              <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div className="info">
              <h3>
                Duração: <BsHourglassSplit className="inline-block text-yellow-400" />
              </h3>
              <p>{movie.runtime} minutos</p>
            </div>
            {/* <div className="info">
              <h3>
                Gêneros: 
              </h3>
              <ul className="text-center">
                <li>{movie.genres[0].name}</li>
                <li>{movie.genres[1].name}</li>
                <li>{movie.genres[2].name}</li>
              </ul>
            </div> */}
          </>
        )}
      </div>
    </div>
  )
}

export default Movie
