export default function PurchaseCard({ purchase }) {
  return (
    <div className="bg-gray-800 p-4 rounded-2xl shadow-md flex justify-between items-center">
      <div>
        <p className="font-bold">{purchase.movie_title}</p>
        <p className="text-gray-400">Price: {purchase.price} NGN</p>
      </div>
      <a
        href={purchase.download_url}
        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition text-white font-bold"
      >
        Download
      </a>
    </div>
  );
}
