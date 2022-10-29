import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [state, setstate] = useState(false);
  useEffect(() => {
    const handlechange = () => {
      setstate(!state);
    };
    window.addEventListener("click", handlechange);
  }, [state]);
  return (
    <div className="App">
      <>
        {state ? (
          <div className="pre one"></div>
        ) : (
          <div className="pre two"></div>
        )}
      </>
    </div>
  );
}

export default App;
