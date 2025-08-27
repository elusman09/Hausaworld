import AdminSidebar from "../../components/AdminSidebar";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function AdminReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const { data } = await supabase.from("reviews").select("*, profiles(full_name), movies(title)");
    setReviews(data);
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      <AdminSidebar />
      <div className="flex-1 p-6 text-white flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Moderate Reviews</h1>
        {reviews.map((r) => (
          <div
            key={r.id}
            className="bg-gray-800 p-4 rounded-2xl shadow-md flex justify-between items-center"
          >
            <div>
              <p className="font-bold">{r.profiles.full_name}</p>
              <p>{r.movies.title}</p>
              <p>{r.comment}</p>
            </div>
            <button className="bg-red-600 px-3 py-1 rounded">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
