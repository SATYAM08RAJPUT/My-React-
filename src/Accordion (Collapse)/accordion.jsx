import { useState } from "react";

const accordionArray = [
  { id: "1", title: "First title", content: "It's my First Content" },
  { id: "1", title: "Second title", content: "It's my Second Content" },
  { id: "1", title: "Third title", content: "It's my Third Content" },
  { id: "1", title: "Four title", content: "It's my Four Content" },
  { id: "1", title: "Five title", content: "It's my Five Content" },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState([]);

  const handeAccodion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleToggle = (index) => {
    if (openIndex.includes(index)) {
      setOpenIndex(openIndex.filter((i) => i !== index));
    } else {
      setOpenIndex([...openIndex, index]);
    }
  };

  return (
    <>
      {accordionArray.map((itm, index) => {
        return (
          <>
            <div
              onClick={() => handleToggle(index)}
              style={{
                cursor: "pointer",
                border: "solid 1px black",
                width: "200px",
                padding: "10px",
              }}
            >
              {itm.title}
            </div>
            <div style={{ padding: "5px" }}>
              {openIndex.includes(index) && itm.content}
            </div>
          </>
        );
      })}
    </>
  );
};
export default Accordion;
