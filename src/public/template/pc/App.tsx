import "../common/css/App.css";
import CenterSection from "./CenterSection";
import Footer from "./Footer";
import Header from "./Header";
import LeftSection from "./LeftSection";
import MainContent from "./MainContent";
import RightSection from "./RightSection";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};
