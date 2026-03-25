import { useLoaderData } from "react-router";
import { useState } from "react";
import { toast } from "react-toastify";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from "recharts";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";

function formatNum(n) {
  if (n >= 1_000_000) {
    return (n / 1_000_000).toFixed(0) + "M";
  }
  if (n >= 1_000) {
    return (n / 1_000).toFixed(0) + "K";
  }
  return n;
}

export default function AppDetailsPage() {
  const app = useLoaderData();
  const [installed, setInstalled] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("installedApps") || "[]");
    return saved.some((a) => a.id === app?.id);
  });

  const handleInstall = () => {
    const saved = JSON.parse(localStorage.getItem("installedApps") || "[]");
    if (!saved.some((a) => a.id === app.id)) {
      localStorage.setItem("installedApps", JSON.stringify([...saved, app]));
    }
    setInstalled(true);
    toast.success(` ${app.title} installed successfully!`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-5 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-shrink-0">
            <img
              src={app.image}
              alt={app.title}
              className="w-[320px] h-[320px] rounded-xl object-cover border border-gray-200"
              onError={(e) => {
                e.target.src = "https://placehold.co/112?text=App";
              }}
            />
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-bold  mb-2">
              {app.title}
            </h1>
            <p className="text-xl text-gray-500 mb-5">
              Developed by{" "}
              <span className="text-[#8148EB] font-bold ">
                {app.companyName}
              </span>
            </p>

            <div className="flex flex-wrap gap-8 pt-6 border-t-1 border-gray-200">
              <div className="flex flex-col items-center">
                <img src={download} alt="" />
                <span className="text-xl text-gray-400 mb-2 mt-2">Downloads</span>
                <span className="text-2xl font-bold mb-[30px] ">
                  {formatNum(app.downloads)}
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img src={rating} alt="" />
                <span className="text-xl text-gray-400 mb-2 mt-2">Average Ratings</span>
                <span className="text-2xl font-bold ">
                  {app.ratingAvg}
                </span>

              </div>
              <div className="flex flex-col items-center">
                <img src={review} alt="" />
                <span className="text-xl text-gray-400 mb-2 mt-2">Total Reviews</span>
                <span className="text-2xl font-bold">
                  {formatNum(app.reviews)}
                </span>

              </div>
            </div>
            <button
              onClick={handleInstall}
              disabled={installed}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${installed
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-[#00D390] hover:bg-green-500 text-white text-xl shadow-md hover:shadow-green-200"
                }`}
            >
              {installed ? "Installed" : `Install Now (${app.size}MB)`}
            </button>
          </div>
        </div>
      </div>

      {/* ── Ratings Chart ── */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-5">
        <h2 className="text-xl font-bold text-gray-800 mb-5">Ratings</h2>
        <ResponsiveContainer width="100%" height={256}>
          <BarChart
            data={[...app.ratings].reverse()}
            layout="vertical"
            margin={{ top: 0, right: 20, left: 10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" tick={{ fontSize: 11 }} />
            <YAxis
              dataKey="name"
              type="category"
              tick={{ fontSize: 15 }}
              width={42}
            />
            <Tooltip />
            <Bar dataKey="count" fill="#FF8811" radius={[0, 6, 6, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ── Description ── */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 ">
        <h2 className="text-xl font-bold text-gray-800 mb-3">Description</h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          {app.description}
        </p>
      </div>
    </div>
  );
}