import { NavLink, useNavigate } from "react-router-dom";
//Importando os ícones da biblioteca do react-icons
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";

const NavBar = () => {

  const [search, setSearch] = useState("")
  //Colocando o Navigate em uma variável
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    //Validações:
    if (!search) return;

    //Movendo o usuário até a página do filme digitado
    navigate(`/search?q=${search}`)
    //Limpando o campo de busca
    setSearch('')
  }

  return (
    <nav className="flex items-center justify-between px-2 p-4 bg-[#111] shadow-2xl">
      <div className="flex justify-center items-center gap-1">
        <NavLink to="/">
          <span className="text-2xl min-500:text-3xl font-bold min-1000:text-5xl"><BiCameraMovie className="text-yellow-400" /></span>
        </NavLink>
        <p className="text-sm min-500:text-3xl font-bold min-1000:text-5xl">the<span className="text-yellow-400 font-bold">Movie</span></p>
      </div>
      <form className="flex justify-center items-center gap-1"
        onSubmit={handleSubmit}
      >
        <input className="px-2 text-sm rounded-lg min-500:rounded-lg text-black placeholder:text-[#] placeholder:bg-black; min-500:p-2 min-1000:text-xl"
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          //Valor do input com o State inicial
          value={search}
        />
        <button className="min-500:p-2 " type="submit">
          <BiSearchAlt2 className="bg-yellow-400 rounded-lg hover-btn text-xl min-500:text-4xl min-1000:rounded-lg min-1000:text-5xl min-1000:p-2" />
        </button>
      </form>
    </nav>
  );
};

export default NavBar;
