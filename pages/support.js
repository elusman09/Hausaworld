import Navbar from "../components/Navbar";

export default function Support() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto p-6 flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Support & FAQ</h1>

        <div>
          <h2 className="font-bold text-xl mt-4">How to buy movies?</h2>
          <p>Click the “Buy & Download” button on any movie detail page.</p>

          <h2 className="font-bold text-xl mt-4">Payment Methods</h2>
          <p>You can pay via Flutterwave or manual bank transfer (upload proof).</p>

          <h2 className="font-bold text-xl mt-4">Contact Us</h2>
          <p>Email: support@hausaworld.com</p>
          <p>Phone: +234-XXX-XXX-XXXX</p>
        </div>
      </div>
    </div>
  );
}
