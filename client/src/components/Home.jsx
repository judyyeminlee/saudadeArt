import React from "react";
import "./Home.css"; // Assuming you have a CSS file for custom styles

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row mb-4">
        <div className="col-md-12">
          <h1>saudade art</h1>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-12">
          <p className="pTop">Custom Handpainted Gifts</p>
        </div>
      </div>
      <div className="row mt-1 top">
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
      <div className="row">
        <div className="col-md-12 d-flex align-items-center">
          <p className="pBottom">
            Featured Friend: Frankie (M), Golden Retriever, 3 years old.
            Frankie&apos;s best friend is the mail man - he&apos;ll wait by the
            door every morning.
          </p>
        </div>
      </div>
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
