import React from "react";
import "./Home.css"; // Assuming you have a CSS file for custom styles

const Home = () => {
  return (
    <div className="container mt-5">
      <h1>saudade art</h1>
      <p id="productOne">Custom Handpainted Gifts</p>
      <div className="top row mb-4">
        <div className="col-md-4 image-container">
          <img
            src="/ImagesVideos/Mock Embroidered Tote.jpeg"
            className="img-fluid"
            alt="Image 1"
          />
        </div>
        <div className="col-md-4 image-container">
          <img
            src="/ImagesVideos/Mock Embroidered Tote2.jpeg"
            className="img-fluid"
            alt="Image 2"
          />
        </div>
        <div className="col-md-4 image-container">
          <img
            src="/ImagesVideos/Mock Embroidered Totes.jpeg"
            className="img-fluid"
            alt="Image 3"
          />
        </div>
      </div>
      <p id="productTwo" style={{ margin: "40px" }}>
        Featured Friend: Frankie (M), Golden Retriever, 3 years old. "Frankie's
        best friend is the mail man - he'll wait by the door every morning."
      </p>
      <div className="bottom row mb-4">
        <div className="col-md-4 image-container">
          <img
            src="/ImagesVideos/Goldie Picture.jpeg"
            className="img-fluid"
            alt="Goldie Picture"
          />
        </div>
        <div className="col-md-4 image-container">
          <img
            src="/ImagesVideos/Goldie Drawing.jpeg"
            className="img-fluid"
            alt="Goldie Drawing"
          />
        </div>
        <div className="col-md-4 image-container">
          <img
            src="/ImagesVideos/White Tote.jpg"
            className="img-fluid"
            alt="Goldie Tote Test"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
