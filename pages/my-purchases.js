import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Navbar from "../components/Navbar";
import PurchaseCard from "../components/PurchaseCard";

export default function MyPurchases() {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    fetchPurchases();
  }, []);

  const fetchPurchases = async () => {
    const user = await supabase.auth.getUser();
    const { data } = await supabase
      .from("purchases")
      .select("*, movies(title)")
      .eq("user_id", user.data.user.id);
    setPurchases(data);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="container mx-auto p-6 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-white">My Purchases</h1>
        {purchases.map((p) => (
          <PurchaseCard
            key={p.id}
            purchase={{
              movie_title: p.movies.title,
              price: p.amount,
              download_url: p.download_url,
            }}
          />
        ))}
      </div>
    </div>
  );
}
