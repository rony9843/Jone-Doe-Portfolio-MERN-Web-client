import React from "react";
import CompletePojectComponent from "./CompletePojectComponent";
import IntroduceComponents from "./IntroduceComponents";
import MySkillsComponent from "./MySkillsComponent";
import PortfolioComponent from "./PortfolioComponent";
export default function Layout() {
  return (
    <div>
      <IntroduceComponents></IntroduceComponents>
      <PortfolioComponent></PortfolioComponent>
      <MySkillsComponent></MySkillsComponent>
      <CompletePojectComponent></CompletePojectComponent>
    </div>
  );
}
