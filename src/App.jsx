import React, { useState } from "react";
import Test from "./components/Test";
import CustomCursor from "./components/CustomCursor";
import IntroLoader from "./components/IntroLoader";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {/* {loading ? (
        <IntroLoader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <CustomCursor />
          <Test />
        </>
      )} */}

      <CustomCursor />
      <Test />
    </div>
  );
};

export default App;
