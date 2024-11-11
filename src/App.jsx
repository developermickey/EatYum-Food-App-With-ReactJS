import Featured from "./components/Featured";
import TopNav from "./components/TopNav";
import Delivery from "./components/Delivery";
import TopPicks from "./components/TopPicks";
import Meal from "./components/Meal";
import Categories from "./components/Categories";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meal />
      <Categories />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default App;
