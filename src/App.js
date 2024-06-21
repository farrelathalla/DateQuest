import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import Video from "./1.webm";
import Video2 from "./2.webm";

function App() {
  const [change, setChange] = useState(false);
  useEffect(() => {
    const movingButton = document.getElementById("movingButton");

    const handleMouseOver = () => {
        const container = document.getElementById("container");
        const containerRect = container.getBoundingClientRect();
        const buttonRect = movingButton.getBoundingClientRect();

        const newTop = Math.random() * (containerRect.height - buttonRect.height);
        const newLeft = Math.random() * (containerRect.width - buttonRect.width);

        movingButton.style.top = `${newTop}px`;
        movingButton.style.left = `${newLeft}px`;
    };

    movingButton.addEventListener("mouseover", handleMouseOver);

    return () => {
        movingButton.removeEventListener("mouseover", handleMouseOver);
    };
}, []);

return (
    <div id="container" className="relative w-screen h-screen flex flex-col justify-center items-center bg-pink-100">
        <h1 className="text-3xl font-bold mb-4 text-pink-600">{change ? "lanjut pc yaaa" : "jalan yukkk?"}</h1>
          <video
          autoPlay
          muted
          loop
          className={`h-60 w-60 ${change ? 'hidden' : 'block'}`}
        >
          <source src={Video} type="video/webm"/>
        </video>
          <video
          autoPlay
          muted
          loop
          className={`h-60 w-60 ${change ? 'block' : 'hidden'}`}
        >
          <source src={Video2} type="video/webm"/>
        </video>
        <div className="flex space-x-4">
            <button onClick={() => setChange(true)} className={`px-4 py-2 text-lg bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-800 ${change ? 'hidden' : 'block'}`}>mauuuuu</button>
            <div>
              <button id="movingButton" className={`absolute px-4 py-2 text-lg bg-white text-pink-600 rounded-full font-semibold ${change ? 'hidden' : 'block'}`}>
                  gamauuukk
              </button>
            </div>
        </div>
    </div>
);
}

export default App;
