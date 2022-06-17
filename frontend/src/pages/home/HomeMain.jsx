import { Header } from "./Header";
import { Home } from "./Home";
import { VideoGrid } from "./VideoGrid";
import { Description } from "./Description";
import { ExploreVideos } from "./ExploreVideos";
import { BlogCard } from "./BlogCard";
import { Footer } from "./Footer";

function HomeMain() {
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

export { HomeMain };
