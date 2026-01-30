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

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed bottom-6 right-6 z-50
        w-[400px] h-[540px]
        bg-white rounded-2xl
        shadow-2xl
        flex flex-col
        animate-fade-in
        
      "
    >
      <ChatHeader onClose={onClose} />

      {/* CHAT BODY */}
      <div className="flex-1 px-4 py-4 space-y-3 bg-gray-50 overflow-y-auto no-scrollbar">
        {messages.map((msg, index) => (
          <ChatMessage key={index} sender={msg.sender} text={msg.text} />
        ))}

        {recommendations.length > 0 && (
          <div className="mt-4 space-y-3">
            {recommendations.map((item, index) => (
              <div
                key={index}
                className="p-3 rounded-xl bg-white border shadow-sm"
              >
                <h4 className="font-semibold text-gray-900 text-sm">
                  {item.product.model_name}
                </h4>

                <p className="text-xs text-gray-500 mt-1">
                  Firmness: {item.product.comfort.firmness_level}
                </p>

                <p className="text-xs text-gray-500">
                  Type: {item.product.mattress_type}
                </p>
              </div>
            ))}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* EXPLAIN */}
      {(showExplainButton || isComplete) && (
        <div className="p-3 bg-white flex gap-3">
          {showExplainButton && (
            <button
              onClick={explainWhy}
              className="
          flex-1 py-2.5 rounded-xl
          bg-blue-600 text-white text-sm font-semibold
          hover:bg-blue-700 transition
        "
            >
              Why these products?
            </button>
          )}

          {isComplete && (
            <button
              onClick={restartChat}
              className="
          flex-1 py-2.5 rounded-xl
          bg-gray-100 text-gray-800 text-sm font-semibold
          hover:bg-gray-200 transition
        "
            >
              Restart Chat
            </button>
          )}
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
  );
}


