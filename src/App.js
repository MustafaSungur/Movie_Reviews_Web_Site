import { useState } from "react";
import "./App.css";
import { movieService } from "./services";
import MovieList from "./components/MovieList";
import LazyLoading from "./components/LazyLoading";
function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const submitHandle = (e) => {
    e.preventDefault();
    if (query === "") {
      alert("Please Enter Text");
    } else {
      setLoading(true);
      movieService
        .get(query)
        .then((res) => {
          setLoading(false);
          setData(res.results);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <header className="bg-emerald-500 h-9 lg:h-16 w-full text-center text-3xl font-serif grid items-center text-emerald-100">
        Movie Reviews
      </header>
      <main className="lg:p-15 p-10 flex flex-col gap-10 mx-auto">
        <div className="flex mx-auto">
          <input
            type="text"
            placeholder="Search Movie"
            className="p-1 border border-emerald-700 outline-none rounded w-60 "
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="px-3 bg-emerald-600 rounded ml-3 text-white hover:bg-emerald-500
          transition-duration:0.3 transition"
            onClick={(e) => submitHandle(e)}
            disabled={loading}
          >
            Search
          </button>
        </div>
        {loading ? (
          <div className="font-mono absolute top-1/3 left-1/2  text-center">
            <LazyLoading />
          </div>
        ) : (
          <MovieList data={data} />
        )}
      </main>
    </>
  );
}

export default App;
