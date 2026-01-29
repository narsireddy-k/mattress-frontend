// export default function ChatMessage({ sender, text }) {
//   const isBot = sender === "bot";

//   return (
//     <div
//       className={`flex ${isBot ? "justify-start" : "justify-end"}`}
//     >
//       <div
//         className={`max-w-[75%] px-4 py-2 rounded-xl text-sm
//           ${isBot
//             ? "bg-gray-100 text-gray-800"
//             : "bg-blue-600 text-white"}
//         `}
//       >
//         {text}
//       </div>
//     </div>
//   );
// }

export default function ChatMessage({ sender, text }) {
  return (
    <div
      className={`max-w-[80%] px-4 py-2 rounded-lg text-sm ${
        sender === "bot"
          ? "bg-gray-100 text-gray-800"
          : "bg-blue-600 text-white ml-auto"
      }`}
    >
      {String(text)} {/* defensive cast */}
    </div>
  );
}
