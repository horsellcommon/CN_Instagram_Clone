import "./App.css";
import { useState, useEffect } from "react";
import Sidebar from "./components/sidebar";

function App() {
  useEffect(() => {
    fetchImages();
  }, []);

  const [images, setImages] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setImages(data);
    setIsLoaded(true);
  };
  return (
    <div className="App">
      {isLoaded && (
        <div className="contained">
          {images.map((item, index) => {
            return (
              <div>
                <img src={item.download_url} height="200" width="200" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
