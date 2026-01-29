// import { useNavigate } from "react-router-dom";

// export default function RecommendationCard({ item }) {
//   const navigate = useNavigate();
//   const { product, score } = item;

//   return (
//     <div
//       onClick={() => navigate(`/products/${product.product_id}`)}
//       className="cursor-pointer rounded-xl p-5 bg-blue-50 hover:bg-blue-100 transition flex flex-col gap-3"
//     >
//       {/* Top row */}
//       <div className="flex items-start justify-between gap-4">
//         <div>
//           <h3 className="text-lg font-semibold text-gray-900">
//             {product.model_name}
//           </h3>

//           <p className="text-sm text-gray-600 mt-1">
//             Firmness: {product.comfort.firmness_level}
//           </p>
//         </div>

//         <div className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold whitespace-nowrap">
//           {score}% Match
//         </div>
//       </div>

//       {/* Secondary info */}
//       <div className="text-sm text-gray-700">
//         {product.mattress_type} · {product.sleep_position}
//       </div>

//       {/* Feature tags */}
//       <div className="flex flex-wrap gap-2">
//         {product.cooling_feature && (
//           <span className="px-2 py-1 bg-white text-xs rounded-md border">
//             Cooling
//           </span>
//         )}

//         {product.pressure_relief && (
//           <span className="px-2 py-1 bg-white text-xs rounded-md border">
//             Pressure Relief
//           </span>
//         )}

//         {product.motion_isolation && (
//           <span className="px-2 py-1 bg-white text-xs rounded-md border">
//             Motion Isolation
//           </span>
//         )}
//       </div>
//     </div>
//   );
// }


import { useNavigate } from "react-router-dom";
import ProductActions from "../product/ProductActions";

export default function RecommendationCard({ item }) {
  const navigate = useNavigate();
  const { product, score } = item;

  return (
    <div
      onClick={() => navigate(`/products/${product.product_id}`)}
      className="cursor-pointer rounded-xl p-5 bg-blue-50 hover:bg-blue-100 transition flex flex-col gap-3"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {product.model_name}
          </h3>

          <p className="text-sm text-gray-600 mt-1">
            Firmness: {product.comfort.firmness_level}
          </p>
        </div>

        <div className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold whitespace-nowrap">
          {score}% Match
        </div>
      </div>

      {/* 👇 Explain button lives here safely */}
      <ProductActions product={product} />
    </div>
  );
}
