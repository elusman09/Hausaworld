import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const user = supabase.auth.getUser();
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user?.data?.user?.id)
      .single();
    setProfile(data);
  };

  const toggleEmailNotification = async () => {
    await supabase
      .from("profiles")
      .update({ notify_email: !profile.notify_email })
      .eq("id", profile.id);
    setProfile({ ...profile, notify_email: !profile.notify_email });
  };

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="container mx-auto p-6 text-white flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Profile</h1>
        <p>Name: {profile.full_name}</p>
        <p>Email: {profile.email}</p>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={profile.notify_email}
            onChange={toggleEmailNotification}
          />
          Receive Email Notifications
        </label>

        <Link href="/">
          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-bold transition">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}
