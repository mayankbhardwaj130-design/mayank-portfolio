import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import BlogList from "@/pages/BlogList";
import BlogDetail from "@/pages/BlogDetail";

function App() {
  return (
    <ThemeProvider>
      <div className="App min-h-screen bg-background text-foreground antialiased">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
          </Routes>
          <Footer />
          <Toaster position="top-right" richColors />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
