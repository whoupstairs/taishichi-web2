import React from "react";
import Header from "./Header";
import TopSection from "./TopSection";
import MiddleSection from "./MiddleSection";
import BottomSection from "./BottomSection";
import Footer from "./Footer";

const CenterSection: React.FC = () => {
  return (
    <>
      <Header />
      <TopSection />
      <MiddleSection />
      <BottomSection />
      <Footer />
    </>
  );
};

export default CenterSection;
