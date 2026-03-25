import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Ratings from "../assets/icon-ratings.png";
import download from "../assets/icon-downloads.png"
 import notFoundImg from "../assets/App-Error.png"

function formatNum(n) {
  if (n >= 1_000_000) {
    return (n / 1_000_000).toFixed(0) + "M";
  }
  if (n >= 1_000) {
    return (n / 1_000).toFixed(0) + "K";
  }
  return n;
}

export default function Installation() {
  const [apps, setApps] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("installedApps") || "[]");
    setApps(saved);
  }, []);

  const handleUninstall = (id) => {
    const updated = apps.filter((a) => a.id !== id);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    setApps(updated);
    toast.info("App uninstalled successfully!");
  };

  const sorted = [...apps].sort((a, b) => {
    if (sort === "high-low") {
      return b.downloads - a.downloads;
    }
    if (sort === "low-high") {
      return a.downloads - b.downloads;
    }
    return 0;
  });

  return (
    <div>
      <section className="text-center py-14 px-5 bg-gradient-to-b from-purple-50 to-white border-b border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900">
          Your Installed Apps
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </section>

      <div className="max-w-3xl mx-auto px-5 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className=" font-semibold">
            {apps.length} Apps Found
          </p>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-white border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-700 outline-none shadow-sm cursor-pointer"
          >
            <option value="">Sort By</option>
            <option value="high-low">High to Low</option>
            <option value="low-high">Low to High</option>
          </select>
        </div>

        {/* Empty State */}
        {sorted.length === 0 ? (
          <div className="text-center py-24 text-gray-400 ">
            <div className="flex items-center justify-center" >
              <img src={notFoundImg} alt="" />
            </div>
            <p className="text-5xl font-bold text-gray-600">OPPS!! APP NOT FOUND</p>
            <p className="text-xl mt-4">
              App is not found on our system. please go to apps page and Install a app .
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {sorted.map((app) => (
              <div
                key={app.id}
                className="flex items-center justify-between bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-12 h-12 rounded-xl object-cover border border-gray-100"
                    onError={(e) => {
                      e.target.src = "https://placehold.co/48?text=App";
                    }}
                  />
                  <div>
                    <p className="font-semibold text-sm text-gray-800">
                      {app.title}
                    </p>
                    <div className="flex gap-3 mt-1 text-xs">
                      
                      <span className="flex items-center gap-1 text-green-500 font-medium">
                        <img className="w-3" src={download} alt="" />
                        {formatNum(app.downloads)}
                      </span>

                      <span className="flex items-center gap-1 text-yellow-500 font-medium"><img className="w-3" src={Ratings} alt="" />
                         {app.ratingAvg}
                      </span>

                      <span className="text-gray-500">{app.size} MB</span>

                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleUninstall(app.id)}
                  className="flex items-center gap-2 bg-[#00D390] hover:bg-red-500 text-white border  px-4 py-2 rounded-xl text-x font-semibold "
                >
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}