import {
  FileText,
  Plus,
} from "lucide-react";

function MyListings({ onSell }) {
  return (
    <main className="mx-auto min-h-[60vh] max-w-5xl px-5 py-16 text-center">
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-line bg-panel text-red">
        <FileText size={30} />
      </div>
      <h1 className="mt-5 text-3xl font-extrabold">My Listings</h1>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
        Your posted vehicles will appear here after you sign in. Create a
        listing to start showcasing your vehicle to buyers.
      </p>
      <button
        onClick={onSell}
        className="mt-6 rounded-lg bg-red px-6 py-3 text-sm font-bold"
      >
        List a vehicle <Plus className="ml-2 inline" size={16} />
      </button>
    </main>
  );
}

export default MyListings;
