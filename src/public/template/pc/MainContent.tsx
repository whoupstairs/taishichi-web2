import React from "react";
import LeftSection from "./LeftSection";
import CenterSection from "./CenterSection";
import RightSection from "./RightSection";

const MainContent: React.FC = () => {
  return (
    <div className="MainContent">
      <LeftSection />
      <CenterSection />
      <RightSection />
    </div>
  );
};

export default MainContent;
