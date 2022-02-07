import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [width, setWidth] = useState(10);
  const myStyle = {
    width: `${width}%`
  };
  const mainDiv = {
    backgroundColor: "black",
    width: "100%",
    borderRadius: "5px"
  };
  useEffect(() => {
    let timer;
    if (width < 100) {
      timer = setInterval(() => {
        setWidth((width) => width + 10);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [width]);

  return (
    <>
      <div className="heading">Progress Bar</div>
      <div style={mainDiv}>
        <span className="bar" style={myStyle}></span>
      </div>
    </>
  );
}
