export default function ReviewCard({ review }) {
  return (
    <div className="bg-gray-800 p-4 rounded-2xl shadow-md">
      <p className="font-bold">{review.profiles.full_name}</p>
      <p className="text-yellow-400 font-semibold">Rating: {review.rating} ⭐</p>
      <p className="mt-1">{review.comment}</p>
    </div>
  );
}
