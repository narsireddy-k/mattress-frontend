import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatProvider } from "./contexts/ChatContext";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

function App() {
    return (
        <BrowserRouter>
            <ChatProvider>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/products/:productId" element={<ProductDetail />} />
                    </Routes>
                </Layout>
            </ChatProvider>
        </BrowserRouter>
    );
}

export default App;
