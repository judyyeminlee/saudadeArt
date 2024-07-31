import { useRef } from "react";
import "./Work.css";
const Work = () => {
  const topRef = useRef(null);
  const tigerToteRef = useRef(null);
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="container" ref={topRef}>
      <div className="row mt-3">
        <div className="col-12">
          <h1 className="pageHeaderTwo">Work</h1>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 text-center">
          <button
            className="btn btn-link"
            onClick={() => scrollToRef(tigerToteRef)}
          >
            Jump to Tiger Tote
          </button>
        </div>
      </div>
      <div id="image-container" className="row mt-3">
        <div className="col-md-6 mb-3">
          <video
            autoPlay
            loop
            muted
            src="/ImagesVideos/Video Part 1.mp4"
            className="img-fluid"
          ></video>
        </div>
        <div className="col-md-6 mb-3">
          <video
            autoPlay
            loop
            muted
            src="/ImagesVideos/Video Part 2.mp4"
            className="img-fluid"
          ></video>
        </div>
        <div className="col-md-4 mb-3">
          <img
            src={window.location.origin + "/ImagesVideos/Mushroom WIP3.JPG"}
            alt="mushroomWIP3"
            className="img-fluid"
          />
        </div>
        <div className="col-md-4 mb-3">
          <img
            src={window.location.origin + "/ImagesVideos/Mushroom WIP.JPG"}
            alt="mushroomWIP"
            className="img-fluid"
          />
        </div>
        <div className="col-md-4 mb-3">
          <img
            src={window.location.origin + "/ImagesVideos/Mushroom WIP2.JPG"}
            alt="mushroomWIP2"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 mb-3">
          <img
            src={window.location.origin + "/ImagesVideos/Mushroom Final.jpeg"}
            alt="mushroomFinal"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 mb-3">
          <img
            src={window.location.origin + "/ImagesVideos/Daydreams Final.jpeg"}
            alt="daydreams"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 mb-3">
          <img
            src={window.location.origin + "/ImagesVideos/Pandemic.JPG"}
            alt="pandemic"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 mb-3">
          <img
            src={window.location.origin + "/ImagesVideos/Tattoo Final.jpeg"}
            alt="tattoo"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 mb-3">
          <img
            src={window.location.origin + "/ImagesVideos/Eyes Final.jpeg"}
            alt="eyes"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 mb-3">
          <img
            src={window.location.origin + "/ImagesVideos/Nude Sketches.JPG"}
            alt="nudeSketches"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 mb-3">
          <img
            src={window.location.origin + "/ImagesVideos/Valentine's Day.jpeg"}
            alt="vDay"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 mb-3">
          <img
            src={window.location.origin + "/ImagesVideos/Tiger Tote WIP2.JPG"}
            alt="tigerTote"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 mb-3">
          <img
            src={window.location.origin + "/ImagesVideos/Tiger Tote WIP.jpeg"}
            alt="tigerToteZoom"
            id="tigerToteZoom"
            ref={tigerToteRef}
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 text-center">
          <button className="btn btn-link" onClick={() => scrollToRef(topRef)}>
            Back to top
          </button>
        </div>
      </div>
    </div>
  );
};
export default Work;
