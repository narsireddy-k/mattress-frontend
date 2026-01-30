export default function ChatMessage({ sender, text }) {
  const message = String(text);

  // BOT MESSAGE (question / statement)
  if (sender === "bot") {
    return (
      <div className="w-full flex justify-start">
        <div
          className="
            bg-gray-100
            text-gray-800
            text-sm
            leading-relaxed
            px-4 py-3
            rounded-2xl
            shadow-sm
          "
        >
          {message}
        </div>
      </div>
    );
  }

  // USER ANSWER (selected option)
  return (
    <div className="w-full flex justify-end">
      <div
        className="
          px-6 py-3
          rounded-full
          bg-blue-600
          text-white
          text-sm
          font-medium
          shadow-md
          min-w-[160px]
          text-center
        "
      >
        {message}
      </div>
    </div>
  );
}
