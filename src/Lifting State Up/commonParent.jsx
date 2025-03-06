import { useState } from "react";
import Input from "../Common Component/input";
import CombineVlaue from "./liftingState";

export default function CommonParent() {
  const [inputFirst, setInputFirst] = useState("");
  const [SecondFirst, setSecondFirst] = useState("");
  return (
    <>
      <Input
        value={inputFirst}
        type={"text"}
        placeholder={"First Input"}
        onchange={(e) => setInputFirst(e.target.value)}
      />
      <Input
        value={SecondFirst}
        type={"text"}
        placeholder={"Second Input"}
        onchange={(e) => setSecondFirst(e.target.value)}
      />
      <CombineVlaue value1={inputFirst} value2={setInputFirst} />
    </>
  );
}
