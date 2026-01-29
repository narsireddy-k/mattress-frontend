export default function ChatHeader({ onClose }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b">
      <h2 className="font-semibold text-lg text-gray-800">
        Sleep Assistant
      </h2>

      <button
        onClick={onClose}
        className="text-gray-500 hover:text-gray-800 text-xl"
      >
        ✕
      </button>
    </div>
  );
}
