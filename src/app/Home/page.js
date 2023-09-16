import AllMadrasa from "./HomeComponets/AllMadrasa";
import Blogs from "./HomeComponets/Blogs";
import Notice from "./HomeComponets/Notice";
import Porik from "./HomeComponets/Porik";
import TopTen from "./top-ten/page";

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
