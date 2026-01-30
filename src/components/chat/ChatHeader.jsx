export default function ChatHeader({ onClose }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white/80 backdrop-blur rounded-t-2xl">
      <h2 className="font-semibold text-sm text-gray-900 tracking-wide">
        Sleep Assistant
      </h2>

      <button
        onClick={onClose}
        className="
          w-8 h-8 flex items-center justify-center rounded-full
          text-gray-400 hover:text-gray-700 hover:bg-gray-100
          transition
        "
        aria-label="Close chat"
      >
        ✕
      </button>
    </div>
  );
}

