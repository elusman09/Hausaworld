import Link from "next/link";

export default function AdminSidebar() {
  return (
    <div className="w-64 bg-gray-800 min-h-screen p-6 flex flex-col gap-4 text-white">
      <h2 className="font-bold text-xl mb-4">Admin Dashboard</h2>
      <Link href="/admin">Overview</Link>
      <Link href="/admin/movies">Movies</Link>
      <Link href="/admin/purchases">Purchases</Link>
      <Link href="/admin/reviews">Reviews</Link>
      <Link href="/profile">Profile</Link>
    </div>
  );
}
