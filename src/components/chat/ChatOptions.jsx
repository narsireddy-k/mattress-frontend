// export default function ChatOptions() {
//   return (
//     <div className="border-t px-4 py-4">
//       <div className="flex flex-wrap gap-3">
//         <button className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition">
//           Adult
//         </button>
//         <button className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition">
//           Baby / Child
//         </button>
//       </div>
//     </div>
//   );
// }

export default function ChatOptions({ options = [], onSelect }) {
  return (
    <div className="border-t p-4 space-y-2">
      {options.map((option, index) => {
        const value =
          typeof option === "object" ? option.value : option;

        const label =
          typeof option === "object" ? option.label : option;

        return (
          <button
            key={`${value}-${index}`}          // 🔒 absolutely unique
            onClick={() => onSelect(option)}  // pass full option
            className="w-full px-4 py-3 text-left rounded-lg border hover:bg-blue-50 transition"
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}


