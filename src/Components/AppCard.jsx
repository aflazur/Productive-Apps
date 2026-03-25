import { useNavigate } from "react-router";
import { FaDownload, FaStar } from "react-icons/fa";

function formatNum(n) {
  if (n >= 1_000_000) {
    return (n / 1_000_000).toFixed(0) + "M";
  }

  if (n >= 1_000) {
    return (n / 1_000).toFixed(0) + "K";
  }

  return n;
}

export default function AppCard({ app }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/apps/${app.id}`)}
      className="bg-white border border-gray-200 rounded-2xl p-3 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
    >
      <div className="bg-purple-50 rounded-xl  w-full flex items-center justify-center overflow-hidden mb-3">
        <img
          src={app.image}
          alt={app.title}
          className="h-full w-full object-cover rounded-xl group-hover:scale-105 "
          onError={(e) => {
            e.target.src = "https://placehold.co/200x150?text=App";
          }}
        />

      </div>
      <h3 className="text-xl font-semibold text-gray-800 line-clamp-2 mb-2 leading-tight">
        {app.title}
      </h3>
      <div className="flex items-center justify-between text-xs">
        <span className="flex items-center gap-1 text-green-500 font-semibold text-xl">
          <FaDownload size={10} />
          {formatNum(app.downloads)}
        </span>
        <span className="flex items-center gap-1 text-orange-400 font-semibold text-xl">
          <FaStar size={10} />
          {app.ratingAvg}
        </span>
      </div>
    </div>
  );
}