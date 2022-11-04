import React from "react";
import { useState, useEffect } from "react";
import Heart from "../images/instaheart.png";
import Comment from "../images/instacomment.png";
import Share from "../images/instashare.png";
import Bookmark from "../images/instabookmark.png";

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
                  <p>•</p>
                  <p id="bluetext">Follow</p>
                  {/* Insert More image here */}
                </div>
                <img
                  src={item.download_url}
                  height="200"
                  width="200"
                  alt="Random fetched"
                />
                <div className="icons">
                  <img src={Heart} width="28" height="28" />
                  <img src={Comment} width="28" height="28" />
                  <img src={Share} width="28" height="28" />
                  <div id="bookmark">
                    <img src={Bookmark} width="28" height="28" />
                  </div>
                </div>
                <div className="author-text">
                  <h6>{item.author}</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur...</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Fetcher;
