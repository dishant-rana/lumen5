import "./App.css";
import { BlogCard } from "./components/BlogCard";
import { Footer } from "./components/Footer";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { VideoGrid } from "./components/VideoGrid";
function App() {
  return (
    <>
      <Header />
      <Home />
      <VideoGrid />
      <BlogCard />
      <Footer />
    </>
  );
}

export default App;
