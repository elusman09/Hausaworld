import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import Navbar from "../../components/Navbar";
import ReviewCard from "../../components/ReviewCard";

export default function MovieDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (id) fetchMovie();
  }, [id]);

  const fetchMovie = async () => {
    const { data: movieData } = await supabase
      .from("movies")
      .select("*")
      .eq("id", id)
      .single();

    const { data: reviewsData } = await supabase
      .from("reviews")
      .select("*, profiles(full_name)")
      .eq("movie_id", id)
      .order("created_at", { ascending: false });

    setMovie(movieData);
    setReviews(reviewsData);
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6">
        <img src={movie.poster_url} alt={movie.title} className="w-full md:w-1/3 rounded-2xl" />
        <div className="md:w-2/3 text-white">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="text-gray-400 mt-2">{movie.genre} • {movie.year} • {movie.price} NGN</p>
          <p className="mt-4">{movie.description}</p>

          {movie.trailer_url && (
            <div className="mt-6">
              <iframe
                className="w-full h-64 md:h-96 rounded-2xl"
                src={movie.trailer_url}
                title="Trailer"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          )}

          <button className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-bold transition">
            Buy & Download
          </button>

          <h2 className="text-2xl font-bold mt-10 mb-4">Reviews</h2>
          <div className="flex flex-col gap-4">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
