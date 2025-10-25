import { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./components/homepage.jsx";
import Loadercomponent from "./components/loader.jsx";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // set loading to false after 4s; run once on mount
    const t = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div className="homePage">
        {/* Always mount Homepage so assets/images can load in background */}
        <Homepage />

        {/* Loader as an overlay while initial loading is true */}
        {loading && (
          <div className="loaderOverlay">
            <Loadercomponent />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
