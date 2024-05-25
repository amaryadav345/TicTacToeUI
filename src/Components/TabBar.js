import React, { useState } from "react";
import "./TabBar.css";

const TabBar = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", title: "Tab 1", content: "Content of Tab 1" },
    { id: "tab2", title: "Tab 2", content: "Content of Tab 2" },
    { id: "tab3", title: "Tab 3", content: "Content of Tab 3" },
  ];

  const changeTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <ul className="tab-titles">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={activeTab === tab.id ? "active" : ""}
            onClick={() => changeTab(tab.id)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      {/* <div className="tab-content">
        {tabs.filter((tab) => tab.id === activeTab)[0].content}
      </div> */}
    </div>
  );
};

export default TabBar;
