import { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./components/homepage.jsx";
import Loadercomponent from "./components/loader.jsx";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=> {
      setLoading(false); 
    },4000)
    console.log(loading)
  },[loading])

  return (
    <>
      {/* <div className="loaderWrapper">Hello World</div> */}
      <div className="homePage" >
        {loading ? (<Loadercomponent/>) : (<Homepage />)}
      </div>
    </>
  );
}

export default App;
