import { supabase } from "../lib/supabase";
import { useState } from "react";

export default function Auth() {
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) alert(error.message);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900">
      <button
        onClick={signInWithGoogle}
        disabled={loading}
        className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl text-white font-bold transition"
      >
        {loading ? "Loading..." : "Sign in with Google"}
      </button>
    </div>
  );
}
