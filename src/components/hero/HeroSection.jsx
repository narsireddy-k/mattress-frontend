import productImage from "../../assets/mattress.png";
import { useNavigate } from "react-router-dom";

export default function HeroSection({ onStart }) {
  const navigate = useNavigate();

  return (
    <div className="relative bg-white mx-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 bg-white lg:max-w-2xl lg:w-full">
          <main className="px-6 pt-20 pb-16 lg:px-8">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Wake up feeling{" "}
              <span className="text-blue-600">amazing every day</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Get data-driven sleep recommendations based on your body type,
              sleep position, and comfort preferences.
            </p>

            <div className="mt-8 flex gap-4">
              <button
                onClick={onStart}
                className="px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg"
              >
                Find My Perfect Match
              </button>

              <button
                onClick={() => navigate("/products")}
                className="px-8 py-4 text-lg font-medium text-blue-700 bg-blue-100 rounded-lg"
              >
                Browse Products
              </button>
            </div>
          </main>
        </div>
      </div>

      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-100 flex items-center justify-center">
        <img
          src={productImage}
          alt="Sleep"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
