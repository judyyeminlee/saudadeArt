import React from "react";
import "./Home.css"; // Assuming you have a CSS file for custom styles

const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="pageHeader">saudade art</h1>
      <p id="productOne">custom handpainted gifts</p>
      <div className="top row mb-4">
        <div className="col-md-4 image-container">
          <img
            src="/ImagesVideos/mockCustomTote.jpg"
            className="img-fluid"
            alt="mockToteOne"
            id="mockToteOne"
          />
        </div>
        <div className="col-md-4 image-container">
          <img
            src="/ImagesVideos/mockCustomTote2.jpg"
            className="img-fluid"
            alt="mockToteTwo"
            id="mockToteTwo"
          />
        </div>
        <div className="col-md-4 image-container">
          <img
            src="/ImagesVideos/mockCustomTotes.jpg"
            className="img-fluid"
            alt="mockToteThree"
            id="mockToteThree"
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
            id="goldiePicture"
          />
        </div>
        <div className="col-md-4 image-container">
          <img
            src="/ImagesVideos/Goldie Drawing.jpeg"
            className="img-fluid"
            alt="Goldie Drawing"
            id="goldieDrawing"
          />
        </div>
        <div className="col-md-4 image-container">
          <img
            src="/ImagesVideos/White Tote.jpg"
            className="img-fluid"
            alt="Goldie Tote Test"
            id="goldieToteTest"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
