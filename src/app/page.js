import AllMadrasa from "./home/HomeComponets/AllMadrasa";
import Blogs from "./home/HomeComponets/Blogs";
import Notice from "./home/HomeComponets/Notice";
import Porik from "./home/HomeComponets/Porik";
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
