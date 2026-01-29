import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatOptions from "./ChatOptions";
import useChatFlow from "../../hooks/useChatFlow";
import { useEffect, useRef } from "react";

export default function ChatDrawer({ isOpen, onClose }) {
  const {
    loading,
    messages,
    currentQuestion,
    answerQuestion,
    recommendations,
    explainWhy,
    showExplainButton,
    restartChat,
    isComplete,
  } = useChatFlow();

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, recommendations]);

  return (
    <div
      className={`fixed inset-y-0 right-0 w-full sm:w-[420px] bg-white shadow-xl z-50
      transform transition-transform duration-300
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex flex-col h-full">
        <ChatHeader onClose={onClose} />

        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
          {messages.map((msg, index) => (
            <ChatMessage key={index} sender={msg.sender} text={msg.text} />
          ))}

          {recommendations.length > 0 && (
            <div className="mt-6 space-y-3">
              {recommendations.map((item, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg shadow-sm bg-gray-50"
                >
                  <h4 className="font-semibold text-gray-900">
                    {item.product.model_name}
                  </h4>

                  <p className="text-sm text-gray-600 mt-1">
                    Firmness: {item.product.comfort.firmness_level}
                  </p>

                  <p className="text-sm text-gray-600">
                    Type: {item.product.mattress_type}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* 🤖 EXPLAIN BUTTON */}
        {showExplainButton && (
          <div className="p-4 border-t">
            <button
              onClick={explainWhy}
              className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              🤖 Why these products?
            </button>
          </div>
        )}

        {/* 🔄 RESTART CHAT — ONLY AFTER COMPLETION */}
        {isComplete && (
          <div className="p-4 border-t">
            <button
              onClick={restartChat}
              className="w-full py-3 rounded-lg bg-gray-100 text-gray-800 font-semibold hover:bg-gray-200 transition"
            >
              🔄 Restart Chat
            </button>
          </div>
        )}

        {/* OPTIONS */}
        {!loading && currentQuestion && (
          <ChatOptions
            options={currentQuestion.options}
            onSelect={answerQuestion}
          />
        )}
      </div>
    </div>
  );
}
