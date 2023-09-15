import AllMadrasa from "./Component/HomeComponets/AllMadrasa";
import Blogs from "./Component/HomeComponets/Blogs";
import Notice from "./Component/HomeComponets/Notice";
import Porik from "./Component/HomeComponets/Porik";
import TopTen from "./home/top-ten/page";

const Home = () => {
  return (
    <div>
      <AllMadrasa />
      <TopTen />
      <Notice />
      <Porik />
      <Blogs />
    </div>
  );
};

export default Home;
