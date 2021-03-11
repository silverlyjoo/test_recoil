import React from "react";
import { useRecoilValue } from "recoil";
import charCountState from "../state/countState";

const Counter = () => {
  const count = useRecoilValue(charCountState);

  return <>Character count : {count}</>;
};

export default Counter;
