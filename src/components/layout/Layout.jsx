import { useChat } from "../../contexts/ChatContext";
import Navbar from "./Navbar";
import ChatDrawer from "../chat/ChatDrawer";

export default function Layout({ children }) {
    const { isChatOpen, openChat, closeChat } = useChat();

    return (
        <>
            <Navbar onStart={openChat} />
            <main>{children}</main>
            <ChatDrawer isOpen={isChatOpen} onClose={closeChat} />
        </>
    );
}
