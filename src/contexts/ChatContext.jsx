// import { createContext, useContext, useState } from "react";

// const ChatContext = createContext();

// export function ChatProvider({ children }) {
//     const [isChatOpen, setIsChatOpen] = useState(false);

//     const openChat = () => setIsChatOpen(true);
//     const closeChat = () => setIsChatOpen(false);

//     return (
//         <ChatContext.Provider value={{ isChatOpen, openChat, closeChat }}>
//             {children}
//         </ChatContext.Provider>
//     );
// }

// export function useChat() {
//     const context = useContext(ChatContext);
//     if (!context) {
//         throw new Error("useChat must be used within a ChatProvider");
//     }
//     return context;
// }

import { createContext, useContext, useState } from "react";

const ChatContext = createContext(null);

export function ChatProvider({ children }) {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [recommendations, setRecommendations] = useState([]);

    const openChat = () => setIsChatOpen(true);
    const closeChat = () => setIsChatOpen(false);

    return (
        <ChatContext.Provider
            value={{
                isChatOpen,
                openChat,
                closeChat,
                recommendations,
                setRecommendations,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
}

export function useChat() {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error("useChat must be used within a ChatProvider");
    }
    return context;
}
