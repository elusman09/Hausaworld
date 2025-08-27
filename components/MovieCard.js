import Link from "next/link";

export default function MovieCard({ movie }) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:scale-105 transform transition cursor-pointer">
        <img src={movie.poster_url} alt={movie.title} className="w-full h-64 object-cover" />
        <div className="p-3">
          <p className="font-bold text-lg">{movie.title}</p>
          <p className="text-gray-400 text-sm">{movie.genre} • {movie.year}</p>
          <p className="text-yellow-400 font-semibold mt-1">{movie.price} NGN</p>
        </div>
      </div>
    </Link>
  );
}
