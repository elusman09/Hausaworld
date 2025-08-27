import AdminSidebar from "../../components/AdminSidebar";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <AdminSidebar />
      <div className="flex-1 p-6 text-white">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="mt-4">Overview of users, sales, and recent activities.</p>
      </div>
    </div>
  );
}
