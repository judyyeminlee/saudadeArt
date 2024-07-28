const Work = () => {
  return (
    <div>
      <h1>work</h1>
      {/* <button type='button' className='btn btn-link'>
        Pen
      </button> */}
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
        width={650}
        height={520}
        alt='nudeSketches'
      />
      <img
        src={window.location.origin + "/ImagesVideos/Valentine's Day.jpeg"}
        width={650}
        height={400}
        alt='vDay'
      />
      <br />
      <img
        src={window.location.origin + "/ImagesVideos/Tiger Tote WIP2.JPG"}
        width={510}
        height={490}
        alt="tigerTote"
      />
      <img
        src={window.location.origin + "/ImagesVideos/Tiger Tote WIP.jpeg"}
        width={550}
        height={400}
        alt="tigerToteZoom"
      />
      <br />
      <img
        src={window.location.origin + "/ImagesVideos/Tiger Tote WIP2.JPG"}
        width={510}
        height={490}
        alt="tigerTote"
      />
      <img
        src={window.location.origin + "/ImagesVideos/Tiger Tote WIP.jpeg"}
        width={550}
        height={400}
        alt="tigerToteZoom"
      />
    </div>
  );
};

export default Work;
