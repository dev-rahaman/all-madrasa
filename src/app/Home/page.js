import AllMadrasa from "../Component/HomeComponets/AllMadrasa";
import Blogs from "../Component/HomeComponets/Blogs";
import Carousel from "../Component/HomeComponets/Carousel";
import Notice from "../Component/HomeComponets/Notice";
import Porik from "../Component/HomeComponets/Porik";
import TopTen from "../Component/HomeComponets/TopTen";

const Home = () => {
  return (
    <>
      {/* <Carousel /> */}
      <AllMadrasa />
      <TopTen />
      <Notice />
      <Porik />
      <Blogs />
    </>
  );
};

export default Home;
