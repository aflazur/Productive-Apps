import { useLoaderData } from "react-router";
import { useState, useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import AppCard from "../Components/AppCard";
import notFoundImg from "../assets/App-Error.png"

export default function Apps() {
  const apps = useLoaderData();
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let result = apps.filter((a) =>
      a.title.toLowerCase().includes(search.toLowerCase())
    );

    return result;
  }, [apps, search]);

  return (
    <div>
      <section className="text-center py-14 px-5 bg-gradient-to-b from-purple-50 to-white border-b border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900">
          Our All Applications
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-5 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <p className="text-gray-700 font-bold">
            ({filtered.length}) Apps Found
          </p>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm">
              <FaSearch className="text-gray-400" size={12} />
              <input
                type="text"
                placeholder="search Apps"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="outline-none text-sm w-44 text-gray-700 placeholder-gray-400 "
              />
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-400 ">
            <div className="flex items-center justify-center" >
              <img src={notFoundImg} alt="" />
            </div>
            <p className="text-5xl font-bold text-gray-600">OPPS!! APP NOT FOUND</p>
            <p className="text-xl mt-4">
              The App you are requesting is not found on our system.  please try another apps
            </p>
            <button
              onClick={() => setSearch("")}
              className="bg-gradient-to-r from-[#632EE3] via-[#8148EB] to-[#9F62F2] text-white px-10 py-3 rounded-xl font-bold mt-4"
            >
             Go Back!
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {filtered.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}