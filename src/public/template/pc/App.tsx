import "../common/css/App.css";
import BottomSection from "./BottomSection";
import CenterSection from "./CenterSection";
import Footer from "./Footer";
import Header from "./Header";
import LeftSection from "./LeftSection";
import MainContent from "./MainContent";
import MiddleSection from "./MiddleSection";
import RightSection from "./RightSection";
import TopSection from "./TopSection";

export const App = () => {
  return (
    <div className="App">
      <LeftSection />
      <CenterSection />
      <RightSection />
    </div>
  );
};
