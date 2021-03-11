import React from "react";
import { RecoilRoot } from "recoil";
import CounterLayout from "./components/counter/layout/CounterLayout";

const App = () => {
  return (
    <RecoilRoot>
      <CounterLayout />
    </RecoilRoot>
  );
};

export default App;
