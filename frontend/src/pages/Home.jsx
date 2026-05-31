import { faCheck, faPhone, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import TopHeader from "../components/ui/TopHeader";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { fetchCategories } from "../utils/api";
import BannerGrid from "../components/ui/BannerGrid";
import TodayDeal from "../components/ui/TodayDeal";
import Categories from "../components/ui/Categories";
import DiscoverProducts from "../components/ui/DiscoverSomething";
import FeaturedSection from "../components/ui/FeatureSection";
import Perks from "../components/ui/Perks";

function Home() {
  return (
    <>
      <TopHeader />
      <Navbar />
      <div>
        <BannerGrid />
      </div>

      <div>
        <TodayDeal />
      </div>
      <hr />

      <div>
        <Categories />
      </div>
      <hr />

      <DiscoverProducts />
      <hr />

      <FeaturedSection />

      <Perks />
      <Footer />
    </>
  );
}

export default Home;

export async function getServerSideProps() {
  console.log("getServerSideProps is being called");
  try {
    const categories = await fetchCategories();
    console.log("getCategories category successfully : ", categories.data);
    return {
      props: {
        categories,
      },
    };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return {
      props: {
        categories: [],
      },
    };
  }
}
