import { useState } from "react";
import "./tab.css";
const TabItem = [
  { id: "1", title: "Tab-1", content: "This is Tab First" },
  { id: "2", title: "Tab-2", content: "This is Tab Second" },
  { id: "3", title: "Tab-3", content: "This is Tab Third" },
  { id: "4", title: "Tab-4", content: "This is Tab Four" },
  { id: "5", title: "Tab-5", content: "This is Tab Five" },
];
const Tab = () => {
  const [tab, setTab] = useState(TabItem[0].content);
  const handleTabChange = (itm) => {
    setTab(itm.content);
  };
  return (
    <>
      <div className="tab-container">
        {TabItem.map((itm) => (
          <div onClick={() => handleTabChange(itm)} key={itm.id}>
            {itm.title}
          </div>
        ))}
      </div>
      {tab}
    </>
  );
};
export default Tab;
