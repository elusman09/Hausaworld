import Link from "next/link";

export default function MovieCard({ movie }) {
  if (!movie) {
    return (
      <div className="bg-gray-800 rounded-2xl shadow-md p-4 text-center text-gray-400">
        Movie not available
      </div>
    );
  }

  return (
    <Link href={`/movie/${movie.id || ""}`}>
      <div className="bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:scale-105 transform transition cursor-pointer">
        <img
          src={movie.poster_url || "/placeholder.jpg"}
          alt={movie.title || "Untitled"}
          className="w-full h-64 object-cover"
        />
        <div className="p-3">
          <p className="font-bold text-lg">{movie.title || "Untitled"}</p>
          <p className="text-gray-400 text-sm">
            {movie.genre || "Unknown"} • {movie.year || "N/A"}
          </p>
          <p className="text-yellow-400 font-semibold mt-1">
            {movie.price ? `${movie.price} NGN` : "Free"}
          </p>
        </div>
      </div>
    </Link>
  );
}
