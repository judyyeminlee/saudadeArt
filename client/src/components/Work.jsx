const Work = () => {
  return (
    <div>
      <h1>work</h1>
      <button type="button" class="btn btn-link">
        Pen
      </button>
      <video
        controls
        autoplay
        loop
        src="/ImagesVideos/Video Part 1.mp4"
        id="videoOne"
      ></video>
      <video
        controls
        autoplay
        loop
        src="/ImagesVideos/Video Part 2.mp4"
      ></video>
      <br />
      <img
        src={window.location.origin + "/ImagesVideos/Mushroom WIP3.JPG"}
        width={400}
        height={480}
        alt="mushroomWIP3"
        id="mushroom3"
      />
      <img
        src={window.location.origin + "/ImagesVideos/Mushroom WIP.JPG"}
        width={440}
        height={480}
        alt="mushroomWIP"
      />
      <img
        src={window.location.origin + "/ImagesVideos/Mushroom WIP2.JPG"}
        width={400}
        height={520}
        alt="mushroomWIP2"
      />
      <img
        src={window.location.origin + "/ImagesVideos/Mushroom Final.jpeg"}
        width={440}
        height={520}
        alt="mushroomFinal"
      />
      <br />
      <img
        src={window.location.origin + "/ImagesVideos/Daydreams Final.jpeg"}
        width={400}
        height={520}
        alt="daydreams"
        id="penStart"
      />
      <img
        src={window.location.origin + "/ImagesVideos/Pandemic.JPG"}
        width={440}
        height={520}
        alt="pandemic"
      />
      <img
        src={window.location.origin + "/ImagesVideos/Tattoo Final.jpeg"}
        width={400}
        height={520}
        alt="tattoo"
      />
      <br />
      <img
        src={window.location.origin + "/ImagesVideos/Nude Sketches.JPG"}
        width={650}
        height={520}
        alt="nudeSketches"
      />
      <img
        src={window.location.origin + "/ImagesVideos/Valentine's Day.jpeg"}
        width={650}
        height={400}
        alt="vDay"
      />
    </div>
  );
};

export default Work;
