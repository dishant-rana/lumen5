import "./App.css";
import { BlogCard } from "./components/BlogCard";
import { Description } from "./components/Description";
import { ExploreVideos } from "./components/ExploreVideos";
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
      <Description />
      <ExploreVideos />
      <BlogCard />
      <Footer />
    </>
  );
}

export default App;
