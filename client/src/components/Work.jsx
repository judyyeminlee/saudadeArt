const Work = () => {
  return (
    <div>
      <h1 className="pageHeaderTwo">work</h1>
      {/* <button type='button' className='btn btn-link'>
        Pen
      </button> */}
      <div className="mainWorkPage">
      <video
        autoPlay
        loop
        muted
        src="/ImagesVideos/Video Part 1.mp4"
        id="videoOne"
      ></video>
      <video
        autoPlay
        loop
        muted
        src="/ImagesVideos/Video Part 2.mp4"
        id="videoTwo"
      ></video>
      <br />
      <img
        src={window.location.origin + "/ImagesVideos/Mushroom WIP3.JPG"}
        alt="mushroomWIP3"
        id="mushroomWip3"
      />
      <img
        src={window.location.origin + "/ImagesVideos/Mushroom WIP.JPG"}
        alt="mushroomWIP"
        id="mushroomWip"
      />
      <img
        src={window.location.origin + "/ImagesVideos/Mushroom WIP2.JPG"}
        alt="mushroomWIP2"
        id="mushroomWip2"
      />
      <img
        src={window.location.origin + "/ImagesVideos/Mushroom Final.jpeg"}
        alt="mushroomFinal"
        id="mushroomFinal"
      />
      <img
        src={window.location.origin + "/ImagesVideos/Daydreams Final.jpeg"}
        alt="daydreams"
        id="daydreams"
      />
      <img
        src={window.location.origin + "/ImagesVideos/Pandemic.JPG"}
        alt="pandemic"
        id="pandemic"
      />
      <img
        src={window.location.origin + "/ImagesVideos/Tattoo Final.jpeg"}
        alt="tattoo"
        id="tattoo"
      />
      <img
        src={window.location.origin + "/ImagesVideos/Eyes Final.jpeg"}
        alt="eyes"
        id="eyes"
      />
      <br />
      <img
        src={window.location.origin + "/ImagesVideos/Nude Sketches.JPG"}
        alt="nudeSketches"
        id="nudeSketches"
      />
      <img
        src={window.location.origin + "/ImagesVideos/Valentine's Day.jpeg"}
        alt="vDay"
        id="vDay"
      />
      <br />
      <img
        src={window.location.origin + "/ImagesVideos/Tiger Tote WIP2.JPG"}
        alt="tigerTote"
        id="tigerTote"
      />
      <img
        src={window.location.origin + "/ImagesVideos/Tiger Tote WIP.jpeg"}
        alt="tigerToteZoom"
        id="tigerToteZoom"
      />
      </div>
    </div>
  );
};

export default Work;
