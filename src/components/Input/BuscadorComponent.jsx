import { getPokemonById } from "../../services/api/pokemon";

export default function BuscadorComponent({
  inputValue,
  setInputValue,
  handleSearch,
}) {
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const search = (event) => {
    event.preventDefault();
    // aquí puedes manejar la búsqueda de tu Pokemon usando el inputValue
    console.log("Buscando Pokemon:", inputValue);
    handleSearch();
  };

  return (
    <div className="flex items-center justify-center py-5 px-4 sm:px-6 lg:px-8">
      <form onSubmit={search} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="pokemon"
            >
              Nombre o ID de Pokemon
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="pokemon"
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Ingresa el nombre o ID del Pokemon"
            />
          </div>
          <div className="w-full px-3">
            <button
              className="mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Buscar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
