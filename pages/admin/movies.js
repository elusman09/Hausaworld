import AdminSidebar from "../../components/AdminSidebar";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function AdminMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const { data } = await supabase.from("movies").select("*");
    setMovies(data);
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      <AdminSidebar />
      <div className="flex-1 p-6 text-white flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Manage Movies</h1>
        <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-bold transition w-48">
          Upload New Movie
        </button>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-800 p-4 rounded-2xl shadow-md flex justify-between items-center"
            >
              <p>{movie.title}</p>
              <div className="flex gap-2">
                <button className="bg-yellow-600 px-3 py-1 rounded">Edit</button>
                <button className="bg-red-600 px-3 py-1 rounded">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
