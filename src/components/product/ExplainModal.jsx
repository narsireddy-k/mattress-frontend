export default function ExplainModal({ explanation, onClose, loading }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/5 "
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="
          relative
          w-[420px]
          max-w-[90vw]
          bg-white
          rounded-xl
          shadow-2xl
          p-5
          space-y-4
          z-10
          transform
          transition-all
          duration-300
          ease-out
          opacity-100
          scale-100
        "
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-semibold text-gray-800">
            AI Product Explanation
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="max-h-[320px] overflow-y-auto text-sm leading-relaxed pr-2">
          {loading ? (
            <p className="text-gray-500 animate-pulse">
              🤖 AI is explaining the product…
            </p>
          ) : (
            <ul className="list-disc pl-5 space-y-2">
              {explanation.map((point, index) => (
                <li
                  key={index}
                  dangerouslySetInnerHTML={{ __html: point }}
                />
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-sm bg-blue-600 text-white rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
