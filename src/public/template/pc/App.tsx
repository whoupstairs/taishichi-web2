import "../common/css/App.css";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};
