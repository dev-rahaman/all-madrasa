import AllMadrasa from "./Component/HomeComponets/AllMadrasa";
import Blogs from "./Component/HomeComponets/Blogs";
import Notice from "./Component/HomeComponets/Notice";
import Porik from "./Component/HomeComponets/Porik";
import Footer from "./Sheared/Footer/Footer";
import MainHeader from "./Sheared/Sheard/MainHeader";
import TopTen from "./home/top-ten/page";

const Home = () => {
  return (
    <div>
      <MainHeader />
      <AllMadrasa />
      <TopTen />
      <Notice />
      <Porik />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
