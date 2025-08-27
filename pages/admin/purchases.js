import AdminSidebar from "../../components/AdminSidebar";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function AdminPurchases() {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    fetchPurchases();
  }, []);

  const fetchPurchases = async () => {
    const { data } = await supabase.from("purchases").select("*");
    setPurchases(data);
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      <AdminSidebar />
      <div className="flex-1 p-6 text-white flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Manage Purchases</h1>
        {purchases.map((p) => (
          <div
            key={p.id}
            className="bg-gray-800 p-4 rounded-2xl shadow-md flex justify-between items-center"
          >
            <p>{p.movie_title} • {p.amount} NGN</p>
            <div className="flex gap-2">
              <button className="bg-green-600 px-3 py-1 rounded">Approve</button>
              <button className="bg-red-600 px-3 py-1 rounded">Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
