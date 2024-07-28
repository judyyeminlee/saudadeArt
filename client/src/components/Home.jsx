const Home = () => {
  return (
    <div class="homeImages">
      <h1>saudade art</h1>
      <p>custom handpainted gifts</p>
      <img
        src={
          window.location.origin + "/ImagesVideos/Mock Embroidered Tote.jpeg"
        }
        width={390}
        height={260}
        alt="mockToteOne"
        id="mockToteOne"
      />
      <img
        src={
          window.location.origin + "/ImagesVideos/Mock Embroidered Tote2.jpeg"
        }
        width={360}
        height={300}
        alt="mockToteTwo"
        id="mockToteTwo"
      />
      <img
        src={
          window.location.origin + "/ImagesVideos/Mock Embroidered Totes.jpeg"
        }
        width={360}
        height={300}
        alt="mockToteThree"
        id="mockToteThree"
      />
      <br />
      <p>featured friends</p>
      <img
        src={window.location.origin + "/ImagesVideos/Goldie Picture.jpeg"}
        width={400}
        height={300}
        alt="goldiePicture"
        id="goldiePicture"
      />
      <img
        src={window.location.origin + "/ImagesVideos/Goldie Drawing.jpeg"}
        width={360}
        height={300}
        alt="goldieDrawing"
        id="goldieDrawing"
      />
      <img
        src={window.location.origin + "/ImagesVideos/White Tote.jpg"}
        width={260}
        height={300}
        alt="goldieToteTest"
        id="goldieToteTest"
      />
    </div>
  );
};

export default Home;
