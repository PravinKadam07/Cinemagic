import React, { useState } from "react";
import ContentWrapper from "../../../components/contetWrapper/ContentWrapper";
import { SwitchTabs } from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";

const Trending = () => {
  const [endpoint, setEndPoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endpoint}`);

  const onTabChange = (tab) => {
    console.log("hiii", tab);
    setEndPoint(tab === "day" ? "day" : "week");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">trending</span>
        <SwitchTabs
          data={["day", "week"]}
          onTabChange={(tab) => onTabChange(tab)}
        />
      </ContentWrapper>
    </div>
  );
};

export default Trending;
