import { useNavigate } from "react-router";
import errorImg from "../assets/error-404.png"

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4">
      <img src={errorImg} alt="" />
      <h2 className="text-2xl font-bold mb-3 mt-15">
        Oops, page not found!
      </h2>
      <p className="text-gray-500 text-sm mb-8">
        The page you are looking for is not available.
      </p>
      <button
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-[#632EE3] via-[#8148EB] to-[#9F62F2] text-white px-10 py-3 rounded-xl font-bold mt-4"
            >
             Go Back!
            </button>
    </div>
  );
}