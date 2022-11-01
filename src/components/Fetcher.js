import React from "react";
import { useState, useEffect } from "react";

const Fetcher = () => {
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
    console.log(data);
  };

  return (
    <div className="App">
      {isLoaded && (
        <div className="contained">
          {images.map((item, index) => {
            return (
              <div className="maincontainer">
                <div id="image-header">
                  <img
                    src={item.download_url}
                    height="30"
                    width="30"
                    alt="profile picture"
                  />
                  <h6>{item.author}</h6>
                  {/* Insert More image here */}
                </div>
                <img
                  src={item.download_url}
                  height="200"
                  width="200"
                  alt="Random fetched"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
