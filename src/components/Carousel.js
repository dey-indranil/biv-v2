import React, { useState, useEffect } from "react";
import "../styles.css";

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch images from the backend
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/gallery`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          const imageUrls = data.data.filter((item) => item.type === "image");
          setImages(imageUrls);
        }
      })
      .catch((error) => console.error("Error fetching gallery images:", error));
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!images.length) return <p>Loading gallery...</p>;

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].title}
          className="carousel-image"
        />
      </div>
      <div className="carousel-buttons">
        <button onClick={goToPrevious}>❮</button>
        <button onClick={goToNext}>❯</button>
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`carousel-indicator ${
              currentIndex === index ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
