import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("movies").select("*");

    if (error) {
      console.error("Error fetching movies:", error.message);
      setMovies([]);
      setLoading(false);
      return;
    }

    if (!data || data.length === 0) {
      // ✅ Insert demo data if table is empty
      const demoMovies = [
        {
          id: 1,
          title: "Wednesday",
          genre: "Fantasy",
          year: 2022,
          price: 1500,
          poster_url: "https://via.placeholder.com/300x400.png?text=Wednesday",
        },
        {
          id: 2,
          title: "Black Panther",
          genre: "Action",
          year: 2018,
          price: 2000,
          poster_url: "https://via.placeholder.com/300x400.png?text=Black+Panther",
        },
        {
          id: 3,
          title: "Inception",
          genre: "Sci-Fi",
          year: 2010,
          price: 1200,
          poster_url: "https://via.placeholder.com/300x400.png?text=Inception",
        },
        {
          id: 4,
          title: "Avatar",
          genre: "Adventure",
          year: 2009,
          price: 1800,
          poster_url: "https://via.placeholder.com/300x400.png?text=Avatar",
        },
        {
          id: 5,
          title: "Spider-Man: No Way Home",
          genre: "Action",
          year: 2021,
          price: 2500,
          poster_url: "https://via.placeholder.com/300x400.png?text=Spider-Man",
        },
        {
          id: 6,
          title: "The Batman",
          genre: "Thriller",
          year: 2022,
          price: 2200,
          poster_url: "https://via.placeholder.com/300x400.png?text=The+Batman",
        },
        {
          id: 7,
          title: "The Lion King",
          genre: "Animation",
          year: 1994,
          price: 1000,
          poster_url: "https://via.placeholder.com/300x400.png?text=Lion+King",
        },
        {
          id: 8,
          title: "Titanic",
          genre: "Romance",
          year: 1997,
          price: 900,
          poster_url: "https://via.placeholder.com/300x400.png?text=Titanic",
        },
        {
          id: 9,
          title: "Fast & Furious 9",
          genre: "Action",
          year: 2021,
          price: 2000,
          poster_url: "https://via.placeholder.com/300x400.png?text=Fast+%26+Furious+9",
        },
        {
          id: 10,
          title: "Doctor Strange",
          genre: "Fantasy",
          year: 2016,
          price: 1600,
          poster_url: "https://via.placeholder.com/300x400.png?text=Doctor+Strange",
        },
      ];

      const { error: insertError } = await supabase.from("movies").insert(demoMovies);

      if (insertError) {
        console.error("Error inserting demo data:", insertError.message);
      } else {
        console.log("✅ Demo movies inserted into Supabase");
        setMovies(demoMovies);
      }
    } else {
      setMovies(data);
    }

    setLoading(false);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie?.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="container mx-auto p-6">
        <input
          type="text"
          placeholder="Search movies..."
          className="w-full p-3 rounded-xl mb-6 text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {loading ? (
          <p className="text-gray-400 text-center">Loading movies...</p>
        ) : filteredMovies.length === 0 ? (
          <p className="text-gray-400 text-center">No movies found</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {filteredMovies.map((movie, index) => (
              <MovieCard key={movie.id || index} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
