import { useState } from "react";
import Navbar from "./component/Navbar";

function App() {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    if (!search.trim()) return;
    alert(`Searching jobs for: ${search}`);
    setSearch("");
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <main className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl leading-tight font-extrabold sm:text-5xl lg:text-6xl">
            Build a world-class Bank with us!
          </h1>

          <p className="mt-6 text-slate-700">
            Focused on Ethical, Digital, and Social Good Banking
          </p>

          <form
            onSubmit={handleSearch}
            className="mt-10 flex max-w-xl items-center rounded-full border border-slate-300 py-2 pr-2 pl-5"
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search job title or location"
              className="w-full text-sm outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-[#b3261e] px-4 py-2 text-white"
            >
              🔍
            </button>
          </form>
        </div>

        {/* Right Video */}
        <section>
          <iframe
            className="aspect-video w-full rounded"
            src="https://www.youtube.com/embed/t8EGglub2nw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </section>
      </main>

      {/* Bottom Section */}
      <section className="pb-16 text-center">
        <p className="text-sm text-slate-700">
          Get personalized job recommendations and find your perfect role!
        </p>

        <div className="mt-5 flex items-center justify-center gap-4">
          <button className="rounded-full bg-[#b3261e] px-8 py-3 font-semibold text-white hover:bg-[#8f1d17]">
            Upload Your Resume
          </button>
          <span className="text-sm">or</span>
          <button className="rounded-full bg-[#b3261e] px-8 py-3 font-semibold text-white hover:bg-[#8f1d17]">
            Answer Questions
          </button>
        </div>

        <label className="mt-6 inline-flex items-center gap-2 text-sm">
          <input type="checkbox" defaultChecked className="h-4 w-4" />
          Sign me up for company updates
        </label>
      </section>
    </div>
  );
}

export default App;