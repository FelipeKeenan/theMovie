import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
const imageURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className=" flex flex-col items-center text-center border-b mx-4 border-yellow-400 min-500:w-1/2 min-500:m-0 min-500:mt-4  min-500:flex justify-center mt-4 min-500:border-none min-1000:w-1/4 min-1000:border-2">
      <div className="flex flex-col items-center justify-center w-[75%] p-3  bg-[#111] min-1000:mx-2 px-2 ">
        {/* Pegando o poster de cada filme */}
        <img className="h-[400px] min-1000:h-[300px] " src={imageURL + movie.poster_path} alt={movie.title} />
        <div className="text-bold text-sm flex flex-col items-center justify-center gap-4 pb-2 min-500:px-2 min-768:text-xl "> {/*Div-Infos*/}
          <p className="flex items-center justify-center gap-2">Avaliação:
            {/* Exibindo os votos de cada filme */}
            <FaStar className="text-yellow-400 min-500:text-xl" />{movie.vote_average.toFixed(1)}
          </p>
          {showLink && (
            <Link
              className="border bg-yellow-400 hover-btn p-4 w-full border-none cursor-pointer text-black outline-none"
              to={`/movie/${movie.id}`}
            >
              Mais detalhes
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
